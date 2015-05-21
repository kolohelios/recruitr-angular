'use strict';

angular.module('recruitr')
.controller('ProfilesShowCtrl', function($scope, $rootScope, Profile, $state){

  $scope.isNext = true;
  $scope.isPrev = false;
  var next;
  var prev;

  Profile.findStudent($state.params.studentId)
  .then(function(response){
    console.log(response);
    $scope.student = response.data.profile;
    next = response.data.next;
    prev = response.data.prev;
    next ? $scope.isNext = true : $scope.isNext = false;
    prev ? $scope.isPrev = true : $scope.isPrev = false;
  });

  $scope.prev = function(){
    if(!prev){ return; }
    $state.go('profiles.show', {studentId: prev});

  };

  $scope.next = function(){
    if(!next){ return; }
    $state.go('profiles.show', {studentId: next});

  };

  $scope.editStudent = function(student){
    $state.go('profiles.edit', {studentId: student});
  };
  $scope.deleteStudent = function(student){
    Profile.destroy(student)
    .then(function(){
      $state.go('profiles.list');
    });
  };
});
