// The module 'vscode' contains the VS Code extensibility API
//
// Import the module and reference it with the alias vscode in your code below
import exp = require("constants");
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // create a basic
  let disposable = vscode.commands.registerCommand("extension.sayHello", () => {
    vscode.window.showInformationMessage("Hello World!");
  });

  const imgPath = vscode.Uri.file(context.asAbsolutePath("img.jpeg")).with({
    scheme: "vscode-resource",
  });

  vscode.window.showInformationMessage(imgPath.toString());

  const decorationType = vscode.window.createTextEditorDecorationType({
    backgroundColor: `url(${imgPath}) no-repeat center`,
    before: {
      contentText: "",
      width: "100%",
      height: "100%",
      margin: "0 auto",
    },
  });

  const activeEditor = vscode.window.activeTextEditor;

  if (activeEditor) {
    const range = new vscode.Range(
      activeEditor.document.lineAt(0).range.start,
      activeEditor.document.lineAt(
        activeEditor.document.lineCount - 1
      ).range.end
    );
    // Create a decoration and apply it to the text editor
    const decoration = { range };
    activeEditor.setDecorations(decorationType, [decoration]);
  }

}

// This method is called when your extension is deactivated
export function deactivate() {}
