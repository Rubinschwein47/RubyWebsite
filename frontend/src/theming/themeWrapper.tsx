import {ConfigProvider, ThemeConfig} from "antd";
import {darkTheme, darkThemeAntDesign, darkThemeHighContrast} from "./themes/dark";
import {lightTheme, lightThemeAntDesign, lightThemeHighContrast} from "./themes/light";
import {ReactNode, useEffect, useLayoutEffect} from "react";
import {StoreProgress, useInfoStore} from "../store";
import React from "react";
import "./themeWrapper.css";


const antThemes: { [key: string]: ThemeConfig } = {
    dark: darkThemeAntDesign,
    light: lightThemeAntDesign,
    light_contrast: lightThemeAntDesign,
    dark_contrast: darkThemeAntDesign
};

const themes: { [key: string]: {[key: string]: string }  } = {
    dark: darkTheme,
    dark_contrast: darkThemeHighContrast,
    light: lightTheme,
    light_contrast: lightThemeHighContrast,
}

export default function ThemeWrapper({children}: { children: ReactNode }) {
    const theme = useInfoStore((state) => state.theme);
    const storeInitialized = useInfoStore((state) => state.initialized);
    const initializeStore = useInfoStore((state) => state.initialize);
    Object.entries(themes[theme] != null? themes[theme]: themes["dark"]).forEach(([key,value]) => {
        document.documentElement.style.setProperty(key, value);

    });

    const setRatio = useInfoStore((state) => state.refreshRatio);
    useEffect(() => {
        if (storeInitialized === StoreProgress.uninitialized) {
            initializeStore();
        }
    });
    if(theme.includes("contrast")) {
        document.documentElement.style.setProperty("font-size","large");
    }
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