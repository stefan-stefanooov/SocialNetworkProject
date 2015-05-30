'use strict';

app.factory('getNewsFeedService',
    function ($http, baseServiceUrl, authService) {
        return {
            getNewsFeed: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/feed',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
