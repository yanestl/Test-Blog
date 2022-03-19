const HEADER = 1
const FOOTER = 2
const GROUPS = { HEADER, FOOTER }
const ROUTES = {
    Home: {
        path: "/",
        component: `<MainPage />`,
        groups: [HEADER, FOOTER],
        children: {
            index: {
                path: "index",
                component: `<HomePage />`,
                groups: [HEADER, FOOTER],
            },
            About: {
                path: "about",
                component: `<AboutPage />`,
                groups: [HEADER, FOOTER],
            },
            Articles: {
                path: "articles",
                component: `<ArticlesPage />`,
                groups: [HEADER, FOOTER],
                children: {
                    Article: {
                        path: ":slug",
                        component: `<ArticlePage />`,
                        groups: [],
                    },
                }
            },

            Contact: {
                path: "contact",
                component: `<ContactPage />`,
                groups: [HEADER, FOOTER],
            },
            Error404: {
                path: "error404",
                component: `<Error404Page />`,
                groups: [],
            },
        }
    },
}
const recurciveRoutage = (routes) =>
    Object.entries(routes).map((route, key) => {
        const [routeName, routeObj] = route
        const { path, component } = routeObj
        console.log(`children in ${routeName} :>> `, "children" in route);
        if ("children" in routeObj) {
            console.log(routeName);
            return (`<Route key="${key}" path="${path}" element={${component}}>
                ${recurciveRoutage(routeObj.children)}
            </Route>\n`)

        }
        if (path === "index")
            return (`<Route key="${key}" index element={${component}} />\n`)


        return (`<Route key="${key}" path="${path}" element={${component}} />\n`)
    })

const RouteList = () => {
    return (`<BrowserRouter>
        <Routes>
            ${recurciveRoutage(ROUTES)}
        </Routes>
    </BrowserRouter>`)
}
const LinksCallback = (route, key) => {
    const [routeName, routeObj] = route
    const { path, component } = routeObj
    if (children in routeObj)
        Object.entries(children).filter(filterCallback).map(LinksCallback)
    return `(
        <NavLink key=${key} className="nav-link col" aria-current="page" to=${path}>${routeName}</NavLink>
    )`
}
const filterByGroups = (group) => route => route[1].groups.find(oneOfFilter => oneOfFilter === group)
const filterByName = route => route[0].toLowerCase() === filter.toLowerCase()
const recurciveLinkage = (routes, filterCallback) => {
    // console.log('filterCallback :>> ', routes,filterCallback);

    return Object.entries(routes).filter(filterCallback).map((route, key) => {
        const [routeName, routeObj] = route
        const { path } = routeObj
        console.log('condition :>> ', "children" in routeObj);
        let tab = []
        if ("children" in routeObj) {
            const { path, children } = routeObj
            tab = recurciveLinkage(children, filterCallback);
        }
        if (path !== "index")
            return [tab, `<NavLink key=${routeName + " " + key} className="nav-link col" aria-current="page" to="${path}">${routeName}</NavLink>\n`].join(" ")
    })
}

/**
 * 
 * @param {GROUPS<?CONTENT> | string} filter Routing.GROUPS.{HEADER | FOOTER} or name of
 * @returns 
 */
const LinkList = (filter = 1) => {
    let filterCallback = filterByGroups(filter)
    if (typeof filter === "string") filterCallback = filterByName
    return (
        `<Fragment>
            ${recurciveLinkage(ROUTES, filterCallback)}
        </Fragment>`
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
        console.log('condition :>> ', parentPath, path);
        const slash = "/"
        const join = (parentPath !== null
            && (parentPath.substr(parentPath.length - 1) !== slash))
            ? slash
            : ""
        return tLCrouteName === name && [parentPath, path].join(join)

    }).find(ele => ele)
}
const getLinkPath = (name, routes) => {
    return recurciveSearchLink(name, routes)
}


// console.log(`"home" :>> `, getLinkPath("home", ROUTES));
// console.log(`"articles" :>> `, getLinkPath("articles", ROUTES));
console.log('RouteList :>> ', RouteList());