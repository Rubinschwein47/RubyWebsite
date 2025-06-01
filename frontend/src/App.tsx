import React, {Component, ReactElement, useEffect, useLayoutEffect, useRef} from 'react';
import './App.css';
import {useState} from 'react';
import { RubyWebsiteService } from "./services/openapi/services/RubyWebsiteService";
import {OpenAPI } from  "./services/openapi/index";
import {Button, Space, DatePicker, Timeline, Layout,Typography} from 'antd';
import { CompassFilled } from '@ant-design/icons';
import {Content, Header} from "antd/es/layout/layout";
import WebHeader from "./navigation/header/header";
import Background from './basics/background';
import BaseContainer from './basics/baseContainer/baseContainer';
import {createBrowserRouter, redirect, Route, RouterProvider} from "react-router";
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Portfolio from './pages/portfolio/portfolio';
import TechStack from './pages/tech-stack/techStack';
const {randomValues} = RubyWebsiteService;
const { Text, Link } = Typography;

OpenAPI.BASE ="http://localhost:5037"

const router = createBrowserRouter([
    {
        path: "/home",
        Component: Home,
    },
    {
        path: "/contact",
        Component: Contact,
    },
    {
        path: "/portfolio",
        Component: Portfolio,
    },
    {
        path: "/tech-stack",
        Component: TechStack,
    },
    {
        path: "/",
        loader: () => redirect("/home")
    },
    {
        path: "*",
        loader: () => redirect("/home")
    }
]);

export default function App() {
    var [exampleList, setexampleList] = useState(["hello", "some longer text", "bye"]);
    const [showExample, setSchowExample] = useState(false);
    
    const ref = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        // @ts-ignore
        setHeight(ref.current.offsetHeight);
    }, []);
    useEffect(() => {
        // @ts-ignore
        setHeight(ref.current.offsetHeight);
    })
    
    async function getRandom(){
        randomValues(12).then((values) => {
            setexampleList(values.map((value) => {return value.toString()}));
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
                <RouterProvider router={router}></RouterProvider>
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
            <Timeline items={mappedList} />
        </div>
    );
}

