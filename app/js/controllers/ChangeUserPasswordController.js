'use strict';

app.controller('ChangeUserPasswordController',
    function ($scope, $rootScope, $location, authService, userService, notifyService) {
        $scope.changeUserPassword = function(userData) {
            authService.changeUserPassword(userData,
                function success() {
                    notifyService.showInfo("Password changed");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };
    }
);
