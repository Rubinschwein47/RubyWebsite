import {createBrowserRouter, Navigation, redirect, RouteObject} from "react-router";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Portfolio from "../pages/portfolio/portfolio";
import TechStack from "../pages/tech-stack/techStack";

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
        path: "/tech-stack",
        Component: TechStack,
    },
    {
        path: "/",
        // Component: Home,
        action: (args, handlerCtx) => console.log(args, handlerCtx, "trolololol"),

    },
    {
        path: "",
        Component: Home,
        action: (args, handlerCtx) => console.log(args, handlerCtx, "trolololol"),
        // element: () => <Navigation>
    }
];