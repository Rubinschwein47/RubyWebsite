import {redirect, RouteObject} from "react-router";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Portfolio from "../pages/portfolio/portfolio";
import NotFound from "../pages/notFound";
import ThingisOverview from "../pages/thingis/thingisOverview";
import ColorPicker from "../pages/thingis/things/color-picker/colorPicker";
import {thingisRoute} from "../pages/thingis/thinigsRoute";

export const routes: RouteObject[] = [
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
        path: "/thingis",
        children: thingisRoute
    },
    {
        path: "/",
        loader: () => redirect("/home"),
    },
    {
        path: "*",
        Component: NotFound,
    }
];