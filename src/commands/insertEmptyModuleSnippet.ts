import * as vscode from 'vscode';
import {getEmptyModuleSnippet} from '../snippets/emptyModuleSnippet';

export function insertEmptyModuleSnippet() {
  const emptyModuleSnippet = getEmptyModuleSnippet();

  if (!emptyModuleSnippet) {
      return;
  }

  const snippet = new vscode.SnippetString(emptyModuleSnippet);

  vscode.window.activeTextEditor.insertSnippet(snippet);
}