'use strict';

app.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            login: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/login',
                    data: userData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            register: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/Register',
                    data: userData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            logout: function() {
                delete sessionStorage['currentUser'];
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/logout',
                    headers: this.getAuthHeaders()
                };
                $http(request);
            },

            changeUserPassword: function(userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + 'api/me/changepassword',
                    headers: this.getAuthHeaders(),
                    data: userData
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            },

            getCurrentUser : function() {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(userObject);
                }
            },

            getCurrentUserProfilePicture : function() {
                var userObject = sessionStorage['userLoginData'];
                if (userObject) {
                    return JSON.parse(userObject);
                }
            },

            isLoggedIn : function() {
                return sessionStorage['currentUser'] != undefined;
            },

            getAuthHeaders: function() {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            },

            changePass: function(passData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/changepassword',
                    data: passData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
