import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, createBrowserRouter} from "react-router";
import {routes} from './navigation/router';
import ThemeWrapper from "./theming/themeWrapper";

const router = createBrowserRouter(routes)

let root = ReactDOM.createRoot(document.getElementById('root')!);
console.log("this got called");
root.render(
    <React.StrictMode>
        <ThemeWrapper>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeWrapper>
    </React.StrictMode>
);
