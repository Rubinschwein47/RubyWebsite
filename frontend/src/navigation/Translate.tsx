import React from 'react';
import { useInfoStore } from '../store';

type TransProps = {
    path: string;
}
export default function  Trans({path}: TransProps) {
    const translate = useInfoStore((state) => state.getTranslation);
    const translatedText = translate( path);
    
    return (
        <>{translatedText}</>
    );
}