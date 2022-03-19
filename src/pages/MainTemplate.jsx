import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import './MainPage.css';
import React from 'react';

const MainTemplate = () => {

    return (
        <main className="app">
            <Navbar />
            <Container className='main-min-height pt-3'>
                <Outlet />
            </Container>
            <Footer />
        </main>

    );
};

export default MainTemplate;