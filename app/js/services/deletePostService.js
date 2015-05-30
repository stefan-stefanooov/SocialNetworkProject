'use strict';

app.factory('deletePostService',
    function ($http, baseServiceUrl, authService) {
        return {
            deletePost: function (postID, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/posts/' + postID,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
