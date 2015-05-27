'use strict';

app.controller('LoginController',
    function ($scope, $location, authService, currentUserService, friendRequestService, notifyService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success(data) {
                    notifyService.showInfo("Login successful");
                    currentUserService.getDataAboutMe(
                        function success(data) {
                            $(".header-profile-picture").html("<img src='" + data.profileImageData + "'>");
                        },
                        function error(err) {
                            notifyService.showError("Profile load failed", err);
                        }
                    );
                    $location.path("/")
                },

                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        };

    }
);
