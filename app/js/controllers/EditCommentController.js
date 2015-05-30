'use strict';

app.controller('editCommentController',
    function ($scope, authService, getNewsFeedService, addCommentService, pageSize, notifyService, editCommentService) {

        $scope.editComment = function(postID, commentID) {
            editCommentService.editComment(
                $scope.commentEditMessage,
                postID,
                commentID,
                function success(data) {
                    $scope.checkedCommentEdit = false;
                    notifyService.showInfo("Comment Edited");
                    if($scope.getNewsFeed){
                        $scope.getNewsFeed();
                    }
                    else{
                        $scope.getUserWallByPages();
                    }
                },
                function error(data) {
                    notifyService.showError(data.message);
                }
            );
        };
    }
);