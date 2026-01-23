import {redirect, RouteObject} from "react-router";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Portfolio from "../pages/portfolio/portfolio";
import NotFound from "../pages/notFound";
import ArticleOverview from "../pages/articles/articleOverview";

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
        path: "/article",
        Component: ArticleOverview
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