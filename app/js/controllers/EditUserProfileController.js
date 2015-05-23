'use strict';

app.controller('EditUserProfileController',
    function ($scope, userService, notifyService) {
        $scope.editUserPofile = function(userData) {
            userService.editUserPofile(userData,
                function success() {
                    notifyService.showInfo("Profile changed");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Profile change failed", err);
                }
            );
        };
    }
);
