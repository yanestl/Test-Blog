import { Outlet } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";

const ArticlesPage = () => {
    console.log('"object" :>> ', "object");

    return (
        <section className="articles">
            <Outlet/>
            <ArticlesList/>
        </section>
    )
}

export default ArticlesPage