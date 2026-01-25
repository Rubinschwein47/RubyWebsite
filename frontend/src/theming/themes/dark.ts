import {theme, ThemeConfig} from "antd";
import {blackBackground, borderRadius, fontSize, headerHeight, white} from "../themeConstants";

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
    "--header-color": "#502665", 
    "--container-color": "#04111e",
    "--background-color": "#000000",
    "--border-radius": borderRadius + "px",
    "--highlight-orange": "#872b08",
    "--highlight-blue": "#0a2c83",
    "--highlight-light-blue": "#1a5795",
    "--highlight-purple": "#540c75",
    "--highlight-grey": "#373737",
    "--highlight-green": "#045717",
    "--highlight-yellow": "#9c8807",
    "--highlight-red": "#800022", 
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
        fontSize: fontSize
        // colorSplit: primary

    },
    components: {
        Layout: {
            headerHeight: headerHeight,
            headerColor: '#2a2744',
        },
    },
};