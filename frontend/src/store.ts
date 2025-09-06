import {create} from "zustand/react";
import yaml from "js-yaml";
import {LanguageControllerService} from "./services/openapi";

const {translation} = LanguageControllerService;

export enum WindowRatio {
    pc = "pc",
    square = "square",
    mobile  = "mobile",
}
export enum StoreProgress{
    uninitialized = "uninitialized",
    progress = "progress",
    finished = "finished"
}

type InfoStore = {
    theme: string,
    initialized: StoreProgress,
    initialize: () => Promise<void>,
    setTheme: (newTheme: string) => void,
    languageToken: string,
    setLanguage: (newLanguageToken: string) => Promise<boolean>,
    language: any,
    languageLoaded: boolean,
    getTranslation: (key: string) => string,
    windowRatio: WindowRatio,
    refreshRatio: () => void,
}
const supportedLanguages = [
    'en',
    'de'
];
export const useInfoStore = create<InfoStore>((set, get) => ({
    initialized: StoreProgress.uninitialized,
    initialize: async ()=>{
        set({initialized: StoreProgress.progress});
        get().refreshRatio();
        let newTheme = localStorage.getItem("theme");
        if(newTheme == null){
            newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches?"dark": "light";
        }
        set({theme: newTheme});
        let newLang = localStorage.getItem("language");
        if(newLang == null){
            navigator.languages.forEach((it)=>{
                if(newLang != null && supportedLanguages.includes(it)){
                    newLang = it;
                }
            });
            if(newLang == null){
                newLang = "en";
            }
        }
        await get().setLanguage(newLang);
        set({initialized: StoreProgress.finished});
    },
    theme: "",
    setTheme: (newTheme: string) => {
        set({theme: newTheme});
        localStorage.setItem("theme", newTheme);
    },
    languageToken: "en",
    setLanguage: async (newLanguageToken: string) => {
        localStorage.setItem("language", newLanguageToken);
        set({languageLoaded: false});
        set({languageToken: newLanguageToken});
        const request = translation(newLanguageToken);
        const response = await request;
        const parsed = yaml.load(response) as object;
        set({language: parsed});
        set({languageLoaded: true});
        return true;
    },
    language: {},
    languageLoaded: false,
    getTranslation: (key: string) => {
        const parts = key.split(".");
        let tree = get().language;
        parts.forEach((it,i) => {
            const treeResult = tree[it as keyof typeof tree];
            if(
                (i != parts.length-1 && typeof treeResult != "object") ||
                (i == parts.length-1 && typeof treeResult != "string")
                ) {
                return parts;
            }
            tree = tree[it as keyof typeof tree];
        });
        if(typeof tree != "string") {
            return key;
        }
        return tree;
    },
    windowRatio: WindowRatio.square,
    refreshRatio: () => {
        const ratio = window.innerWidth / window.innerHeight;
        if(ratio >= 4/3) {
            set({windowRatio: WindowRatio.pc});
            return;
        }
        if(ratio <= 3/4) {
            set({windowRatio: WindowRatio.mobile});
            return;
        }
        set({windowRatio: WindowRatio.square});
    },
}));

