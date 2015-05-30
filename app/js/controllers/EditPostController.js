'use strict';

app.controller('editPostController',
    function ($scope, authService, getNewsFeedService, addCommentService, pageSize, notifyService, editPostService) {

        $scope.editPost = function(postID) {
            editPostService.editPost(
                $scope.postEditMessage,
                postID,
                function success(data) {
                    $scope.checkedEdit = false;
                    notifyService.showInfo("Post Edited");
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