import React, { Fragment } from 'react';
import ArticlesList from '../components/ArticlesList';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <Fragment>
            <div className='my-2'>
                <h1 className="h1 text-center">React Blog</h1>
                <ArticlesList max="8" searchbarOff></ArticlesList>
            </div>
            <div className='my-2'>
                <About />
            </div>
            <div className='my-2'>
                <Contact />
            </div>
            <div className='my-2'>
            </div>
        </Fragment>
    );
};

export default HomePage;