'use strict';

app.controller('GetFriendRequestsController',
    function ($scope, $location, friendRequestService, notifyService) {

        $scope.acceptFriendRequest = function() {
            friendRequestService.acceptFriendRequest(id,
                function success(data) {
                    notifyService.showInfo(data);
                },
                function error(err) {
                    notifyService.showError(err);
                }
            );
        };

        $scope.rejectFriendRequest = function() {
            friendRequestService.rejectFriendRequest(id,
                function success(data) {
                    notifyService.showInfo(data);
                },
                function error(err) {
                    notifyService.showError(err);
                }
            );
        };

        $scope.GetFriendRequests = function() {
            friendRequestService.getFriendRequests(
                function success(data) {
                    $scope.friendRequests = data;
                    console.log(data);
                    if(data.length){
                        var request;
                        for(request in data){
                            if(request.profileImageData){
                                $(".dropdown-menu")
                                    .append("<li><img src='" + request.profileImageData + "'>" + "</li>");
                            }
                            else{
                                $(".dropdown-menu")
                                    .append('<li><img src="img/no_image.jpg"></li>');
                            }
                            console.log(request);
                            $(".dropdown-menu").append("<span>" + request.user.name + "</span>");
                            $(".dropdown-menu")
                                .append("<input type='button' value='Accept' class='accept-button' ng-click='acceptFriendRequest("
                                    + request.id +")'>")
                                .append("<input type='button' value='Reject' class='reject-button' ng-click='rejectFriendRequest("
                                    + request.id +")'>");
                        }

                    }
                },
                function error(err) {
                    notifyService.showError("Get friend request failed: {0}", err);
                }
            );
        };
        $scope.GetFriendRequests();
    }
);
