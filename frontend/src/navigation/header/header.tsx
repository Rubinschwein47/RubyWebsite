import React, {useState} from 'react';
import './header.css';
import {Header} from "antd/es/layout/layout";
import {Button, Dropdown, Flex, MenuProps} from "antd";
import {MoonFilled, FormatPainterFilled, SunFilled, HomeFilled, RocketFilled, MergeFilled, MessageFilled} from '@ant-design/icons';
import {Typography} from 'antd';
import {useInfoStore} from '../../store';
import {Link, NavLink, useNavigate} from "react-router";
import { useTranslation } from 'react-i18next';

const {Title,Text} = Typography;

export default function WebHeader() {
    const setTheme = useInfoStore(state => state.setTheme);
    const isLightTheme = useInfoStore((state) => state.isLightMode);

    const items: MenuProps['items'] = [
        {
            key: 1,
            label: (
                <p>Dark Mode <MoonFilled/></p>
            ),
            onClick: () => {
                setTheme(false);
            }
        },
        {
            key: 2,
            label: (
                <p>Light <SunFilled/></p>
            ),
            onClick: () => {
                setTheme(true);
            }
        }
    ];
    return (<Header className={"header"}>
        <Flex style={{height: '100%'}}>
            <Flex style={{width: '75%', alignItems: 'center'}}>
                <SubPage name={"home"}>
                    <HomeFilled className={"background-icon"}/>
                </SubPage>
                <Text style={{fontSize: "2rem"}}>-</Text>
                <SubPage name={"portfolio"}>
                    <RocketFilled className={"background-icon"}/>
                </SubPage>
                <Text style={{fontSize: "2rem"}}>-</Text>
                <SubPage name={"tech-stack"}>
                    <MergeFilled className={"background-icon"}/>
                </SubPage>
                <Text style={{fontSize: "2rem"}}>-</Text>
                <SubPage name={"contact"}>
                    <MessageFilled className={"background-icon"}/>
                </SubPage>
            </Flex>
            <div style={{width: '25%', justifyContent: 'end', display: 'flex', alignItems: 'center', paddingRight: "1rem"}}>
                <Dropdown menu={{items}} placement="bottomRight" arrow>
                    <Button>Theme <FormatPainterFilled/></Button>
                </Dropdown>
            </div>
        </Flex>
        <div className={'namePresent'}>
            <Flex style={{
                alignItems: 'center'
            }}>
                <div style={{
                    width: '5rem', height: '0',
                    borderColor: "var(--icon-color)",
                    borderBottomStyle: 'solid',
                    marginLeft: 'auto'
                }}></div>
                <Title style={{margin: '1rem'}}>Rubinschwein47</Title>
                <div style={{
                    width: '5rem', height: '0',
                    borderColor: "var(--icon-color)",
                    borderBottomStyle: 'solid',
                    marginRight: 'auto'
                }}></div>
            </Flex>
        </div>
    </Header>);
}

type SupPageProps = {
    name: string;
    children: React.ReactNode;
}
function SubPage({name,children}:SupPageProps) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const goToLink = (destination: string) => {
        navigate(destination);
    };
    return (
        <div onClick={() => goToLink("/"+name)} className={"header-tab"}>
            <Title level={3} style={{margin: "auto"}}>{t(name)}</Title>
            {children}
        </div>
    )
}