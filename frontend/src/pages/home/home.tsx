import {Divider, Image, Space, Typography} from 'antd';
import React from 'react';
import Trans from "../../navigation/Translate";
import "./home.css"

const {Title,Text} = Typography;


export default function Home() {
    return (
        <div style={{margin: "0 0 0 80px"}}>
            <Title level={1}><Trans path={"home.header"}/></Title>
            <div style={{width: '100%'}}>
                <div style={{width: 'calc(100% - 200px)'}}>
                    <Title level={2} key={"introduction"}><Trans path={"home.introduction.header"}/></Title>
                    <Text><Trans path={"home.introduction.text"}/></Text>
                    <Divider />
                </div>
                <div style={{width: '200px'}}>

                </div>
            </div>
            <div style={{width: '100%'}}>
                <div style={{width: 'calc(100% - 200px)'}}>
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
                                <Title level={3}><Trans path={"home.whyRuby.logoDescriptions."+current+".header"}/></Title>
                                <Text><Trans path={"home.whyRuby.logoDescriptions."+current+".text"}/></Text>
                            </Space>
                        ),
                        height: "50%" ,
                    }}>
                        <Image width={"8rem"} alt={"logo_skull"} src="recources/logos/LogoSkull.png"/>
                        <Image width={"8rem"} alt={"logo_conrad"} src="recources/logos/LogoConrad.png"/>
                        <Image width={"8rem"} alt={"logo_pig1"} src="recources/logos/LogoPig1.png"/>
                        <Image width={"8rem"} alt={"logo_pig2"} src="recources/logos/LogoPig2.png"/>
                        <Image width={"8rem"} alt={"logo_pig3"} src="recources/logos/LogoRuby.png"/>
                    </Image.PreviewGroup>
                    <Divider/>
                </div>
                <div style={{width: '200px'}}>
                </div>
            </div>
            <div style={{width: '100%'}}>
                <div style={{width: 'calc(100% - 200px)'}}>
                    <Title level={2} key={"aboutWebsite"}><Trans path={"home.aboutWebsite.header"}/></Title>
                    <Text ><Trans path={"home.aboutWebsite.text"}/></Text>
                    <Divider />
                </div>
                <div style={{width: '200px'}}>

                </div>
            </div>
            <div style={{width: '100%'}}>
                <div style={{width: 'calc(100% - 200px)'}}>
                    <Title level={2} key={"myGames"}><Trans path={"home.myGames.header"}/></Title>
                    <Text><Trans path={"home.myGames.text"}/></Text>
                </div>
                <div style={{width: '200px'}}>

                </div>
            </div>

        </div>);
}

export function LogoToolbar(){
    return (<div>Hello</div>)
}