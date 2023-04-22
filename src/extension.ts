// The module 'vscode' contains the VS Code extensibility API
//
// Import the module and reference it with the alias vscode in your code below
import exp = require("constants");
import * as vscode from "vscode";
import { GitExtension } from "./git";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.EmojiLog2', (uri?) => {
    let git = getGitExtension();
    		if (!git) {
          vscode.window.showErrorMessage("Unable to load Git Extension");
          return;
        }
    vscode.commands.executeCommand("workbench.view.scm");
  });
}

function getGitExtension() {
  const vscodeGit = vscode.extensions.getExtension<GitExtension>("vscode.git");
  const gitExtension = vscodeGit && vscodeGit.exports;
  return gitExtension && gitExtension.getAPI(1);
}

// This method is called when your extension is deactivated
export function deactivate() {}
