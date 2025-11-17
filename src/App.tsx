/**
 * App module.
 *
 * Note - shims must come **before** components so it can be applied there. Update: this doesn't
 * seem to matter anymore.
 */
import { React } from "../deps.ts"
import Counter from "./components/Counter.tsx"
import "./shims-react.ts"

export function App() {
    return (
        <div>
            <link rel="stylesheet" href="styles.css"></link>

            <div className="App">
                <header className="App-header">Howdy</header>

                <Counter />
            </div>
        </div>
    )
}
