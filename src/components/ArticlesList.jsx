import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import ArticleService from "../ArticleService"
import Article from "../components/Article";
import SearchBar from "./SearchBar";

const ArticlesList = ({nomber: number}) => {
    let [articleService] = useState(new ArticleService())
    let [articles, setArticles] = useState([])
    let [display, setDisplay] = useState("col")
    const sizing = {
        list: [12, 8, 8],
        col: [12, 6, 3]
    }
    useEffect(() => {
        if (!articleService.isLoaded())
            articleService.load().then(setArticles)
    }, [articleService.getAll()])
    return (
        <Container fluid="md"  className="articles">
            <SearchBar />
            <Row>
                {
                    articles.map((article, key) =>
                    (<Col
                        key={key}
                        xs={sizing[display][0]}
                        md={sizing[display][1]}
                        lg={sizing[display][2]}
                    >
                        <Article cors={article} />
                    </Col>
                    )
                    )
                }
            </Row>
        </Container>
    )
};

export default ArticlesList;
