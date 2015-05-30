'use strict';

app.controller('NewsFeedController',
    function ($scope,
              $location,
              authService,
              getNewsFeedService,
              pageSize,
              notifyService,
              friendsLimit,
              commentLimit) {

        $scope.params = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
        $scope.checked = false;
        $scope.commentLimit = commentLimit;
        $scope.friendsLimit = friendsLimit;

        $scope.moreComments = function () {
            $scope.commentLimit = undefined;
        };

        $scope.moreComments = function () {
            $scope.friendsLimit = undefined;
        };

        $scope.authorisationCheck = function() {
            if(!authService.isLoggedIn()){
                $location.path("/login");
            }
        };

        $scope.getNewsFeed = function() {
            getNewsFeedService.getNewsFeed(
                $scope.params,
                function success(data) {
                    $scope.newsFeedData = data;
                    console.log($scope.newsFeedData);
                },
                function error(data) {
                    notifyService.showError(data.message);
                }
            );
        };

        $scope.showHideCommentInput = function() {
            $scope.checked = !$scope.checked;
        };

        $scope.authorisationCheck();
        $scope.getNewsFeed();
    }
);