import React from 'react';
import './App.css';
import {OpenAPI} from "./services/openapi";
import {Layout} from 'antd';
import {Content} from "antd/es/layout/layout";
import WebHeader from "./navigation/header/header";
import BaseContainer from './basics/baseContainer/baseContainer';
import {useRoutes} from "react-router";
import {routes} from './navigation/router';
import {useInfoStore} from './store';
import '@ant-design/v5-patch-for-react-19';
import Background from "./basics/background/background";

OpenAPI.BASE = "http://localhost:5037";
export default function App() {
    const element = useRoutes(routes);

    const loaded = useInfoStore((state) => state.languageLoaded);

    if (!loaded)
        return <Layout key={4747}><p>not Loaded</p></Layout>;
    else
        return (
            <Layout key={4747}>
                <WebHeader/>
                <Content style={{overflow: "hidden", position: "absolute", minHeight: "100vh",backgroundColor: "var(--background-color)"}}>
                    <Background/>
                    <BaseContainer>
                        {element}
                    </BaseContainer>
                </Content>
            </Layout>
        );
}