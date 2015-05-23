'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {

            getUserPreviewData: function (userName, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + userName + '/preview',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(function(data) {
                    sessionStorage['userPreviewData'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            editUserPofile: function (userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/',
                    headers: authService.getAuthHeaders(),
                    data: userData
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            },

            getCurrentUserPreviewData : function() {
                var userObject = sessionStorage['userPreviewData'];
                if (userObject) {
                    console.log(userObject);
                    return JSON.parse(userObject);
                }
            },

            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getUserAdById: function (id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            deactivateAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/deactivate/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            publishAgainAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/publishagain/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            editAd: function (adData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/' + adData.id,
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            deleteAd: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
