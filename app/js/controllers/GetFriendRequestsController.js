'use strict';

app.controller('GetFriendRequestsController',
    function ($scope, $location, friendRequestService, notifyService) {

        $scope.acceptFriendRequest = function(id) {
            friendRequestService.acceptFriendRequest(id,
                function success(data) {
                    notifyService.showInfo(data);
                    $scope.GetFriendRequests();
                },
                function error(err) {
                    notifyService.showError(err);
                }
            );
        };

        $scope.rejectFriendRequest = function(id) {
            friendRequestService.rejectFriendRequest(id,
                function success(data) {
                    notifyService.showInfo(data);
                    $scope.GetFriendRequests();
                },
                function error(err) {
                    notifyService.showError(err);
                }
            );
        };

        $scope.GetFriendRequests = function() {
            friendRequestService.getFriendRequests(
                function success(data) {
                    var i;
                    for(i = 0 ; i < data.length; i++) {
                        if(!data[i].user.profileImageData){
                            data[i].user.profileImageData
                                = "http://failstreet.com/wp-content/themes/iloveit/images/no.image.50x50.png";
                        }
                    }
                    $scope.friendRequests = data;
                },
                function error(err) {
                    notifyService.showError("Get friend request failed", err);
                }
            );
        };
        $scope.GetFriendRequests();
    }
);
