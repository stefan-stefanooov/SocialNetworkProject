'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('pageSize', 5);
app.constant('commentLimit',3);
app.constant('friendsLimit',6);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/news-feed.html',
        controller: 'NewsFeedController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/profile/password', {
        templateUrl: 'templates/change-password.html',
        controller: 'ChangeUserPasswordController'
    });

    $routeProvider.when('/profile', {
        templateUrl: 'templates/edit-profile.html',
        controller: 'EditUserProfileController'
    });

    $routeProvider.when('/users/:username', {
        templateUrl: 'templates/user-wall.html',
        controller: 'UserWallController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});