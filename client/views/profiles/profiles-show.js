'use strict';

angular.module('recruitr')
.controller('ProfilesShowCtrl', function($scope, $rootScope, Profile, $state){
  // var sId = 'a00000000000000000000001';
  $scope.studentIndex = $state.params.studentId * 1;
  $scope.students = $rootScope.students;
  console.log('length of students array is ', $rootScope.students.length);
  function initialize(){
    $scope.student = $rootScope.students[$scope.studentIndex];
  }
  initialize();

  $scope.prev = function(){
    var prevIndex = $scope.studentIndex - 1;
    if(prevIndex >= 0){
      $scope.studentIndex -= 1;
      $scope.student = $scope.students[$scope.studentIndex];
      console.log('current index', $scope.studentIndex);
    }
  };

  $scope.next = function(){
    var nextIndex = $scope.studentIndex + 1;
    if(nextIndex < $scope.students.length){
      $scope.studentIndex += 1;
      $scope.student = $scope.students[$scope.studentIndex];
      console.log('current index', $scope.studentIndex, ' of ', $scope.students.length);
    }
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
