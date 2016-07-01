myApp.config(function ($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'../partials/customers.html'
    })
    .when('/customers',{
        templateUrl:'../partials/customers.html'
    })

    .when('/orders',{
        templateUrl:'../partials/orders.html'
    })
    .otherwise({
        redirectTo:'/'
    });
});
