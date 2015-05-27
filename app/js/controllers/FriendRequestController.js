'use strict';

app.controller('FriendRequestController',
    function ($scope, $location, friendRequestService, notifyService) {
        $scope.sendFriendRequest = function(userName) {
            friendRequestService.sendFriendRequest(userName,
                function success(data) {
                    notifyService.showInfo(data.message);
                },
                function error(err) {
                    notifyService.showError("Friend request failed: {0}", err);
                }
            );
        };
    }
);