import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';
import yaml from 'js-yaml';
import {LanguageControllerService} from '../services/openapi';

const {translation} = LanguageControllerService;

// https://github.com/i18next/i18next-http-backend
// https://www.youtube.com/watch?v=dltHi9GWMIo&t=481s
// https://www.i18next.com/overview/getting-started

/* TODO: das backend ist effektiv nur eine function/möglichkeit den translation key
 key vom value zu bekommen
 function(lngs, namespaces) { return customPath; }
 sollte es eigentlich aussehen 
 
 meine warmbuttrige idee: einen translationservice initializen der diese file initilized 
 sowie die nötige translation file vom server und das in ein object geparsed
 
 hirntote idee 2:
 einfach das ganze ding selber schreiben
 braucht einen store, backend call und irgend eine möglichkeit das so simple wie möglich im code zu callen
 am liebsten möglichst seperiert schreiben, das man daraus eventuell ein npm package machen kann
* */ 
i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng: 'de',
        fallbackLng: 'en',
        debug: true,
        backend: {
            crossDomain: true,
            loadPath: (lngs: string) => {
                return translation(lngs)
            },
            parse: (data: any,) => yaml.load(data),
        },
        // resources: {
        //     en:{
        //         translation: {
        //             home: 'Home'
        //         }
        //     },
        //     de:{
        //         translation: {
        //             home: 'Startseite'
        //         }
        //     }
        // }
        // interpolation: {
        //     escapeValue: false,
        // },
    });

// @ts-ignore
export default i18n;
