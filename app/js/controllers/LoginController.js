'use strict';

app.controller('LoginController',
    function ($scope, $location, authService, currentUserService, friendRequestService, notifyService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success(data) {
                    notifyService.showInfo("Login successful");
                    currentUserService.getDataAboutMe(
                        function success(data) {
                            sessionStorage['userLoginData'] = JSON.stringify(data);
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
