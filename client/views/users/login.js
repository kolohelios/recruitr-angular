'use strict';

angular.module('recruitr')
.controller('LoginCtrl', function($scope, $state, $window, User, $http, $rootScope){
  $scope.name = $state.current.name;

  $scope.submit = function(user){
    User.login(user)
    .then(function(result){
      $http.defaults.headers.common.Authorization = 'Bearer ' + result.data.token;
      $rootScope.activeUser = result.data.user;
      $state.go('profiles.list');
    })
    .catch(function(){
      $window.swal({title: 'Login Error', text: 'There was a problem with your login. Please try again.', type: 'error'});
    });
  };
});
