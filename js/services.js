angular.module('Services', ['ngResource']).
factory('Recipes', function($resource){
    return $resource('recipes.json', {}, {
        query: {method:'GET', params:{File:'Json'}, isArray:false},
        update: {method:'PUT', params:{File:'Json'}}
    });
});
