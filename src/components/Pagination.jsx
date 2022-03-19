import { ListGroup, Nav } from "react-bootstrap"

const Pagination = ({ pageLinks }) => {
    pageLinks
        (
            <div>
                {
                    pageLinks.map(link => (
                        Link
                    ))
                }
                <Nav aria-label="Page navigation example">
                    <ListGroup className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ListGroup>
                </Nav>
            </div>
        )
}
export default Pagination