'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');

  // todoList Routes
  app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.store);


  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);


   var fcmCtrl = require('./controllers/fcmController');

  // todoList Routes
  app.route('/fcm')
    .get(fcmCtrl.pushmsg)
    .post(fcmCtrl.pushmsg);


};
