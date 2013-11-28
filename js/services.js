
angular.module('RecipeServiceFactory', [])

  .factory ('RecipeService', function () {

    // NOTE: See notes about RecipeStorageService below.

    var data = [ {
      name: 'Ladoo',
      preparation: 'Create paste using besan,salt and color mix. Heat oil to medium temperature. Add this mixture into filter and stir nicely to create small balls. Now add this into a sugar syrup. AFter 30 mins create balls using of any size. Ladoo ready'
    }, {
      name: 'PepperChicken',
      preparation: 'Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe. Pepper chicken is one the spicy receipe.'
    }, {
      name: 'MuttonCurry',
      preparation: 'Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. Mutton curry is one of mmy fav receipe. '
    }];

    return {
      recipes: function () {
        return data;
      },
      get: function(id){
        return data[id];
      },
      add: function (recipe) {
        data.push({
          name : recipe.name, preparation : recipe.preparation
        });
        // NOTE: At this point could broadcast an event that data has changed,
        // would a listener could then back to local storage.
        return data;
      },
      update: function (recipe, index) {
        data[index] = recipe;
        // NOTE: At this point could broadcast an event that data has changed,
        // would a listener could then back to local storage.
        return data;
      },
    }
  }) // end of Recipes service

  .factory ('RecipeStorageService', function () {

    /* TODO: could manage all local storage in here.
             The RecipeService would call this for the initial set of data,
             which would get it from local storage (if it's there) or initialise it
             (if it's not in storage).

             Then when RecipeService changes data, it would broadcast an event
             and this service would persist changes to local storage.

       NOTES from Ramya's original

       localStorage.setItem("recipes", JSON.stringify($scope.recipes));

       $scope.saved = localStorage.getItem('recipes');
       $scope.recipes = (localStorage.getItem('recipes')!==null) ? JSON.parse($scope.saved) : [ ];
       localStorage.setItem('recipes', JSON.stringify($scope.recipes));
       $scope.list = function(){
         if(typeof $scope.recipes ==='undefined') {
           if(localStorage.getItem("recipes") ===null) {
             $scope.recipes = [];
           } else {
             $scope.recipes = JSON.parse(localStorage.getItem("recipes"));
           }
         } else {
           console.log('num recipes'+$scope.recipes.length);
         }
       };

    */

  } // end of Recipes Storage service
);

