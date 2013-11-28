
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
	  addFav: function (recipe) {
		var favRecipes = localStorage.getItem('favrecipes');
		var favRecipes = (localStorage.getItem('favrecipes')!==null) ? JSON.parse(favRecipes) : [ ];
		favRecipes.push({name: recipe.name, preparation: recipe.preparation}); 
		localStorage.setItem('favrecipes',JSON.stringify(favRecipes));          
      },
    }
  }) // end of Recipes service

  .factory ('RecipeStorageService', function () {
	var favdata = localStorage.getItem('favrecipes');	
	return {
	recipes: function() {
	return favdata;
	},
	}
  } // end of Recipes Storage service
);

