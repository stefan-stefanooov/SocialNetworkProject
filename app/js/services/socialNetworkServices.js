'use strict';

app.factory('postsService',
    function ($resource, baseServiceUrl) {
        var postsResource = $resource(
            baseServiceUrl + '/api/me/feed',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getposts: function(params, success, error) {
                return postsResource.getAll(params, success, error);
            }
        }
    }
);


app.factory('categoriesService',
    function ($resource, baseServiceUrl) {
        var categoriesResource = $resource(
            baseServiceUrl + '/api/categories'
        );

        return {
            getCategories: function (success, error) {
                return categoriesResource.query(success, error);
            }
        }
    }
);


app.factory('townsService',
    function ($resource, baseServiceUrl) {
        var townsResource = $resource(
            baseServiceUrl + '/api/towns'
        );

        return {
            getTowns: function(success, error) {
                return townsResource.query(success, error);
            }
        }
    }
);
