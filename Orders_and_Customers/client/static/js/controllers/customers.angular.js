myApp.controller('CustomersController', function (CustomerFactory){
    var self = this;

    CustomerFactory.getCustomer(function (customers){
        self.customers = customers;
    });

    this.currentDate = new Date();

    this.addCustomer = function (){
        CustomerFactory.addCustomer(this.newCustomer, function (customers){
            self.customers = customers;
        })
        this.newCustomer = {};
    }

    this.removeCustomer = function (customerId){
        //console.log(customerId);
        CustomerFactory.removeCustomer(customerId, function (customers){
            self.customers = customers;
        })
    }
});
