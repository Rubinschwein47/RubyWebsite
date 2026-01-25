import {FormatPainterFilled, MoonFilled, SunFilled} from "@ant-design/icons";
import {Button, Dropdown, MenuProps, Typography} from "antd";
import {useInfoStore, WindowRatio} from "../../store";
import Trans from "../../basics/Translate";
import React from "react";

const {Text} = Typography;

export
function ThemeDropdown({ratio}: {ratio: WindowRatio}) {
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
        },{
            key: 3,
            label: (
                <p><Trans path={"header.theme.dark-contrast"}/> <MoonFilled/></p>
            ),
            onClick: () => {
                setTheme("dark_contrast");
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
        },{
            key: 4,
            label: (
                <p><Trans path={"header.theme.light-contrast"}/> <MoonFilled/></p>
            ),
            onClick: () => {
                setTheme("light_contrast");
            }
        }
    ];
    return (
        <Dropdown menu={{items}} placement="bottomRight" arrow>
            <Button type="primary">
                {ratio === WindowRatio.mobile? null :
                    <Text> <Trans path={"header.theme.theme"}/></Text>} <FormatPainterFilled/>
            </Button>
        </Dropdown>
    );
}