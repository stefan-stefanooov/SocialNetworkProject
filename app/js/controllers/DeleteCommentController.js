'use strict';

app.controller('deleteCommentController',
    function ($scope, authService, getNewsFeedService, addCommentService, pageSize, notifyService, deleteCommentService) {

        $scope.authorisationCheck = function() {
            if(!authService.isLoggedIn()){
                $location.path("/login");
            }
        };

        $scope.deleteComment = function(postID, commentID) {
            deleteCommentService.deleteComment(
                postID,
                commentID,
                function success(data) {
                    notifyService.showInfo("Comment Deleted");
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