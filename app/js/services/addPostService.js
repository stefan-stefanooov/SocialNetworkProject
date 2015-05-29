'use strict';

app.factory('addPostService',
    function ($http, baseServiceUrl, authService) {
        return {
            addPost: function (username, postMessage, success, error) {
                var data = {
                    postContent: postMessage,
                    username: username
                };
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/posts',
                    headers: authService.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
