
import { createRoot } from 'react-dom/client'

import App from './App'
import {Provider} from "react-redux";
import {setupStore} from "./store";
import {BrowserRouter} from "react-router-dom";
import {presetGedza} from "./uikit/presets/presetGedza";
import {Theme} from "@consta/uikit/Theme";

const store = setupStore();

store.subscribe(() => {
    console.log('Изменение', store.getState());
});

createRoot(document.getElementById('root')!).render(
    <Theme preset={presetGedza} className="h-100 d-flex flex-column">
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Theme>
)
