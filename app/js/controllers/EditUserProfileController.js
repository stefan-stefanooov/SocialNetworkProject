'use strict';

app.controller('EditUserProfileController',
    function ($scope, userService, notifyService, authService, currentUserService) {
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

        $scope.editUserPofile = function(userData) {
            currentUserService.editCurrentUserProfile(userData,
                function success() {
                    notifyService.showInfo("Profile changed");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Profile change failed", err);
                }
            );
        };

        $scope.profileImageFileSelected = function(fileInputField) {
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.userData.profileImageData = reader.result;
                    $(".profile-image-box").html("<img src='" + reader.result + "'>");
                };

                reader.readAsDataURL(file);
            } else {
                $(".cover-image-box").html("<p>File type not supported!</p>");
            }
        };

        $scope.coverImageFileSelected = function(fileInputField) {
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.userData.coverImageData = reader.result;
                    $(".cover-image-box").html("<img src='" + reader.result + "'>");
                };

                reader.readAsDataURL(file);
            } else {
                $(".cover-image-box").html("<p>File type not supported!</p>");
            }
        };
    }
);
