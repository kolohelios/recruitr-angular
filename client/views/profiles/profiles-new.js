'use strict';

angular.module('recruitr')
.controller('ProfilesNewCtrl', function($scope, Profile, $state, msaList){
  $scope.msa = msaList;
  $scope.student = {};
  $scope.student.locationPref = [];
  console.log($state.params.studentId);
  if($state.params.studentId){
    Profile.findStudent($state.params.studentId)
    .then(function(result){
      $scope.student = result.data;
    });
  }

  $scope.addPreferredLocation = function(newPreferredLocation){
    console.log(newPreferredLocation);
    $scope.student.locationPref.push(newPreferredLocation);
  };

  $scope.create = function(){
    // console.log('loc', $scope.student.preferedLocation1);
    $scope.student.available = $scope.student.available ? $scope.student.available : false;
    $scope.student.relocate = $scope.student.relocate ? $scope.student.relocate : false;
    $scope.student.remote = $scope.student.remote ? $scope.student.remote : false;
    $scope.student.skills = $scope.student.skills.split(',');
    $scope.student.interests = $scope.student.interests.split(',');
    Profile.save($scope.student)
    .then(function(){
      $state.go('profiles.list');
    });
  };
});
