import {Divider, Image, Space, Typography} from 'antd';
import React, {useState} from 'react';
import "./home.css";
import ImageWaiter from "../../basics/ImageWaiter";
import VDiv from "../../basics/VDiv";
import Trans from '../../basics/Translate';
import Paragraph from "antd/es/typography/Paragraph";
import {useInfoStore, WindowRatio} from "../../store";
import FatHeader from "../../basics/fatHeader/fatHeader";

export default function Home() {
    const ratio = useInfoStore((state) => state.windowRatio);
    document.documentElement.style.setProperty("--bottom-gap-image-descriptor", ratio == WindowRatio.mobile? "0px" : "50px");
    const [logoIndex,setLogoIndex] = useState(0);
    return (<>
        <FatHeader level={1}><Trans path={"home.header"}/></FatHeader>
        <div style={{width: '100%'}}>
            <h2 key={"introduction"}><Trans path={"home.introduction.header"}/></h2>
            <Paragraph> <Trans path={"home.introduction.text"} asMarkDown={true}/></Paragraph>
            <Divider/>
        </div>
        <div style={{width: '100%'}}>
            <h2 key={"whyRuby"}><Trans path={"home.whyRuby.header"}/></h2>
            <Paragraph><Trans path={"home.whyRuby.text"} asMarkDown={true}/></Paragraph>
            <div style={{height: "1rem"}}></div>
            <Paragraph strong><Trans path={"home.whyRuby.explanationOldLogos"}/></Paragraph>
            <div style={{height: "0.5rem"}}></div>
            <Image.PreviewGroup preview={{
                onChange: (current) => setLogoIndex(current),
                toolbarRender: (originalNode) => (
                    <Space className={"toolbar-wrapper"+ (ratio == WindowRatio.mobile? " toolbar-wrapper-mobile" : "")}>
                        <h3><Trans path={`home.whyRuby.logoDescriptions.${logoIndex}.header`}/></h3>
                        <Paragraph><Trans path={`home.whyRuby.logoDescriptions.${logoIndex}.text`} asMarkDown={true}/></Paragraph>
                    </Space>
                ),
                // height: "50%",
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
            <h2 key={"aboutWebsite"}><Trans path={"home.aboutWebsite.header"}/></h2>
            <Paragraph><Trans path={"home.aboutWebsite.text"} asMarkDown={true}/></Paragraph>
            <Divider/>
        </div>
        <div style={{width: '100%'}}>
            <h2 key={"myGames"}><Trans path={"home.myGames.header"}/></h2>
            <Paragraph><Trans path={"home.myGames.text"} asMarkDown={true}/></Paragraph>
        </div>
    </>);
}
