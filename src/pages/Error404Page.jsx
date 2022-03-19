import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate()
    const back = () => navigate(-1)
    return (
        <Alert variant="danger">
            <p>Page not found !</p>
            <Button variant="outline-primary" onClick={back}>Retour</Button>
        </Alert >
    )
}

export default Error404