'use strict';

app.factory('searchBoxService',
    function ($http, baseServiceUrl, authService) {
        return {
            searchUserByName: function (searchUser, success, error) {
                var params ={
                    searchTerm: searchUser
                }
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/search',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
