import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesPage from './pages/ArticlesPage';
import MainTemplate from './pages/MainTemplate';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Error404Page from './pages/Error404Page';
import { Fragment } from 'react';

const HEADER = 1
const FOOTER = 2
export const GROUPS = { HEADER, FOOTER }
const ROUTES = {
    Home: {
        path: "/",
        component: <MainTemplate />,
        groups: [HEADER, FOOTER],
        order: 0,
        children: {
            index: {
                path: "index",
                component: <HomePage />,
                groups: [HEADER, FOOTER],
            },
            About: {
                path: "about",
                component: <AboutPage />,
                groups: [HEADER, FOOTER],
                order: 1,
            },
            Articles: {
                path: "articles",
                component: <ArticlesPage />,
                groups: [HEADER, FOOTER],
                order: 2,
                children: {
                    Article: {
                        path: ":slug",
                        component: <ArticlePage />,
                        groups: [],
                        order: -1,
                    },
                }
            },
            Contact: {
                path: "contact",
                component: <ContactPage />,
                groups: [HEADER, FOOTER],
                order: 3,
            },
            Error404: {
                path: "*",
                component: <Error404Page />,
                groups: [],
                order: -1,
            },
        }
    },
}
const recurciveRoutage = (routes) =>
    Object.entries(routes).map((route, key) => {
        const [routeName, routeObj] = route
        const { path, component } = routeObj
        if ("children" in routeObj) {
            return (<Route key={key} path={path} element={component}>
                {recurciveRoutage(routeObj.children)}
            </Route>)

        }
        if (path === "index")
            return (<Route key={key} index element={component} />)


        return (<Route key={key} path={path} element={component} />)
    })

export const RouteList = ({ children }) => {
    return (<BrowserRouter>
        {children}
        <Routes>
            {recurciveRoutage(ROUTES)}
        </Routes>
    </BrowserRouter>)
}

const filterByGroups = (group) => route => route[1].groups.find(oneOfFilter => oneOfFilter === group)
const filterByName = route => route[0].toLowerCase() === filter.toLowerCase()

const recurciveLinkage = (routes, filterCallback) => {
    return Object.entries(routes).filter(filterCallback).map((route, key) => {
        const [routeName, routeObj] = route
        const { path } = routeObj
        let tab = []
        if ("children" in routeObj) {
            const { path, children } = routeObj
            tab = recurciveLinkage(children, filterCallback)
        }
        if (path !== "index")
            return [
                (<NavLink key={routeName + " " + key} className="nav-link col" aria-current="page" to={path}>{routeName}</NavLink>),
                ...tab,
            ]
    })
}

/**
 * 
 * @param {GROUPS<?CONTENT> | string} filter Routing.GROUPS.{HEADER | FOOTER} or name of
 * @returns 
 */
export const LinkList = (filter = 1) => {
    let filterCallback = filterByGroups(filter)
    if (typeof filter === "string") filterCallback = filterByName

    return (
        <Fragment>
            {recurciveLinkage(ROUTES, filterCallback)}
        </Fragment>
    )
}
const LinksCallback = (route, key) => {
    const [routeName, routeObj] = route
    const { path, component } = routeObj
    if (children in routeObj)
        Object.entries(children).filter(filterCallback).map(LinksCallback)
    return (
        <NavLink key={key} className="nav-link col" aria-current="page" to={path}>{routeName}</NavLink>
    )
}
const recurciveSearchLink = (name, routes, parentPath = null) => {
    return Object.entries(routes).flatMap((route) => {
        const [routeName, routeObj] = route
        const { path } = routeObj
        const tLCrouteName = routeName.toLowerCase()
        if (name !== tLCrouteName) {
            if ("children" in routeObj && Object.keys(routeObj?.children).length)
                return recurciveSearchLink(name, routeObj.children, path)
            return null
        }
        const slash = "/"
        const join = (parentPath !== null
            && (parentPath.substr(parentPath.length - 1) !== slash))
            ? slash
            : ""
        return tLCrouteName === name && [parentPath, path].join(join)

    }).find(ele => ele)
}
export const getLinkPath = (name) => {
    return recurciveSearchLink(name, ROUTES)
}
