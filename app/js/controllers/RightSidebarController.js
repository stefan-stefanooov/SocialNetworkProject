'use strict';

app.controller('RightSidebarController',
    function ($scope, $rootScope, $location, $route, userFriendsService, notifyService) {
        $scope.loadUserFriends = function() {
            userFriendsService.getCurrentUsersFriends(
                function success(data) {
                    var i;
                    for(i = 0 ; i < data.length; i++) {
                        if(!data[i].profileImageData){
                            data[i].profileImageData
                                = "http://www.airsoftsociety.com//images/no_image.jpg";
                        }
                    }
                    $scope.userFriendsList = data;
                },
                function error(err) {
                    notifyService.showError("Loading friends failed", err);
                }
            );
        };
        $scope.loadUserFriends();
    }
);
