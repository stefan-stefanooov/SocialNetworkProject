'use strict';

app.controller('SearchController',
    function ($scope, $rootScope, $location, authService, notifyService, searchBoxService) {
        $scope.searchParamschange = function() {
            searchBoxService.searchUserByName($scope.searchUser,
                function success(data) {
                    $scope.searchUserResult = data;
                },
                function error(err) {
                }
            );
        };
    }
);
