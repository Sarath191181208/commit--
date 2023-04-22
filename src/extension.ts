// The module 'vscode' contains the VS Code extensibility API
//
// Import the module and reference it with the alias vscode in your code below
import exp = require("constants");
import * as vscode from "vscode";
import { GitExtension, Repository } from "./git";
import { IMessagesPrefix, messagePrefixes } from "./commit_messages_prefixes";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.commit++",
    (uri?) => {
      console.log("commit++ is running");
      let git = getGitExtension();
      if (git === undefined || !git) {
        vscode.window.showErrorMessage("Unable to load Git Extension");
        return;
      }

      let messagePrefixesStandard = [ ...messagePrefixes ]; // copy the standard commit prefixes
      const additionalMessagePrefixes: IMessagesPrefix[] | undefined =
        vscode.workspace
          .getConfiguration("commit++")
          .get("additionalCommitPrefixes"); // get the additional commit prefixes from the settings

      // if there are additional commit prefixes add them to the standard ones
      if (additionalMessagePrefixes !== undefined) {
        messagePrefixesStandard = [...messagePrefixesStandard, ...additionalMessagePrefixes];
      }

      console.log(messagePrefixesStandard);

      // create the quick pick items
      const quickPickItems = messagePrefixesStandard.map((prefix) => {
        return {
          label: prefix.prefix,
          description: prefix.description,
        };
      });

      console.log(quickPickItems);

      // show the quick pick
      vscode.window
        .showQuickPick(quickPickItems, {
          placeHolder: "Select a particular Prefix to append to git commit.",
        })
        .then((selectedItem) => {
          if (selectedItem === undefined || selectedItem === null) {
            return;
          }
          // open the github panel view
          vscode.commands.executeCommand("workbench.view.scm");

          // get the current repository
          const repository = git!.repositories.find((repo) => {
            return repo.rootUri.fsPath === uri?.fsPath;
          });

          // if there is a repository prefix the message

					if (uri) {
            let selectedRepository = git!.repositories.find((repository) => {
              return (
                repository.rootUri.path === uri._rootUri?.path ||
                uri.rootUri.path
              );
            });
            if (selectedRepository) {
              prefixCommit(selectedRepository, selectedItem.label);
            }
          } else {
            for (let repo of git!.repositories) {
              prefixCommit(repo, selectedItem.label);
            }
          }


        });
    }
  );
}

function prefixCommit(repository: Repository, prefix: string) {
  repository.inputBox.value = prefix + " " + repository.inputBox.value;
}

function getGitExtension() {
  const vscodeGit = vscode.extensions.getExtension<GitExtension>("vscode.git");
  const gitExtension = vscodeGit && vscodeGit.exports;
  return gitExtension && gitExtension.getAPI(1);
}

// This method is called when your extension is deactivated
export function deactivate() {}
