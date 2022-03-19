import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Article = ({cors, min}) => {
    useEffect(()=>{
        if(false) {
            cors = {...cors, 
                title: cors?.title.substr(0, 50)+ "...",
                body: cors?.body.substr(0, 50)+ "...",
            }
        }
    },[cors])
    return (
        <article>
         <Card>
             <Card.Body>
                 <Card.Title>
                     <NavLink className="text-decoration-none" to={`${cors.id}-${cors?.title?.match(/^\w+\s\w+\s\w*/)[0].replace(/\s/g, '-')}`}>{cors?.title}</NavLink>
                 </Card.Title>
                 <Card.Text>{cors?.body}</Card.Text>
             </Card.Body>
             </Card>  
        </article>
    );
};

export default Article;
