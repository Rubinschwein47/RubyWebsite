import {create} from "zustand/react";
import yaml from "js-yaml";
import {LanguageControllerService} from "./services/openapi";

const {translation} = LanguageControllerService;

type InfoStore = {
    theme: string,
    initialized: boolean,
    initialize: () => void,
    setTheme: (newTheme: string) => void,
    languageToken: string,
    setLanguage: (newLanguageToken: string) => Promise<boolean>,
    language: any,
    languageLoaded: boolean,
    getTranslation: (key: string) => string,
}
const supportedLanguages = [
    'en',
    'de'
]
export const useInfoStore = create<InfoStore>((set, get) => ({
    initialized: false,
    initialize: ()=>{
        var newTheme = localStorage.getItem("theme");
        if(newTheme == null){
            newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches?"dark": "light";
        }
        set({theme: newTheme});
        var newLang = localStorage.getItem("language");
        if(newLang == null){
            navigator.languages.forEach((it)=>{
                if(newLang != null && supportedLanguages.includes(it)){
                    newLang = newLang;
                }
            })
            if(newLang == null){
                newLang = "en";
            }
        }
        get().setLanguage(newLang);
        set({initialized: true});
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
        var request = translation(newLanguageToken);
        const response = await request;
        const parsed = yaml.load(response) as object
        set({language: parsed});
        set({languageLoaded: true});
        return true;
    },
    language: {},
    languageLoaded: false,
    getTranslation: (key: string) => {
        const parts = key.split(".");
        var tree = get().language;
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
            return key
        }
        return tree;
    }
}))

