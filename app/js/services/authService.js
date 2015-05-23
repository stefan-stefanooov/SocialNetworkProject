'use strict';

app.factory('authService',
    function ($http, baseServiceUrl) {
        return {
            login: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/Login',
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
                    url: baseServiceUrl + '/api/users/Logout',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            },

            changeUserPassword: function(userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + 'api/me/changepassword',
                    headers: authService.getAuthHeaders(),
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

            isAnonymous : function() {
                return sessionStorage['currentUser'] == undefined;
            },

            isLoggedIn : function() {
                return sessionStorage['currentUser'] != undefined;
            },

            isNormalUser : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (!currentUser.isAdmin);
            },

            isAdmin : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (currentUser.isAdmin);
            },

            getAuthHeaders: function() {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            },

            editUserProfile: function(userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    data: userData,
                    headers: this.getAuthHeaders()
                };
                $http(request).success(success).error(error);
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
