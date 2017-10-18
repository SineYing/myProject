var myApp = angular.module('myApp', ['ui.router']);
myApp.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("list", {//父路由
            url: '/list',
            templateUrl: 'list/list.html'
        })
        .state("list.info", {//子路由
            url: '/info',
            templateUrl: 'form/form.html'
        })
}]);