'use strict';

app.controller('UserWallController',
   function ($scope, notifyService, userWallService, userFriendsService, userService, pageSize, $routeParams) {

       $scope.params = {
          'startPage' : 1,
          'pageSize' : pageSize
      };
      $scope.getUserWallByPages = function() {
          userWallService.getUserWallByPages(
              $scope.params,
              function success(data) {
                  $scope.wall = data;
                  if(data.length){
                      $scope.wallOwner = data[0].wallOwner;
                  }
                  else{
                      userService.getUserPreviewData(
                          $routeParams.username,
                          function success(data) {
                              $scope.wallOwner = data;
                              $scope.isUserFriend = data.isFriend;
                              $scope.isNotUserFriend = !data.isFriend;

                          },
                          function error(err) {
                              notifyService.showError("Friend request failed: {0}", err);
                          }
                      );
                  }
              },
              function error(data) {
                  notifyService.showError(data.message);
              }
          );
      };

      $scope.getUserWallByPages();
   }
);
