'use strict';

app.factory('editPostService',
    function ($http, baseServiceUrl, authService) {
        return {
            editPost: function (postMessage, postID, success, error) {
                var data = {
                    postContent: postMessage
                };
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/posts/' + postID,
                    headers: authService.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
