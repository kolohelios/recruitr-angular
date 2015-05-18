'use strict';

angular.module('recruitr')
.controller('ProfilesShowCtrl', function($scope, $rootScope, Profile, $state){
  console.log('in ProfilesShowCtrl');
  var studentId = $state.params.studentId;
  Profile.findStudent(studentId)
  .then(function(response){
    $scope.student = response.data;
  });

  $scope.editStudent = function(student){
    Profile.editStudent(student)
    .then(function(response){
      $scope.students = response.data.profile;
    });
  };
  $scope.deleteStudent = function(student){
    Profile.deleteStudent(student)
    .then(function(response){
      $scope.students = response.data.profile;
    });
  };
});
