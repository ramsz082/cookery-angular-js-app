// See http://angular-ui.github.io/bootstrap/
var cookApp = angular.module('cookApp', ['ngRoute', 'ui.bootstrap', 'RecipeServiceFactory']);
 
cookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
  templateUrl: 'templates/home.html',
  controller: 'homeCtrl'
      }).
      when('/tables', {
  templateUrl: 'templates/tables.html',
  controller: 'tableCtrl'
      }).
      when('/order', {
  templateUrl: 'templates/order.html',
  controller: 'menuCtrl'
      }).
      when('/neworder', {
  templateUrl: 'templates/new-order.html',
  controller: 'neworderCtrl'
      }).
      when('/changeorder', {
  templateUrl: 'templates/change-order.html',
  controller: 'changeorderCtrl'
      }).
      when('/closeorder', {
  templateUrl: 'templates/close-order.html',
  controller: 'closeOrderCtrl'
      }).
      when('/showreceipt', {
  templateUrl: 'templates/show-receipt.html',
  controller: 'showReceiptCtrl'
      }).
      otherwise({
  redirectTo: '/home'
      });
}]);

cookApp.controller('RecipeListCtrl', function ($scope, $modal, $log, RecipeService) {

  
});







