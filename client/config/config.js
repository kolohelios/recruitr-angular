/*eslint no-reserved-keys:0 */
'use strict';

angular.module('recruitr')
.config(function($stateProvider, $urlRouterProvider, uiSelectConfig){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('login', {url: '/login', templateUrl: '/views/users/login.html', controller: 'LoginCtrl'})
  .state('register', {url: '/register', templateUrl: '/views/users/users-new.html', controller: 'UsersNewCtrl'})
  .state('users', {url: '/users', templateUrl: '/views/users/users.html', abstract: true})
  .state('users.manage', {url: '/{userId}/manage', templateUrl: '/views/users/users-manage.html', controller: 'UsersManageCtrl'})
  .state('users.new', {url: '/new', templateUrl: '/views/users/users-new.html', controller: 'UsersNewCtrl'})
  .state('users.edit', {url: '/edit/{userId}', templateUrl: '/views/users/users-new.html', controller: 'UsersNewCtrl'})
  .state('users.list', {url: '/', templateUrl: '/views/users/users-list.html', controller: 'UsersListCtrl'})
  .state('profiles', {url: '/profiles', templateUrl: '/views/profiles/profiles.html', abstract: true})
  .state('profiles.list', {url: '/', templateUrl: '/views/profiles/profiles-list.html', controller: 'ProfilesListCtrl'})
  .state('profiles.new', {url: '/new', templateUrl: '/views/profiles/profiles-new.html', controller: 'ProfilesNewCtrl'})
  .state('profiles.edit', {url: '/{studentId}/edit', templateUrl: '/views/profiles/profiles-new.html', controller: 'ProfilesNewCtrl'})
  .state('profiles.show', {url: '/{studentId}', templateUrl: '/views/profiles/profiles-show.html', controller: 'ProfilesShowCtrl'});

  uiSelectConfig.theme = 'bootstrap';
  uiSelectConfig.resetSearchInput = true;
  uiSelectConfig.appendToBody = true;
});
