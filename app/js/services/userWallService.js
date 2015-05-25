'use strict';

app.factory('userWallService',
    function ($http, baseServiceUrl, authService, $routeParams) {
        return {
            getUserWallByPages: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + $routeParams.username + '/wall',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
