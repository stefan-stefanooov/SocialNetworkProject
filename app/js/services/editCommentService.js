'use strict';

app.factory('editCommentService',
    function ($http, baseServiceUrl, authService) {
        return {
            editComment: function (commentEditText, postID, commentID, success, error) {
                var data = {
                    commentContent: commentEditText
                };
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/posts/' + postID + "/comments/" + commentID,
                    headers: authService.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
