import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ArticleService from "../ArticleService"
import Article from "../components/Article"
import { getLinkPath, LinkList } from "../Routing"

const ArticlePage = () => {
    const Id = parseInt(useParams().slug)
    const [articleService, setArticleService] = useState(new ArticleService())
    const [article, setArticle] = useState({})
    useEffect(() => {
        console.log('"object" :>> ', !articleService.isLoaded(), article.id, Id);
        if (!articleService.isLoaded() || article.id !== Id)
            articleService.load().then(() => setArticle(articleService.getById(Id)))
    }, [article, Id])
    return (
        <section className="article">
            <small className="text-muted">
                <Link className="text-decoration-none" to={getLinkPath('home')}>Home</Link> &lt;
                <Link className="text-decoration-none" to={getLinkPath('articles')}>Articles</Link> &lt; article
            </small>
            <Article min cors={article} />
        </section>
    )
}

export default ArticlePage