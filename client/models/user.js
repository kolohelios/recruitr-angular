'use strict';

angular.module('recruitr')
.factory('User', function($http, nodeUrl){
  function User(){
  }
  // not sure if this next block is needed
  User.initialize = function(){
    return $http.post(nodeUrl + '/users');
  };
  User.login = function(loginInfo){
    return $http.post(nodeUrl + '/users/authenticate', loginInfo);
  };
  User.save = function(user){
    return $http.post(nodeUrl + '/users', user);
  };
  User.edit = function(user, userId){
    console.log('userid:', userId);
    console.log('user', user);
    return $http.put(nodeUrl + '/users/' + userId, user);
  };
  User.find = function(){
    return $http.get(nodeUrl + '/users');
  };
  User.findOne = function(userId){
    return $http.get(nodeUrl + '/users/' + userId);
  };
  User.deleteUser = function(user){
    return $http.delete(nodeUrl + '/users/' + user._id);
  };
  return User;
});
