/**
 * App module.
 *
 * Note - shims must come **before** components so it can be applied there. Update: this doesn't
 * seem to matter anymore.
 */
import { React } from "../deps.ts"
import Counter from "./components/Counter.tsx"
import "./shims-react.ts"
import { FileTree } from "./components/FileTree.tsx"

import { GeistProvider, CssBaseline, Button, Page, Text, useToasts, Tree } from "https://esm.sh/@geist-ui/core?target=esnext&dev&deps=react@17.0.1,react-dom@17.0.1"

import CodeMirror from 'https://esm.sh/@uiw/react-codemirror?target=esnext&dev&deps=react@17.0.1,react-dom@17.0.1'
import { cpp, cppLanguage } from 'https://esm.sh/@codemirror/lang-cpp?target=esnext&dev&deps=react@17.0.1,react-dom@17.0.1'
import { languages } from 'https://esm.sh/@codemirror/language-data?target=esnext&dev&deps=react@17.0.1,react-dom@17.0.1'
import { atomone } from 'https://esm.sh/@uiw/codemirror-theme-atomone?target=esnext&dev&deps=react@17.0.1,react-dom@17.0.1';


const code = `
#include <iostream>

int main() {
    std::cout << "meow++" << std::endl;
}
`;

export function App() {
    const { setToast } = useToasts()
    const handler = (path) => {
        console.debug(`path is:`,path)
        setToast({ text: path })
    }
    return (
        <GeistProvider>
            <CssBaseline />
            <div>
                <link rel="stylesheet" href="styles.css"></link>

                <div className="App">
                    <header className="App-header">Howdy</header>

                    <FileTree />
                    <Counter />
                </div>
                <Page>
                    <CodeMirror value={code} theme={atomone} extensions={[cpp({ base: cppLanguage, codeLanguages: languages })]} />
                    <Text h1>Home Page</Text>
                    <Button>Submit</Button>
                    <Tree onClick={handler}>
                        <Tree.Folder name="components">
                            <Tree.File name="layout.js" />
                            <Tree.File name="layout.js" />
                            <Tree.Folder name="footer">
                                <Tree.File name="footer.js" />
                                <Tree.File name="footer-text.js" />
                                <Tree.File name="footer-license.js" />
                                <div>Hi</div>
                            </Tree.Folder>
                        </Tree.Folder>
                        <Tree.File name="package.json" />
                        <Tree.File name="readme.md" />
                    </Tree>
                </Page>
            </div>
        </GeistProvider>
    )
}
