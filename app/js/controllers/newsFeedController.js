'use strict';

app.controller('NewsFeedController',
    function ($scope, $location, authService) {
        $scope.authorisationCheck = function() {
            if(!authService.isLoggedIn()){
                $location.path("/login");
            }
        };

        $scope.authorisationCheck();
    }
);