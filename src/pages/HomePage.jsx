import React, { Fragment } from 'react';
import ArticlesList from '../components/ArticlesList';
import About from '../components/About';
import Contact from '../components/Contact';
import Animation from '../components/Animation';
import './MainPage.css';

const HomePage = () => {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
    return (
        <Fragment>
            <div>
                <Animation/>
            </div>
            <div className='mt-5 p-5 grey article-page reveal'>
                <h1 className="text-center">Last Articles</h1>
                <ArticlesList max="8" searchbarOff></ArticlesList>
            </div>
            <div className='reveal'>
                <About />
            </div>
            <div className='grey reveal'>
                <Contact />
            </div>
        </Fragment>
    );
};

export default HomePage;