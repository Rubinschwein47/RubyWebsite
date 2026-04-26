import {RouteObject} from "react-router";
import ThingisOverview from "./thingisOverview";
import ColorPicker from "./things/color-picker/colorPicker";
import MultiCounter from "./things/multi-counter/multiCounter";

export const thingisRoute:RouteObject[] = [
    {
        index: true,
        Component: ThingisOverview,
    },{
        path: "color-picker",
        Component: ColorPicker,
    },{
        path: "multi-counter",
        Component: MultiCounter,
    }
]