import React, { Fragment } from 'react';
import './css/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { RouteList } from './Routing';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <Fragment>
      <RouteList/>
    </Fragment>

  );
}
