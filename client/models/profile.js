'use strict';

angular.module('recruitr')
.factory('Profile', function($rootScope, $http, nodeUrl){
  function Profile(){
  }
  Profile.find = function(page){
    console.log(page);
    return $http.get(nodeUrl + '/profiles?page=' + page);
  };
  Profile.save = function(student){
    return $http.post(nodeUrl + '/profiles', student);
  };
  Profile.editStudent = function(id, student){
    return $http.put(nodeUrl + '/profiles/' + id, student);
  };
  Profile.findStudent = function(studentId){
    return $http.get(nodeUrl + '/profiles/' + studentId);
  };
  Profile.destroy = function(studentId){
    return $http.delete(nodeUrl + '/profiles/' + studentId);
  };

  Profile.sortBy = function(skill){
    return $http.get(nodeUrl + '/profiles?skill=' + skill);
  };

  return Profile;
});
