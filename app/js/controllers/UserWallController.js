'use strict';

app.controller('UserWallController',
   function ($scope, notifyService, userWallService, userFriendsService, userService, pageSize, $routeParams) {

       $scope.isFriend = userFriendsService.isCurrentUserFriendWith($routeParams.username);

       $scope.params = {
          'startPage' : 1,
          'pageSize' : pageSize
      };
      $scope.getUserWallByPages = function() {
          userWallService.getUserWallByPages(
              $scope.params,
              function success(data) {
                  $scope.wall = data;
                  console.log(data);
              },
              function error(err) {
                  notifyService.showError("Cannot load user wall", err);
              }
          );
      };

      $scope.getUserWallByPages();

   }
);
