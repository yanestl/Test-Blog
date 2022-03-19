import React from 'react';
import { Nav, Navbar, NavDropdown, Container, Form, FloatingLabel } from "react-bootstrap";


const SearchBar = () => {
    const placeholder = "type your search !"
    return (
        <section>
            <Form className='my-3'>
                <Form.Group>

                    <FloatingLabel controlId='searchInput' label={placeholder}>
                        <Form.Control type='text' placeholder={placeholder} />
                    </FloatingLabel>
                </Form.Group>
            </Form>
        </section>
    );
};

export default SearchBar;
