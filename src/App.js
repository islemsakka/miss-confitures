import React from 'react';
import './App.css';
import Home from './admin/components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Calendar from './admin/components/sidebar-components/events/calendar';
import Map from './admin/components/sidebar-components/maps';
import Products from './admin/components/sidebar-components/products/products';
import Customers from './admin/components/sidebar-components/customers/customers';
import Gallery from './admin/components/sidebar-components/gallery/gallery';
import Analytics from './admin/components/sidebar-components/Analytics';
import Navigbar from './admin/components/navbar';
import Sidebar from './admin/components/sidebar';
function App() {
  return (
    <div >
      <Router>
        <Route path="/" component={Navigbar} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={Sidebar} />


        <Route path="/analytics" component={Analytics} />
        <Route path="/calendar" render={() => <Calendar />} />
        <Route path="/maps" render={() => <Map />} />
        <Route path="/products" render={() => <Products />} />
        <Route path="/customers" render={() => <Customers />} />
        <Route path="/gallery" render={() => <Gallery />} />

      </Router>
    </div >
  );
}

export default App;
