'use strict';

angular.module('recruitr')
.controller('ProfilesShowCtrl', function($scope, $rootScope, Profile, $state){

  var sId = 'a00000000000000000000001';
  $scope.studentIndex = $state.params.studentId * 1;
  $scope.students  = $rootScope.searchResults;
  console.log('length of students array is ', $scope.students.length);
  initialize();
  function initialize(){
    $scope.student = $scope.students[$scope.studentIndex];
  }


  $scope.prev =function(){
    var prevIndex = $scope.studentIndex - 1;
    if(prevIndex >= 0){
      $scope.studentIndex -= 1
      $scope.student = $scope.students[$scope.studentIndex];
      console.log('current index', $scope.studentIndex);
    }
  }

  $scope.next =function(){
    var nextIndex = $scope.studentIndex + 1;
    if(nextIndex < $scope.students.length){
      $scope.studentIndex += 1
      $scope.student = $scope.students[$scope.studentIndex];
      console.log('current index', $scope.studentIndex,' of ', $scope.students.length);
    }
  }

  $scope.editStudent = function(student){
    Profile.editStudent(student)
    .then(function(response){
      // $scope.students = response.data.profile;
    });
  };
  $scope.deleteStudent = function(student){
    Profile.deleteStudent(student)
    .then(function(response){
      // $scope.students = response.data.profile;
    });
  };
});
