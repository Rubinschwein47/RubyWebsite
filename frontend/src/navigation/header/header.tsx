import React, {useState} from 'react';
import './header.css';
import {Header} from "antd/es/layout/layout";
import {Button, Dropdown, Flex, MenuProps} from "antd";
import {
    MoonFilled,
    FormatPainterFilled,
    SunFilled,
    HomeFilled,
    RocketFilled,
    MergeFilled,
    MessageFilled,
    GlobalOutlined
} from '@ant-design/icons';
import {Typography} from 'antd';
import {useInfoStore} from '../../store';
import {Link, NavLink, useNavigate} from "react-router";
import Trans from '../Translate';

const {Title,Text} = Typography;

export default function WebHeader() {
    // const isLightTheme = useInfoStore((state) => state.isLightMode);

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
            <div style={{
                width: '25%',
                justifyContent: 'end',
                display: 'flex',
                alignItems: 'center',
                paddingRight: "1rem",
            }}>
                <LanguageDropdown></LanguageDropdown>
                <ThemeDropdown></ThemeDropdown>
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
    const goToLink = (destination: string) => {
        navigate(destination);
    };
    return (
        <div onClick={() => goToLink("/"+name)} className={"header-tab"}>
            <Title level={3} style={{margin: "auto"}}><Trans path={"header.links." + name}/></Title>
            {children}
        </div>
    )
}

function LanguageDropdown(){
    const setLanguage = useInfoStore(state => state.setLanguage);

    const items: MenuProps['items'] = [
        {
            key: 1,
            label: (
                <p><Trans path={"header.language.de"}/></p>
            ),
            onClick: () => {
                setLanguage("de");
            }
        },
        {
            key: 2,
            label: (
                <p><Trans path={"header.language.en"}/></p>
            ),
            onClick: () => {
                setLanguage("en");
            }
        }
    ];
    return (
        <Dropdown menu={{items}} placement="bottomRight" arrow>
            <Button style={{marginRight:"1rem"}}><Trans path={"header.language.language"}/> <GlobalOutlined/></Button>
        </Dropdown>
    )
}
function ThemeDropdown(){
    const setTheme = useInfoStore(state => state.setTheme);

    const items: MenuProps['items'] = [
        {
            key: 1,
            label: (
                <p><Trans path={"header.theme.dark"}/> <MoonFilled/></p>
            ),
            onClick: () => {
                setTheme("dark");
            }
        },
        {
            key: 2,
            label: (
                <p><Trans path={"header.theme.light"}/> <SunFilled/></p>
            ),
            onClick: () => {
                setTheme("light");
            }
        }
    ];
    return (
        <Dropdown menu={{items}} placement="bottomRight" arrow>
            <Button><Trans path={"header.theme.theme"}/> <FormatPainterFilled/></Button>
        </Dropdown>
    )
}