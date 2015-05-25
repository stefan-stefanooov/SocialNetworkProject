'use strict';

app.controller('HomeController',
   function ($scope, adsService, notifyService, userService, pageSize) {
      $scope.postParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.loadOwnFriends = function() {
          userService.getOwnFriends(
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  notifyService.showError("Cannot load ads", err);
              }
          );
      };

      $scope.reloadAds();

   }
);
