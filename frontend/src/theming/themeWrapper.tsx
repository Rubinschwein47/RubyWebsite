import {ConfigProvider, ThemeConfig} from "antd";
import {darkTheme, darkThemeAntDesign, darkThemeHighContrast} from "./themes/dark";
import {lightTheme, lightThemeAntDesign} from "./themes/light";
import {ReactNode, useEffect, useLayoutEffect} from "react";
import {StoreProgress, useInfoStore} from "../store";
import React from "react";
import "./themeWrapper.css";


const antThemes: { [key: string]: ThemeConfig } = {
    dark: darkThemeAntDesign,
    light: lightThemeAntDesign,
};

const themes: { [key: string]: {[key: string]: string }  } = {
    dark: darkTheme,
    dark_contrast: darkThemeHighContrast,
    light: lightTheme,
}

export default function ThemeWrapper({children}: { children: ReactNode }) {
    const theme = useInfoStore((state) => state.theme);
    const storeInitialized = useInfoStore((state) => state.initialized);
    const initializeStore = useInfoStore((state) => state.initialize);
    console.log("theme: ", theme);
    Object.entries(themes[theme] != null? themes[theme]: themes["dark"]).forEach(([key,value]) => {
        document.documentElement.style.setProperty(key, value);

    });
    // for (const [key, value] of Object.entries(themes[theme])) {
    // }

    const setRatio = useInfoStore((state) => state.refreshRatio);
    useEffect(() => {
        console.log(navigator.languages);
        if (storeInitialized === StoreProgress.uninitialized) {
            initializeStore();
        }
    });
    useLayoutEffect(() => {
        function updateSize() {
            setRatio();
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    });

    return (
        <ConfigProvider
            theme={antThemes[theme]}
        >
            {storeInitialized != StoreProgress.uninitialized? children:null}
        </ConfigProvider>
    );
}