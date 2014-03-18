// See http://angular-ui.github.io/bootstrap/
var cookApp = angular.module('cookApp', ['ngRoute', 'ui.bootstrap', 'RecipeServiceFactory']);
 
cookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/recipes', {
  templateUrl: 'templates/list.html',
  controller: 'RecipeListCtrl'
      }).
      when('/fav', {
  templateUrl: 'templates/fav.html',
  controller: 'FavRecipeCtrl'
      }).
      otherwise({
  redirectTo: '/recipes'
      });
}]);


var RecipeModalInstanceCtrl = function ($scope, $modalInstance, title, recipe, isFavRecipe) {

  $scope.title = title;
  $scope.recipe = recipe;

  $scope.ok = function () {
    $modalInstance.close($scope.recipe);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

cookApp.controller('RecipeListCtrl', function ($scope, $modal, $log, RecipeService) {

  $scope.recipes = RecipeService.recipes();
  $scope.add = function() {

    var modalInstance = $modal.open({
      templateUrl: 'templates/add.html',
      controller: RecipeModalInstanceCtrl,
      resolve: {
        recipe: function () { return { name: "", preparation: "" }; },
        title: function() { return "Add Recipe"; }
      }
    });

    modalInstance.result.then(function (recipe) {
      $scope.recipes = RecipeService.add(recipe);
      
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.edit = function(recipe) {
    var index = $scope.recipes.indexOf(recipe);

    var modalInstance = $modal.open({
      templateUrl: 'templates/add.html',
      controller: RecipeModalInstanceCtrl,
      resolve: {
        recipe: function () { return recipe; },
        title: function() { return "Edit Recipe ("+index+": "+$scope.recipes[index].name+")"; }
      }
    });

    modalInstance.result.then(function (recipe) {
      $scope.recipes = RecipeService.update(index, recipe);
      
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  $scope.addFav = function(recipe) {
    $scope.recipes = RecipeService.addFav(recipe);	  
  };
});


cookApp.controller('FavRecipeCtrl', function ($scope, RecipeStorageService, RecipeService) {
  var favRecipes = RecipeService.recipes();
  $scope.recipes = [];
  angular.forEach(favRecipes, function(recipe) {
    if (recipe.favitem == true) {
      $scope.recipes.push(recipe);
    }
  });
});


