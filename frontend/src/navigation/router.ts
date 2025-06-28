import {redirect, RouteObject} from "react-router";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Portfolio from "../pages/portfolio/portfolio";
import NotFound from "../pages/notFound";

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
        path: "/",
        loader: () => redirect("/home"),
    },
    {
        path: "*",
        Component: NotFound,
    }
];