'use strict';

app.controller('PostController',
    function ($scope, addPostService,  $routeParams,$location, notifyService) {
        $scope.addPost = function(postMessage) {
            addPostService.addPost(
                $routeParams.username,
                postMessage,
                function success(data) {
                    notifyService.showInfo("Post Added");
                    $scope.getUserWallByPages();
                },
                function error(err) {
                    notifyService.showError("Loading friends failed", err);
                }
            );
        };
    }
);
