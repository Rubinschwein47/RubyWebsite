import {RouteObject} from "react-router";
import ThingisOverview from "./thingisOverview";
import ColorPicker from "./things/color-picker/colorPicker";

export const thingisRoute:RouteObject[] = [
    {
        index: true,
        Component: ThingisOverview,
    },{
        path: "color-picker",
        Component: ColorPicker,
    }
]