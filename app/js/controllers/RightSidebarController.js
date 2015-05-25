'use strict';

app.controller('RightSidebarController',
    function ($scope, $rootScope, $location, $route, userFriendsService, notifyService) {
        $scope.loadUserFrinds = function() {
            userFriendsService.getCurrentUsersFriends(
                function success(data) {
                    $scope.userFriendsList = data;
                },
                function error(err) {
                    notifyService.showError("Loading friends failed", err);
                }
            );
        };
    }
);
