import {Divider, Image, Space, Typography} from 'antd';
import React from 'react';
import Trans from "../../navigation/Translate";
import "./home.css"
import ImageWaiter from "../../basics/ImageWaiter";
import VDiv from "../../basics/VDiv";

const {Title, Text} = Typography;


export default function Home() {
    return (<>
        <Title level={1}><Trans path={"home.header"}/></Title>
        <div style={{width: '100%'}}>
            <Title level={2} key={"introduction"}><Trans path={"home.introduction.header"}/></Title>
            <Text><Trans path={"home.introduction.text"}/></Text>
            <Divider/>
        </div>
        <div style={{width: '100%'}}>
            <Title level={2} key={"whyRuby"}><Trans path={"home.whyRuby.header"}/></Title>
            <Text><Trans path={"home.whyRuby.text"}/></Text>
            <div style={{height: "1rem"}}></div>
            <Text strong><Trans path={"home.whyRuby.explanationOldLogos"}/></Text>
            <div style={{height: "0.5rem"}}></div>
            <Image.PreviewGroup preview={{
                toolbarRender: (
                    reactElement,
                    {
                        current
                    },
                ) => (
                    <Space size={12} className="toolbar-wrapper">
                        <Title level={3}><Trans path={"home.whyRuby.logoDescriptions." + current + ".header"}/></Title>
                        <Text><Trans path={"home.whyRuby.logoDescriptions." + current + ".text"}/></Text>
                    </Space>
                ),
                height: "50%",
            }}>
                <ImageWaiter width={"8rem"} alt={"logo_skull"} src="recources/logos/LogoSkull.png"/>
                <VDiv/>
                <ImageWaiter width={"8rem"} alt={"logo_conrad"} src="recources/logos/LogoConrad.png"/>
                <VDiv/>
                <ImageWaiter width={"8rem"} alt={"logo_pig1"} src="recources/logos/LogoPig1.png"/>
                <VDiv/>
                <ImageWaiter width={"8rem"} alt={"logo_pig2"} src="recources/logos/LogoPig2.png"/>
                <VDiv/>
                <ImageWaiter width={"8rem"} alt={"logo_pig3"} src="recources/logos/LogoRuby.png"/>
            </Image.PreviewGroup>
            <Divider/>
        </div>
        <div style={{width: '100%'}}>
            <Title level={2} key={"aboutWebsite"}><Trans path={"home.aboutWebsite.header"}/></Title>
            <Text><Trans path={"home.aboutWebsite.text"}/></Text>
            <Divider/>
        </div>
        <div style={{width: '100%'}}>
            <Title level={2} key={"myGames"}><Trans path={"home.myGames.header"}/></Title>
            <Text><Trans path={"home.myGames.text"}/></Text>
        </div>
    </>);
}

export function LogoToolbar() {
    return (<div>Hello</div>)
}