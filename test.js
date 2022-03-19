const ROUTES = [
    ["/", "<HomePage />"],

    ["About", "<AboutPage />"],
    ["Articles", "<ArticlesPage />",
        [
            [":slug", "<ArticlePage />"],
        ]
    ],
    ["Contact", "<ContactPage />"],
    ["Error404", "<Error404Page />"]
]

const RoutingCallback = (route, key) => {
    if (route.length === 3) {
        return (`<route 3--${route[0]}--------------------------- >\n
${
    route[2].map(RoutingCallback)
}
        </Route>\n`)

    }
    if (route[0].toLowerCase === "index")
        return (`<route 1---${route[0]}--------------------------  />\n`)


    return (`<Route--${route[0]}-------normal >\n`)
}

const Routing = () => {
    return (`<ouvre--------------------------->
            ${ROUTES.map(RoutingCallback).join("\n")}
    </ferme--------------------------->`)
}

console.log(typeof Routing())
console.log(Routing())