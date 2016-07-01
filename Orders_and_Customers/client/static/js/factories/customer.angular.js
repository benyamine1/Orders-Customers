myApp.factory('CustomerFactory', function($http){
    var factory={}
    factory.products = ['nike shoes','black belts','ice cream','candies'];
    factory.quantities = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    factory.getCustomer = function(callback){
        $http.get('/customers').success(function (customers){
            callback(customers);
        })
    }

    factory.addCustomer = function (data, callback){
        $http.post('/customers', data).success(function (customers){
            callback(customers);
        })
    }

    factory.removeCustomer = function (customerId, callback){
        $http.post('/customers/'+customerId+'/destroy').success(function (customers){
            callback(customers);
        })
    }

    factory.getOrders = function (callback){
       $http.get('/orders').success(function (orders){
            callback(orders);
        })
    }

    factory.getProducts = function (callback){
       $http.get('/orders').success(function (products){
            callback(products);
        })
    }

    factory.getQuantities = function (callback){
       $http.get('/orders').success(function (quantities){
            callback(quantities);
        })
    }

    factory.addOrders = function (order, callback){
         $http.post('/orders', order).success(function (orders){
            callback(orders);
        })
    }

    return factory;
});
