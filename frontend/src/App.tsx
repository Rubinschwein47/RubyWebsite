import React, { ReactElement } from 'react';
import './App.css';
import {useState} from 'react';
import { RubyWebsiteService } from "./services/openapi/services/RubyWebsiteService";
import {OpenAPI } from  "./services/openapi/index";
import {Button, Space, DatePicker, Timeline, Layout} from 'antd';
import { CompassFilled } from '@ant-design/icons';
import {Content, Header} from "antd/es/layout/layout";
import WebHeader from "./navigation/header";
import { useInfoStore } from './store';

const {randomValues} = RubyWebsiteService;
OpenAPI.BASE ="http://localhost:5037"

function Background() {
    const isLightTheme = useInfoStore((state) => state.isLightMode);
    function getBackground() {
        const texture = isLightTheme? '/recources/walls_bright.png':'/recources/walls_dark.png';
        const tiles: ReactElement<any, any>[] = [];
        for (let i = 0; i < 20; i++) {
            tiles.push(<div style={{width:'100%',height:'8rem'}}>
                <img src={texture} style={{}}/>
                <img src={texture} style={{transform: `rotateY(180deg)`,float:"right"}} />
            </div>)
        }
        return tiles;
    }

    return (<div style={{position: 'absolute',width:'100%',top:0,left:0,height:'100%',overflow:'clip'}}>
        {getBackground()}
    </div>)
}

export default function App() {
    var [exampleList, setexampleList] = useState(["hello", "some longer text", "bye"]);

    const [showExample, setSchowExample] = useState(false);

    async function getRandom(){
        randomValues(12).then((values) => {
            setexampleList(values.map((value) => {return value.toString()}));
        });
    }
    function flipShowExample() {
        setSchowExample(!showExample);
        console.log(showExample);
    }

    return (
    <Layout style={{ height: '100vh' }}>
        <Background/>
        <WebHeader></WebHeader>
        <Content>
            <Space>
                <Button type="primary" onClick={getRandom}>Call Backend</Button>
                <Button type="primary" onClick={flipShowExample}>Toggle</Button>
                <TestList
                    list={exampleList}
                    showExample={showExample}
                />
                <DatePicker/>
                <CompassFilled/>
            </Space>
        </Content>
    </Layout>
    );
}

type ToggleListProps = {
    showExample: boolean;
    list: string[];
}

function TestList({list, showExample}: ToggleListProps) {
    if (!showExample) {
        return null
    }
    
    const mappedList = list.map((item, id) => ({children: item}));
    
    return (<div className={"test-container"}>
            <Timeline items={mappedList} />
        </div>
    );
}

