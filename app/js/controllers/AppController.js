'use strict';

app.controller('AppController',
    function ($scope, $location, authService, userService, notifyService) {
		// Put the authService & userService in the $scope to make them accessible from all screens
        $scope.authService = authService;
        $scope.userService = userService;

        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("Logout successful");
            $location.path('/');
        };
    }
);
