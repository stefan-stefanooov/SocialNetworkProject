'use strict';

app.controller('deletePostController',
    function ($scope, authService, getNewsFeedService, addCommentService, pageSize, notifyService, deletePostService) {

        $scope.params = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.authorisationCheck = function() {
            if(!authService.isLoggedIn()){
                $location.path("/login");
            }
        };

        $scope.deletePost = function(postID) {
            deletePostService.deletePost(
                postID,
                function success(data) {
                    notifyService.showInfo("Post Deleted");
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