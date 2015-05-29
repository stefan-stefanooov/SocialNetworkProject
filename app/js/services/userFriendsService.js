'use strict';

app.factory('userFriendsService',
    function ($http, baseServiceUrl, authService) {
        return {
            getCurrentUsersFriends: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
