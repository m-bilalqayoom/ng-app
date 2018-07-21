var inclusion = angular.module("inclusion", ['ngRoute']);

inclusion.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
    }).

    when('/about',{
       templateUrl: 'about.html',
       controller: 'aboutController'
    }).

    when('/services',{
        templateUrl:'services.html',
        controller: 'servicesController'
    }).

    when('/gallery',{
        templateUrl: 'gallery.html',
        controller: 'galleryController'
    }).

    when('/mail',{
        templateUrl: 'mail.html',
        controller: 'mailController'

    }).

    when('/typography',{
        templateUrl: 'typography.html',
        controller: 'typographyController'

    }).

    when('/icons',{
        templateUrl: 'icons.html',
        controller: 'iconsController'
    }).

    otherwise({
        redirectTo:'/home'
    })
}]);

inclusion.controller("homeController", function($scope){
    console.clear();
    console.log('Home Controller');
});

inclusion.controller("aboutController", function($scope){
    console.clear();
    console.log("About Controller");
});

inclusion.controller("mailController", function($scope){
    console.clear();
    console.log("Mail Controller");
})

inclusion.controller("iconsController", function($scope){
    console.clear();
    console.log("Icons Controller");
})

inclusion.controller("typographyController", function($scope){
    console.clear();
    console.log("Typography Controller");
})
