import {Image, Tabs, TabsProps, Typography} from 'antd';
import React from 'react';
import "./portfolio.css";
import ImageWaiter from "../../basics/ImageWaiter";
import {Link} from "react-router";
import {ExportOutlined} from "@ant-design/icons";
import Trans from "../../basics/Translate";
import VDiv from "../../basics/VDiv";
import {useInfoStore, WindowRatio} from "../../store";
import {projects} from "../../model/projectList";
import {Project} from "../../model/project";


const {Title, Text, Paragraph} = Typography;


type WrapperProps = {
    props: Project,
    projectKey: string,
    windowRatio: WindowRatio,
}

export default function Portfolio() {
    const ratio = useInfoStore((state) => state.windowRatio);
    return <>
        <Title>Portfolio</Title>
        <div style={{height: "3rem"}}></div>
        {projects.map((it) => <RenderProject
            key={it.name + 'd'}
            projectKey={it.name}
            props={it}
            windowRatio={ratio}/>)}
    </>;
}

function RenderProject({props, projectKey, windowRatio}: WrapperProps) {
    const textTabs: TabsProps['items'] = [];
    props.texts.map((it, index) => {
        textTabs.push({
            label: <Trans path={it.tabName}></Trans>,
            key: String(index + 1),
            children:
                (<Paragraph>
                    <Trans path={it.text} asMarkDown={true}/>
                </Paragraph>)
        });
    })

    function PCHeadRender() {
        return <>
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
                    style={{whiteSpace: "break-spaces"}}
                />
            </div>
        </>;
    }

    function MobileHeadRender() {
        return <>
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
                style={{whiteSpace: "break-spaces"}}
            />
            <Links links={props.externalLinks}></Links>
        </>;
    }

    return (<div key={projectKey} className={"project"}>
        <div className="project-background" style={{filter: "hue-rotate(" + props.colorRotation + "deg)"}}>
            <div className={"project-background-image"}></div>
        </div>
        <div className={"project-head"} style={{flexDirection: windowRatio === WindowRatio.mobile ? "column" : "row"}}>
            {windowRatio === WindowRatio.mobile ? MobileHeadRender() : PCHeadRender()}
        </div>
        <div>
            <Image.PreviewGroup preview={
                {}    
                // windowRatio === WindowRatio.mobile ? {
                //     width: "100%"
                // } : {
                //     height: "70%"
                // }
            }
            >
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