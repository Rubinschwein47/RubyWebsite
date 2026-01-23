import {theme, ThemeConfig} from "antd";
import {blackBackground, borderRadius, headerHeight, white} from "../themeConstants";
import {ThemeClass} from "../themeClass";

export const darkTheme = {
    "--icon-color": "#fff",
    "--bg-icon-color": "255,255,255,0.45",
    "--header-color": "#9e59cb",
    "--container-color": "#022b50",
    "--border-radius": borderRadius + "px",
    "--highlight-orange": "#98320c",
    "--highlight-blue": "#123a9e",
    "--highlight-light-blue": "#2366aa",
    "--highlight-purple": "#621287",
    "--highlight-grey": "#494949",
    "--highlight-green": "#086e20",
    "--highlight-yellow": "#b6a010",
    "--highlight-red": "#a5022d",
    "--background-color": blackBackground,
};
export const darkThemeHighContrast = {
    "--icon-color": "#ffffff", 
    "--bg-icon-color": "0,0,0,0",
    "--header-color": "#613279", 
    "--container-color": "#0a3b6b",
    "--background-color": "#000000",
    "--border-radius": borderRadius + "px",
    "--highlight-orange": "#c44a1c",
    "--highlight-blue": "#2a54d1", 
    "--highlight-light-blue": "#3a82d4", 
    "--highlight-purple": "#8a2cb5", 
    "--highlight-grey": "#707070", 
    "--highlight-green": "#0d8e2e",
    "--highlight-yellow": "#d6c020",
    "--highlight-red": "#c51a3d", 
};

export const darkThemeAntDesign: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        // Seed Token
        colorPrimary: '#c422ec',
        borderRadius: borderRadius,
        colorBgBase: blackBackground,
        colorTextHeading: white,
        // colorBgHeader: '#2a2744',
        // Alias Token
        colorBgContainer: '#163C5EFF',
        colorIcon: white,
        colorIconHover: white,
        colorTextBase: white,
        colorText: white,
        // colorSplit: primary

    },
    components: {
        Layout: {
            headerHeight: headerHeight,
            headerColor: '#2a2744',
        },
    },
};