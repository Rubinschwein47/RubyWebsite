import {create} from "zustand/react";

type InfoStore ={
    isLightMode: boolean,
    setTheme: (newIsLightMode: boolean) => void,
}


export const useInfoStore = create<InfoStore>((set)=>({
    isLightMode: false,
    setTheme: (newIsLightMode: boolean) => set({isLightMode: newIsLightMode})
}))