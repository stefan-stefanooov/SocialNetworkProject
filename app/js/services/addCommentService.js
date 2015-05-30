'use strict';

app.factory('addCommentService',
    function ($http, baseServiceUrl, authService) {
        return {
            addComment: function (commentContent, commentID, success, error) {
                var data = {
                    commentContent: commentContent
                };
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/posts/' + commentID + '/comments',
                    headers: authService.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
