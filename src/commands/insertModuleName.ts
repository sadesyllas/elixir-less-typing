import * as vscode from 'vscode';
import { getModuleName } from '../utils';

export function insertModuleName() {
    const moduleName = getModuleName();

    if (!moduleName) {
        return;
    }

    vscode.window.activeTextEditor.edit(editBuilder => {
        editBuilder.replace(vscode.window.activeTextEditor.selection, moduleName);
    });
}