'use strict';

app.controller('SearchController',
    function ($scope, $rootScope, $location, authService, notifyService, searchBoxService) {
        $scope.searchParamschange = function() {
            if($scope.searchUser){
                searchBoxService.searchUserByName($scope.searchUser,
                    function success(data) {
                        $("ul.results").show();
                        $scope.searchUserResult = data;
                    },
                    function error(err) {
                    }
                );
            }
            else{
                $scope.searchUserResult = {};
            }
        };
    }
);
