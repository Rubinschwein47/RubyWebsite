import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Theming from './theming/theming';
import {BrowserRouter, createBrowserRouter} from "react-router";
import {routes} from './navigation/router';

const router = createBrowserRouter(routes)

let root = ReactDOM.createRoot(document.getElementById('root')!);
console.log("this got called");
root.render(
    <React.StrictMode>
        <Theming>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Theming>
    </React.StrictMode>
);
