import {create} from "zustand/react";
import yaml from "js-yaml";
import {LanguageControllerService} from "./services/openapi";

const {translation} = LanguageControllerService;

type InfoStore = {
    isLightMode: boolean,
    setTheme: (newIsLightMode: boolean) => void,
    languageToken: string,
    setLanguage: (newLanguageToken: string) => Promise<boolean>,
    language: any,
    languageLoaded: boolean,
    getTranslation: (key: string) => string,
}

export const useInfoStore = create<InfoStore>((set, get) => ({
    isLightMode: false,
    setTheme: (newIsLightMode: boolean) => set({isLightMode: newIsLightMode}),
    languageToken: "en",
    setLanguage: async (newLanguageToken: string) => {
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

