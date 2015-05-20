'use strict';

angular.module('recruitr')
.controller('HomeCtrl', function($scope, User, $state, $http, $rootScope, $window){

  $scope.selfRegistration = function(email){
    var user = {};
    user.email = email;
    user.password = generatePassword();
    User.save(user)
    .then(function(){
      User.login(user)
      .then(function(result){
        $http.defaults.headers.common.Authorization = 'Bearer ' + result.data.token;
        $rootScope.activeUser = result.data.user;
        $state.go('profiles.list');
      });
    })
    .catch(function(){
      $window.swal({title: 'Registration Error', text: 'You already have an account. Please login instead.', type: 'error'});
    });
  };

  function generatePassword(){
    var password = [];
    for(var i = 0; i < 8; i++){
      var char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      if(i%2){
        char = char.toUpperCase();
      }
      password.push(char);
    }
    password = password.join('');
    return password;
  }

});
