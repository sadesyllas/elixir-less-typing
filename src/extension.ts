'use strict';

import * as vscode from 'vscode';
import {insertModuleName} from './commands/insertModuleName';
import {insertEmptyModuleSnippet} from './commands/insertEmptyModuleSnippet';

export function activate(context: vscode.ExtensionContext) {
    let insertModuleNameDisposable = vscode.commands.registerCommand('extension.elixirLessTyping.insertModuleName', insertModuleName);
    let insertEmptyModuleSnippetDisposable = vscode.commands.registerCommand('extension.elixirLessTyping.insertEmptyModuleSnippet', insertEmptyModuleSnippet);

    context.subscriptions.push(insertModuleNameDisposable, insertEmptyModuleSnippetDisposable);
}

export function deactivate() { }


