import {Image, Tabs, TabsProps, Typography} from 'antd';
import React from 'react';
import "./portfolio.css";
import ImageWaiter from "../../basics/ImageWaiter";
import {Link} from "react-router";
import {ExportOutlined} from "@ant-design/icons";
import Trans from "../../basics/Translate";
import VDiv from "../../basics/VDiv";
import {useInfoStore, WindowRatio} from "../../store";

const {Title, Text, Paragraph} = Typography;

type ProjectProps = {
    logoPath: string;
    logoAlt: string;
    externalLinks: { text: string, url: string }[] | [],
    name: string,
    badges: { text: string, color: string }[] | [],
    texts: { tabName: string, text: string }[] | [],
    images: { path: string; alt: string; }[] | [],
    colorRotation: number,
}
type WrapperProps = {
    props: ProjectProps,
    projectKey: string,
    windowRatio: WindowRatio,
}
const projects: ProjectProps[] = [
    {
        texts: [{tabName: "portfolio.tabs.info", text: "portfolio.projects.website.text"}],
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

export default function Portfolio() {
    const ratio = useInfoStore((state) => state.windowRatio);
    return <>
        <Title>Portfolio</Title>
        <div style={{height: "3rem"}}></div>
        {projects.map((it) => <Project
            key={it.name + 'd'}
            projectKey={it.name}
            props={it}
            windowRatio={ratio}/>)}
    </>;
}

function Project({props, projectKey, windowRatio}: WrapperProps) {
    const textTabs: TabsProps['items'] = [];
    props.texts.map((it, index) => {
        textTabs.push( {
            label: <Trans path={it.tabName}></Trans>,
            key: String(index+1),
            children:
                (<Paragraph>
                    <Trans path={it.text} asMarkDown={true}/>
                </Paragraph>)
        });
    })

    return (<div key={projectKey} className={"project"}>
        <div className="project-background" style={{filter: "hue-rotate(" + props.colorRotation + "deg)"}}>
            <div className={"project-background-image"}></div>
        </div>
        <div className={"project-head"} style={{flexDirection: windowRatio === WindowRatio.mobile ? "column" : "row"}}>
            {windowRatio === WindowRatio.mobile ?
                // mobile aspect starts here
                <>
                    <Title level={2} style={{margin: "0 0 1rem 0"}}>
                        <Trans path={props.name}/>
                    </Title>
                    <div style={{width: "100%", textAlign: "center"}}>
                        <ImageWaiter size={"12rem"} alt={props.logoAlt} src={props.logoPath}/>
                    </div>
                    <div style={{height: "1rem"}}></div>
                    <Badges badges={props.badges}></Badges>
                    <Tabs
                        type={"card"}
                        defaultActiveKey="1"
                        items={textTabs}
                    />
                    <Links links={props.externalLinks}></Links>
                </> :
                // square and pc starts here
                <>
                    <div style={{display: "grid"}}>
                        <ImageWaiter size={"12rem"} alt={props.logoAlt} src={props.logoPath} forceSquare={true}/>
                        <Links links={props.externalLinks}></Links>
                    </div>
                    <div style={{marginLeft: "1rem"}}>
                        <Title level={2} style={{margin: "0 0 1rem 0"}}>
                            <Trans path={props.name}/>
                        </Title>
                        <Badges badges={props.badges}></Badges>
                        <Tabs
                            type={"card"}
                            defaultActiveKey="1"
                            items={textTabs}
                        />
                    </div>
                </>
            }
        </div>
        <div>
            <Image.PreviewGroup preview={{
                height: "70%",
            }}>
                {props.images.map((it) => (<>
                    <ImageWaiter key={it.alt} size={"5rem"} alt={it.alt} src={it.path}/>
                    <VDiv/>
                </>))}
            </Image.PreviewGroup>
        </div>
    </div>);
}

type BadgeProps = {
    badges: { text: string, color: string }[] | [];
}

function Badges(props: BadgeProps) {
    return (
        <p className={"badge-container"}>
            {props.badges.map((it, index) =>
                <Text className="badge"
                      style={{backgroundColor: "var(--highlight-" + it.color + ")"}}
                      key={index}>{it.text}</Text>
            )}
        </p>
    );
}

type LinkProps = {
    links: { text: string, url: string }[] | [];
}

function Links({links}: LinkProps) {
    return (<>{links.map((it) => <Link
        key={it.url}
        className="badge"
        style={{margin: "1rem 0 0 1rem", backgroundColor: "var(--container-color)", height: "1.7rem"}}
        to={it.url}>
        <Trans path={it.text}/><ExportOutlined style={{color: "var(--link-color)"}}/>
    </Link>)}</>);
}