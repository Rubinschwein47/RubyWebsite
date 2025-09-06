import {Divider, Image, Space, Typography} from 'antd';
import React from 'react';
import "./home.css";
import ImageWaiter from "../../basics/ImageWaiter";
import VDiv from "../../basics/VDiv";
import Trans from '../../basics/Translate';
import Paragraph from "antd/es/typography/Paragraph";
import {useInfoStore, WindowRatio} from "../../store";

const {Title, Text} = Typography;


export default function Home() {
    const ratio = useInfoStore((state) => state.windowRatio);
    document.documentElement.style.setProperty("--bottom-gap-image-descriptor", ratio == WindowRatio.mobile? "0px" : "50px");
    return (<>
        <Title level={1}><Trans path={"home.header"}/></Title>
        <div style={{width: '100%'}}>
            <Title level={2} key={"introduction"}><Trans path={"home.introduction.header"}/></Title>
            <Paragraph> <Trans path={"home.introduction.text"} asMarkDown={true}/></Paragraph>
            <Divider/>
        </div>
        <div style={{width: '100%'}}>
            <Title level={2} key={"whyRuby"}><Trans path={"home.whyRuby.header"}/></Title>
            <Paragraph><Trans path={"home.whyRuby.text"} asMarkDown={true}/></Paragraph>
            <div style={{height: "1rem"}}></div>
            <Paragraph strong><Trans path={"home.whyRuby.explanationOldLogos"}/></Paragraph>
            <div style={{height: "0.5rem"}}></div>
            <Image.PreviewGroup preview={{
                toolbarRender: (
                    reactElement,
                    {
                        current
                    },
                ) => (
                    <Space className={"toolbar-wrapper"+ (ratio == WindowRatio.mobile? " toolbar-wrapper-mobile" : "")}>
                        <Title level={3}><Trans path={"home.whyRuby.logoDescriptions." + current + ".header"}/></Title>
                        <Paragraph><Trans path={"home.whyRuby.logoDescriptions." + current + ".text"} asMarkDown={true}/></Paragraph>
                    </Space>
                ),
                height: "50%",
            }}>
                <ImageWaiter size={"8rem"} alt={"logo_skull"} src="recources/logos/LogoSkull.png"/>
                <VDiv/>
                <ImageWaiter size={"8rem"} alt={"logo_conrad"} src="recources/logos/LogoConrad.png"/>
                <VDiv/>
                <ImageWaiter size={"8rem"} alt={"logo_pig1"} src="recources/logos/LogoPig1.png"/>
                <VDiv/>
                <ImageWaiter size={"8rem"} alt={"logo_pig2"} src="recources/logos/LogoPig2.png"/>
                <VDiv/>
                <ImageWaiter size={"8rem"} alt={"logo_pig3"} src="recources/logos/LogoRuby.png"/>
            </Image.PreviewGroup>
            <Divider/>
        </div>
        <div style={{width: '100%'}}>
            <Title level={2} key={"aboutWebsite"}><Trans path={"home.aboutWebsite.header"}/></Title>
            <Paragraph><Trans path={"home.aboutWebsite.text"} asMarkDown={true}/></Paragraph>
            <Divider/>
        </div>
        <div style={{width: '100%'}}>
            <Title level={2} key={"myGames"}><Trans path={"home.myGames.header"}/></Title>
            <Paragraph><Trans path={"home.myGames.text"} asMarkDown={true}/></Paragraph>
        </div>
    </>);
}
