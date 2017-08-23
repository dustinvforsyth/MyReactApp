import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import "react-bootstrap";
import mongoose from "mongoose";
// mongoose.connect('localhost:27017/test');
import App from './App';
import './index.css';
import Home from './pages/home.js';
import Suzuki from './pages/suzuki.js';
import Toyota from './pages/toyota.js';
import Nissan from './pages/nissan.js';
import BuilderParts from './pages/builderParts.js';
import Recovery from './pages/recovery.js';
import Accessories from './pages/accessories.js';
import Apparel from './pages/apparel.js';
import Instructions from './pages/instructions.js';
import Blog from './pages/blog.js';
// var Schema = mongoose.Schema;

// var productDataSchema = new Schema({
//   title: {type: String, required: true},
//   description: String,
//   price: String,
//   img: String
// });

// var ProductData = mongoose.model('ProductData', productDataSchema);

// Router.get('/get-data', function(req, res, next){
//       ProductData.find()
//       .then(function(doc) {
//           console.log(doc);
//           //res.render('index', {items: doc})
//       });
// });

// Router.post('/insert', function(req, res, next){
//       var product = {

//       }

//       var data = new ProductData(product);
//       data.save();
// });


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute name="home" component={Home}></IndexRoute>
      <Route path="suzuki" name="suzuki" component={Suzuki}></Route>
      <Route path="toyota" name="toyota" component={Toyota}></Route>
      <Route path="nissan" name="nissan" component={Nissan}></Route>
      <Route path="builderParts" name="builderParts" component={BuilderParts}></Route>
      <Route path="recovery" name="recovery" component={Recovery}></Route>
      <Route path="accessories" name="accessories" component={Accessories}></Route>
      <Route path="apparel" name="apparel" component={Apparel}></Route>
      <Route path="instructions" name="instructions" component={Instructions}></Route>
      <Route path="blog" name="blog" component={Blog}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);