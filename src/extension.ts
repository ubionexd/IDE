// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {
	serialize
} from 'v8';
import * as vscode from 'vscode';
let state = 0;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('IDE (extension) is called!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('ide.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from IDE!');
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(
		vscode.commands.registerCommand('ide.activate', () => {
			vscode.window.showInformationMessage('[I]nstant[D]eveloper[E]nviroment is activated!', "Awesome!");
			state = 1;
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('ide.choose', async () => {

			var selectedText = "";

			const searchQuery = await vscode.window.showInputBox({
				placeHolder: "Type the name of the IDE here...",
				prompt: "Search an IDE!",
				value: selectedText
			});
			if (searchQuery === '') {
				console.log("Invalid branch! User input is blank.");
				vscode.window.showErrorMessage(`Invalid IDE! Input can't be blank.`);
			} else if (searchQuery === 'master') {
				console.log(`Invalid branch! Branch "master" can't be cloned.`);
				vscode.window.showErrorMessage(`Invalid IDE! "master" is not an IDE!`);
			} else if (searchQuery === 'vscode.ts') {
				console.log(`Invalid branch! Branch "vscode.ts" can't be cloned.`);
				vscode.window.showErrorMessage(`Invalid IDE! "vscode.ts" is not an IDE!`);
			} else if (searchQuery === 'vscode') {
				console.log(`Invalid branch! Branch "vscode" can't be cloned.`);
				vscode.window.showErrorMessage(`Invalid IDE! "vscode" is not an IDE!`);
			} else if (searchQuery === 'pages') {
				console.log(`Invalid branch! Branch "pages" can't be cloned.`);
				vscode.window.showErrorMessage(`Invalid IDE! "pages" is not an IDE!`);
			} else {
				const searchUrl = `https://github.com/ubionexd/IDE/tree/${searchQuery}`;
				vscode.env.openExternal(vscode.Uri.parse(searchUrl));
			}
		})
	);

}

// this method is called when your extension is deactivated
export function deactivate() {}