import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const provider = vscode.languages.registerDocumentLinkProvider({ language: 'terraform', scheme: 'file'}, new ModuleSourceLinkProvider());
	context.subscriptions.push(provider);
}

class ModuleSourceLinkProvider implements vscode.DocumentLinkProvider {

    provideDocumentLinks(document: vscode.TextDocument, _token: vscode.CancellationToken): vscode.DocumentLink[] {
        const links: vscode.DocumentLink[] = [];
        const sourceRegex = /source\s*=\s*["']git@github\.com:tempuslabs\/autoform-modules\/\/([^"']+)["']/g;
    
        for (let line = 0; line < document.lineCount; line++) {
            const text = document.lineAt(line).text;
            let match;
            while ((match = sourceRegex.exec(text)) !== null) {
                const [fullMatch, path] = match;
                const start = text.indexOf(fullMatch);
                const end = start + fullMatch.length;
                const range = new vscode.Range(line, start, line, end);

                const url = `https://github.com/tempuslabs/autoform-modules/tree/master/${path}`;
                links.push(new vscode.DocumentLink(range, vscode.Uri.parse(url)));
            }
        }
        return links;
    }
}

export function deactivate() {}
