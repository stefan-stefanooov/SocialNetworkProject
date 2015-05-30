'use strict';

app.controller('addCommentController',
    function ($scope, authService, getNewsFeedService, addCommentService, pageSize, notifyService) {

        $scope.params = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.authorisationCheck = function() {
            if(!authService.isLoggedIn()){
                $location.path("/login");
            }
        };

        $scope.addComment = function(commentID) {
            addCommentService.addComment(
                $scope.commentContent,
                commentID,
                function success(data) {
                    notifyService.showInfo("Comment Added");
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