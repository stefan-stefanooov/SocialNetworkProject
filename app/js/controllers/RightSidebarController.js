'use strict';

app.controller('RightSidebarController',
    function ($scope, $rootScope, $location, $route, categoriesService, townsService) {
        $scope.loadUserData = function() {
            currentUserService.getDataAboutMe(
                function success(data) {
                    switch(data.gender)
                    {
                        case 1:
                            data.gender = "male";
                            break;
                        case 2:
                            data.gender = "female";
                            break;
                        default:
                            data.gender = "other";
                            break;
                    }
                    $scope.userData = data;
                },
                function error(err) {
                    notifyService.showError("Profile load failed", err);
                }
            );
        };
        $scope.loadUserData();

    }
);
