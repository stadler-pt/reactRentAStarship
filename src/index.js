import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {HashRouter} from "react-router-dom"
import {ContextProvider} from "./Context"

ReactDOM.render(
    <ContextProvider>
        <HashRouter basename='/'>
            <App />
        </HashRouter>
    </ContextProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
