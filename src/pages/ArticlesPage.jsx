import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import { getLinkPath } from "../Routing";

const ArticlesPage = () => {
    let title = "Blog"
    const location = useLocation()
    let [blogShow, setBlogShow] = useState(true)

    useEffect(() => {
        console.log('use :>> ', location.pathname, getLinkPath('articles'));
        setBlogShow(
            location.pathname === getLinkPath('articles')
                ? true
                : false
        )

    }, [location.pathname])
    return (
        <section className="articles">
            {blogShow && <h1 className="h1">{title}</h1>}
            <Outlet />
            {
                blogShow && <ArticlesList />
            }
        </section>
    )
}

export default ArticlesPage