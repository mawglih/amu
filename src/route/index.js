import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Awnings from '../components/Awnings';
import Enclosure from '../components/Enclosure';
import Home from '../components/Home';
import ProductDetail from '../components/Products/ProductDetail';
import Products from '../components/Products/ProductsList';
import Upholstery from '../components/Upholstery';
import ContactUs from '../components/ContactUs';
// import Pufiki from '../components/Pufiki';
// import Hrenovina from '../components/Hrenovina';

const index = () => (
  <Switch>
    <Route exact path='/awnings' component={Awnings} />
    <Route exact path='/enc' component={Enclosure} />
    <Route exact path='/cus' component={Enclosure} />
    <Route exact path='/can' component={Enclosure} />
    <Route exact path='/products' component={Products} />
    <Route exact path='/upholstery' component={Upholstery} />
    <Route exact path='/contact' component={ContactUs} />
    <Route path='/products/:productId' component={ProductDetail} />
    <Route exact path='/' component={Home} />
  </Switch>
);

export default index;
