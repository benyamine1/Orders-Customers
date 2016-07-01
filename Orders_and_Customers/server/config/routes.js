var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');

module.exports = function(app){
  app.get('/customers', customers.getCustomer);
  app.post('/customers', customers.addCustomer);
  app.post('/customers/:id/destroy', customers.removeCustomer);

  app.get('/orders', orders.getOrders);
  app.post('/orders', orders.addOrders);
}
