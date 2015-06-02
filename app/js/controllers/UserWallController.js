'use strict';

app.controller('UserWallController',
   function ($scope,
             notifyService,
             userWallService,
             userFriendsService,
             userService,
             pageSize,
             commentLimit,
             $routeParams,
             friendsLimit) {

       $scope.params = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

       $scope.commentLimit = commentLimit;
       $scope.friendsLimit = friendsLimit;

       $scope.moreComments = function () {
           $scope.commentLimit = undefined;
       };

       $scope.moreComments = function () {
           $scope.friendsLimit = undefined;
       };

       $scope.showHideCommentInput = function() {
           $scope.checked = !$scope.checked;
       };

       $scope.showHideEditInput = function() {
           $scope.checkedEdit = !$scope.checkedEdit;
       };

       $scope.showHideEditCommentInput = function() {
           $scope.checkedEditComment = !$scope.checkedEditComment;
       };

      $scope.getUserWallByPages = function() {
          userWallService.getUserWallByPages(
              $scope.params,
              function success(data) {
                  $scope.wall = data;
                  if(data.length){
                      $scope.wallOwner = data[0].wallOwner;
                      $scope.isUserFriend = data[0].wallOwner.isFriend;
                      $scope.isNotUserFriend = !$scope.isUserFriend;
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

       $scope.clearSearch = function () {
           console.log("sssss");
            $("ul.results").hide();
           $(".search-input-field").val("");
       };

      $scope.getUserWallByPages();
   }
);
