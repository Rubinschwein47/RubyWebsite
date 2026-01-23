import {Project} from "./project";

export const projects: Project[] = [
    {
        texts: [
            {tabName: "portfolio.tabs.info", text: "portfolio.projects.website.text"},
            {tabName: "portfolio.tabs.tech", text: "portfolio.projects.website.tech"},
        ],
        name: "portfolio.projects.website.name",
        images: [],
        badges: [
            {text: "Typescript", color: "blue"},
            {text: "HTML", color: "orange"},
            {text: "CSS", color: "light-blue"},
            {text: "React", color: "blue"},
            {text: "C#", color: "purple"},
            {text: "Asp.net Core", color: "green"}],
        logoPath: "logo512.png",
        logoAlt: "logo of website",
        externalLinks: [{
            text: "portfolio.projects.website.external.github",
            url: "https://github.com/Rubinschwein47/RubyWebsite"
        }],
        colorRotation: 300
    }, {
        texts: [
            {tabName: "portfolio.tabs.info", text: "portfolio.projects.hippocampus.text"},
            {tabName: "portfolio.tabs.tech", text: "portfolio.projects.hippocampus.tech-text"}
        ],
        name: "portfolio.projects.hippocampus.name",
        images: [
            {path: "recources/games/Hippocampus/ingame_front.png", alt: "Main Screen"},
            {path: "recources/games/Hippocampus/pack.png", alt: "Code View of the Package"},
            {path: "recources/games/Hippocampus/card.png", alt: "Code View of the Card"},
            {path: "recources/games/Hippocampus/ingame_packs.png", alt: "View Of the Packages"},
        ],
        badges: [
            {text: "Unity", color: "grey"},
            {text: "C#", color: "purple"},
            {text: "YAML", color: "red"}],
        logoPath: "recources/games/Hippocampus/RDL-Logo.png",
        logoAlt: "logo of rdl",
        externalLinks: [],
        colorRotation: 0,
    }, {
        texts: [{tabName: "portfolio.tabs.info", text: "portfolio.projects.lidlIdlePlanet.text"}],
        name: "portfolio.projects.lidlIdlePlanet.name",
        images: [
            {path: "recources/games/LidlIdle/Start.jpg", alt: "Main Screen"},
            {path: "recources/games/LidlIdle/Explenation.jpg", alt: "Explenation"},
            {path: "recources/games/LidlIdle/View1.jpg", alt: "Simple Look"},
            {path: "recources/games/LidlIdle/WelcomeBack.jpg", alt: "Log in after Time"},
            {path: "recources/games/LidlIdle/View2.jpg", alt: "Full Look"},
        ],
        badges: [
            {text: "Unity", color: "grey"},
            {text: "C#", color: "purple"}],
        logoPath: "recources/games/LidlIdle/Logo.png",
        logoAlt: "logo of lidlIdlePlanet",
        externalLinks: [{
            text: "portfolio.projects.lidlIdlePlanet.external.itch",
            url: "https://rubinschwein47.itch.io/lidle-idle-planet"
        }],
        colorRotation: 250
    }, {
        texts: [{tabName: "portfolio.tabs.info", text: "portfolio.projects.wallOf.text"}],
        name: "portfolio.projects.wallOf.name",
        images: [
            {path: "recources/games/WallOf/Start.png", alt: "Main Screen"},
            {path: "recources/games/WallOf/View1.png", alt: "Simple Look"},
            {path: "recources/games/WallOf/View2.png", alt: "Full Look"},
            {path: "recources/games/WallOf/Achievements.png", alt: "Achievements"},
        ],
        badges: [
            {text: "Unity", color: "grey"},
            {text: "C#", color: "purple"}],
        logoPath: "recources/games/WallOf/Icon.png",
        logoAlt: "logo of WallOf",
        externalLinks: [{
            text: "portfolio.projects.wallOf.external.itch",
            url: "https://rubinschwein47.itch.io/wall-of"
        }],
        colorRotation: 185
    }];
