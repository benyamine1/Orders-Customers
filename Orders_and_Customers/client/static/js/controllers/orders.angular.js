myApp.controller('OrdersController', function (CustomerFactory){
    var self = this;
    CustomerFactory.getCustomer(function (customers){
        self.customers = customers;
    })

    CustomerFactory.getOrders(function (orders){
        self.orders = orders;
    })

    // CustomerFactory.getProducts(function (products){
    //     self.products = products;
    // })

    // CustomerFactory.getQuantities(function (quantities){
    //     self.quantities = quantities;
    // })

    self.products = CustomerFactory.products;
    self.quantities = CustomerFactory.quantities;

    this.currentDate = new Date();

    this.addOrders = function (){
        CustomerFactory.addOrders(this.newOrder, function (orders){
            self.orders = orders;
        });
        self.newOrder = {};
    }

})
