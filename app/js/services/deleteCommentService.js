'use strict';

app.factory('deleteCommentService',
    function ($http, baseServiceUrl, authService) {
        return {
            deleteComment: function (postID, commentID, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/posts/' + postID + "/comments/" + commentID,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
