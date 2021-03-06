'use strict';

app.factory('currentUserService',
    function ($http, baseServiceUrl, authService) {
        return {
            getDataAboutMe: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            getCurrentUserDataAboutMe: function() {
                var userObject = sessionStorage['currentUserDataAboutMe'];
                if (userObject) {
                    console.log(userObject);
                    return JSON.parse(userObject);
                }
            },

            editCurrentUserProfile: function(userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    data: userData,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
