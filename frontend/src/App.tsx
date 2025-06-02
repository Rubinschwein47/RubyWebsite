import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import './App.css';
import {RubyWebsiteService} from "./services/openapi/services/RubyWebsiteService";
import {OpenAPI} from "./services/openapi/index";
import {Layout, Timeline, Typography} from 'antd';
import {Content} from "antd/es/layout/layout";
import WebHeader from "./navigation/header/header";
import Background from './basics/background';
import BaseContainer from './basics/baseContainer/baseContainer';
import {RouterProvider, useRoutes} from "react-router";
import { routes } from './navigation/router';

const {randomValues} = RubyWebsiteService;
const {Text, Link} = Typography;

OpenAPI.BASE = "http://localhost:5037"
export default function App() {
    var [exampleList, setexampleList] = useState(["hello", "some longer text", "bye"]);
    const [showExample, setSchowExample] = useState(false);

    const ref = useRef(null);
    const [height, setHeight] = useState(0);

    const element = useRoutes(routes);
    
    useLayoutEffect(() => {
        // @ts-ignore
        setHeight(ref.current.offsetHeight);
    }, []);
    useEffect(() => {
        // @ts-ignore
        setHeight(ref.current.offsetHeight);
    })

    async function getRandom() {
        randomValues(12).then((values) => {
            setexampleList(values.map((value) => {
                return value.toString()
            }));
        });
    }

    function flipShowExample() {
        setSchowExample(!showExample);
    }

    return (
        <Layout>
            <Background height={height}/>
            <WebHeader></WebHeader>
            <Content ref={ref}>
                <BaseContainer>
                    {/*<RouterProvider router={router}></RouterProvider>*/}
                    {element}
                    {/*<Space>*/}
                    {/*    <Button type="primary" onClick={getRandom}>Call Backend</Button>*/}
                    {/*    <Button type="primary" onClick={flipShowExample}>Toggle</Button>*/}
                    {/*    <TestList*/}
                    {/*        list={exampleList}*/}
                    {/*        showExample={showExample}*/}
                    {/*    />*/}
                    {/*    <DatePicker/>*/}
                    {/*    <CompassFilled/>*/}
                    {/*    <Text>{height}</Text>*/}
                    {/*</Space>*/}
                    {/*<div style={{backgroundColor: '#888', width: "5rem", height: '100rem'}}></div>*/}
                </BaseContainer>
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
            <Timeline items={mappedList}/>
        </div>
    );
}

