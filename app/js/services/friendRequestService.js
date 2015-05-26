'use strict';

app.factory('friendRequestService',
    function ($http, baseServiceUrl, authService) {
        return {
            sendFriendRequest: function (userName, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/me/requests/' + userName,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(data).error(error);
            },

            getFriendRequests: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/requests/',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(data).error(error);
            }
        }
    }
);
