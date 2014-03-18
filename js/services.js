
angular.module('RecipeServiceFactory', [])

  .factory ('RecipeService', function () {

    // NOTE: See notes about RecipeStorageService below.

    var data = [ {
      name: 'Chicken Biriyani',
    ingredients: [{name:'Chicken:1 kg'},{name:'Basmati Rice:3 Cups'},{name:'Oil:2 tsp'},{name:'Butter:50 gms or 10 tsp'},{name:'Ghee:6 tsp'},{name:'Cloves:6'},{name:'Cinnamon:2'},{name:'Cardamom:6'},{name:'Bay Leaves:3'},{name:'Fennel seeds:1 tsp'},{name:'Onion:1 finely chopped'},{name:'Curry Leaves:10'},{name:'Chilli:3 sliced into halves'},{name:'Ginger:2 tsp'},{name:'Garlic:2 tsp'},{name:'Tomato:1'},{name:'Coriander:2 cups'},{name:'Mint:1.5 cup'},{name:'Chilli powder:1 tsp'},{name:'Coriander Powder:1/2 tsp'},{name:'Water:2.5 cups'},{name:'Salt: As required'}],
    preparation: [{step:'Add oil,ghee and butter in a pan. Once its hot add fennel seeds, cinnamon, cardamom, cloves, bay leaves. Fry for a while.'},{step:' Add finely chopped onions, curry leaves and green chilli. Fry until the onions turn golden brown.'},{step:'Add ginger and garlic paste. Deep fry and make sure raw smell is gone completely'},{step:'Add paste of coriander(1.5 cup) and mint leaves(1.5 cup). Stir until getting rd of raw smell.'},{step:' Add finely chopped tomato and stir for 2 minutes.'},{step:'Add coriander powder, chilli powder and salt.'},{step:'Add chicken and fry for another 5 minutes.'},{step:'Once the liquid from chicken come out add water.'},{step:'Once the chicken is 3/4th cooked, add rice and stir nicely. Now cover the vessel with foil sheet and then with lid. Reduce the flame and let it cook for 15 mins. Once it is done switch off the flame and stir nicely without breaking the rice. Keep covered with foil sheet till the time to serve so that it remains delicious.'}],
    favitem: false
    }, {
      name: 'Chicken Curry',
    ingredients: [{name:'Chicken:1/2 kg'},{name:'Oil:10 tsp'},{name:'Cloves:2'},{name:'Cinnamon:1'},{name:'Cardamom:2'},{name:'Fennel seeds:1 1/2 tsp'},{name:'Cumin seeds:1/2 tsp'},{name:'Pepper:1 tsp'},{name:'Onion:1 finely chopped'},{name:'Curry Leaves:10'},{name:'Chilli:2 sliced into halves'},{name:'Ginger:1 tsp'},{name:'Garlic:1 tsp'},{name:'Tomato:1'},{name:'Coriander:1/2 cup'},{name:'Chilli powder:1 tsp'},{name:'Coriander Powder:2 tsp'},{name:'Chicken Masala:1/2 tsp'},{name:'Salt: As required'}],
    preparation: [{step:'Add oil in a pan. Once its hot add fennel seeds, curry leaves. Fry for a while.'},{step:' Add finely chopped onions and green chilli. Fry until the onions turn golden brown.'},{step:'Add ginger and garlic paste. Deep fry and make sure raw smell is gone completely'},{step:' Add finely chopped tomato and stir for 2 minutes.'},{step:'Add coriander powder, chilli powder, chicken masala and salt.'},{step:'Add chicken and fry nicely so that all the flavour gets added to chicken very nicely. Water is not required wheras chicken itself will produce liquid'},{step:'once the chicken is cooked add coriander and switch off the flame. Delicious chicken curry is ready'}],
    favitem: false
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
          name : recipe.name, preparation : recipe.preparation, favitem : false
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
    if (recipe.favitem == true) {
      recipe.favitem = false;
    }
      else {
        recipe.favitem = true; 
    }
    alert(recipe.name + " recipe added to Favourites");		
    return data;
      },
    }
  }) // end of Recipes service

  .factory ('RecipeStorageService', function () {
		 
  } // end of Recipes Storage service
);

