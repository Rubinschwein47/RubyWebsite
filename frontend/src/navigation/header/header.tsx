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
    GlobalOutlined, MenuOutlined
} from '@ant-design/icons';
import {Typography} from 'antd';
import {useInfoStore} from '../../store';
import {Link, NavLink, useNavigate} from "react-router";
import Trans from '../Translate';
import Home from "../../pages/home/home";

const {Title, Text} = Typography;

const pages: { name: string; icon: React.JSX.Element }[] = [{
    name: "home",
    icon: <HomeFilled/>,
}, {
    name: "portfolio",
    icon: <RocketFilled/>,
}, {
    name: "contact",
    icon: <MessageFilled/>,
}]
export default function WebHeader() {
    const isMobile = useInfoStore((state) => state.isMobileRatio);

    return (<Header className={"header"}>
        <Flex style={{height: '100%'}}>
            {isMobile? <MobilePages pages={pages}/>: <DesktopPages pages={pages}/>}
            <div className={"options-panel"}>
                <LanguageDropdown></LanguageDropdown>
                <ThemeDropdown></ThemeDropdown>
            </div>

        </Flex>
        <div className={'namePresent'}>
            <Flex style={{
                alignItems: 'center',
                pointerEvents: 'none'
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


type PagesProps = {
    pages: { name: string; icon: React.JSX.Element }[]
}

function DesktopPages({pages}: PagesProps) {
    return (
        <Flex style={{width: '75%', alignItems: 'center'}}>
            {pages.map((page, index) => (
                <>
                    <SubPage name={page.name}>
                        {React.cloneElement(page.icon, {className: "background-icon"})}
                    </SubPage>
                    {index !== pages.length - 1 ? <Text style={{fontSize: "2rem"}}>-</Text> : null}
                </>
            ))}
        </Flex>
    )
}

function MobilePages({pages}: PagesProps) {
    const navigate = useNavigate();
    const goToLink = (destination: string) => {
        navigate(destination);
    };
    var items: MenuProps['items'] = [];
    pages.forEach((page, index) => {
        items?.push({
            key: index,
            label: <Title level={3}><Trans path={"header.links." + page.name}/>  {React.cloneElement(page.icon, {className: "mobile-icon"})}</Title>,
            onClick: () => {
                goToLink("/" + page.name)
            }
        })
    })

    return (
        <Dropdown menu={{items}} placement="bottomLeft" arrow>
            <MenuOutlined style={{fontSize: "3rem", marginLeft: "1rem"}} />
        </Dropdown>
    )
}

type SupPageProps = {
    name: string;
    children: React.ReactNode;
}

function SubPage({name, children}: SupPageProps) {
    const navigate = useNavigate();
    const goToLink = (destination: string) => {
        navigate(destination);
    };
    return (
        <div onClick={() => goToLink("/" + name)} className={"header-tab"}>
            <Title level={3} style={{margin: "auto"}}><Trans path={"header.links." + name}/></Title>
            {children}
        </div>
    )
}

function LanguageDropdown() {
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
            <Button style={{marginRight: "1rem"}}><Trans path={"header.language.language"}/> <GlobalOutlined/></Button>
        </Dropdown>
    )
}

function ThemeDropdown() {
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
            <Button type="primary"><Text><Trans path={"header.theme.theme"}/></Text> <FormatPainterFilled/></Button>
        </Dropdown>
    )
}