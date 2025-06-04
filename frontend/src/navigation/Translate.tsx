import React, {useState} from 'react';
import { useInfoStore } from '../store';

type TransProps = {
    path: string;
}
export default function  Trans({path}: TransProps) {
    const translate = useInfoStore((state) => state.getTranslation);
    const translatedText = translate("header.links." + path);
    
    return (
        <>{translatedText}</>
    )
}