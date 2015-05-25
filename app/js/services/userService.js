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
            }
        }
    }
);
