var cookApp = angular.module('cookApp', []);
 
cookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Recipes', {
	templateUrl: 'templates/recipes.html',
	controller: 'RecipeListCtrl'
      }).
      when('/MyRecipes', {
	templateUrl: 'templates/myrecipes.html',
	controller: 'MyRecipeCtrl'
      }).
      otherwise({
	redirectTo: '/Recipes'
      });
}]);
/*Method 1*/
/*cookApp.controller('RecipeListCtrl', function ($scope) {
    $scope.saved = localStorage.getItem('recipes');
    $scope.recipes = (localStorage.getItem('recipes')!==null) ? JSON.parse($scope.saved) : [
	{name: 'Ladoo',
     preparation: 'Create paste using besan,salt and color mix. Heat oil to medium temperature. Add this mixture into filter and stir nicely to create small balls. Now add this into a sugar syrup. AFter 30 mins create balls using of any size. Ladoo ready'},
    {name: 'Pepper Chicken',
     preparation: 'Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe.'},
    {name: 'Mutton Curry',
     preparation: 'Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. '}  
  ];
    localStorage.setItem('recipes', JSON.stringify($scope.recipes));
   
  $scope.addRecipe=function(){  
	  $scope.recipes.push({name:$scope.newRecipe.name, preparation:$scope.newRecipe.preparation}); 
	  $scope.newRecipe="";
	  localStorage.setItem("recipes", JSON.stringify($scope.recipes)); // saving array in html5 local storage
	  //console.log($scope.recipes.length);
	  $scope.list();
	  $('#saveButton').attr('data-dismiss','modal');
	};
	$scope.list = function(){ 	 
	  if(typeof $scope.recipes ==='undefined')
	  {
		  if(localStorage.getItem("recipes") ===null)
		  {
		  	$scope.recipes = [];
		  }
		  else
		  {
		  	$scope.recipes = JSON.parse(localStorage.getItem("recipes")); // get value from localstorage
		  }
	  } 
	  else
	  {
		  //$scope.recipes = JSON.parse(localStorage.getItem($scope.saved));
		  console.log('length'+$scope.recipes.length);
	  }
	};
   $scope.list(); // whenever we are through this angular controller, we will fire the list method
   if(!$scope.$$phase) {
	$scope.$apply(); // apply all changes in angular $scope
   }   
});*/
/*Method 1*/
/*Method 2*/
cookApp.controller('RecipeListCtrl', function ($scope) {
    $scope.recipes = [
	{name: 'Ladoo',
     preparation: 'Create paste using besan,salt and color mix. Heat oil to medium temperature. Add this mixture into filter and stir nicely to create small balls. Now add this into a sugar syrup. AFter 30 mins create balls using of any size. Ladoo ready'},
    {name: 'PepperChicken',
     preparation: 'Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe.'},
    {name: 'MuttonCurry',
     preparation: 'Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. '}  
  ];   
});

cookApp.controller('MyRecipeCtrl', function ($scope) {
$scope.addRecipe=function(){  
	  $scope.recipes.push({name:$scope.newRecipe.name, preparation:$scope.newRecipe.preparation}); 
	  $scope.newRecipe="";
	  localStorage.setItem("recipes", JSON.stringify($scope.recipes)); 
	  $scope.list();
	  $('#saveButton').attr('data-dismiss','modal');
	  $scope.$apply();	  
	};

	$scope.remove=function(food){ 
      var index=$scope.recipes.indexOf(food)
      $scope.recipes.splice(index,1);     
    }
		
    $scope.saved = localStorage.getItem('recipes');
    $scope.recipes = (localStorage.getItem('recipes')!==null) ? JSON.parse($scope.saved) : [ ];
    localStorage.setItem('recipes', JSON.stringify($scope.recipes));  
	$scope.list = function(){ 	 
	  if(typeof $scope.recipes ==='undefined')
	  {
		  if(localStorage.getItem("recipes") ===null)
		  {
		  	$scope.recipes = [];
		  }
		  else
		  {
		  	$scope.recipes = JSON.parse(localStorage.getItem("recipes"));
		  }
	  } 
	  else
	  {
		  console.log('length'+$scope.recipes.length);
	  }
	};
   $scope.list(); 
   if(!$scope.$$phase) {
	$scope.$apply(); 
   }   
});
$(document).ready(function(){
$('.recipe-container .topHeader li').first().click(function(){
$('.recipe-container .topHeader li').first().addClass('active');
$('.recipe-container .topHeader li:nth-child(2)').removeClass('active');
});
$('.recipe-container .topHeader li:nth-child(2)').click(function(){
$('.recipe-container .topHeader li').first().removeClass('active');
$('.recipe-container .topHeader li:nth-child(2)').addClass('active');
});
});
/*Method 2*/

	

