'use strict';

angular.module('recruitr')
.controller('ProfilesNewCtrl', function($scope, Profile, $state, msaList){
  $scope.msa = msaList.map(function(msaItem){
    var msaObj = {};
    msaObj.id = msaObj.name = msaItem;
    return msaObj;
  });
  $scope.student = {};
  $scope.student.locationPref = [];
  $scope.student.interests = [];
  if($state.params.studentId){
    Profile.findStudent($state.params.studentId)
    .then(function(result){
      $scope.student = result.data;
    });
  }

  $scope.addPreferredLocation = function(newPreferredLocation){
    $scope.msa.selected = '';
    $scope.student.locationPref.push(newPreferredLocation);
  };


  $scope.removePreferredLocation = function(removeIndex){
    $scope.student.locationPref.splice(removeIndex, 1);
  };

  $scope.addInterest = function(interest){
    $scope.student.interests.push(interest);
    $scope.interest = '';
  };

  $scope.removeInterest = function(removeIndex){
    $scope.student.interests.splice(removeIndex, 1);
  };

  $scope.create = function(){
    $scope.student.available = $scope.student.available ? $scope.student.available : false;
    $scope.student.relocate = $scope.student.relocate ? $scope.student.relocate : false;
    $scope.student.remote = $scope.student.remote ? $scope.student.remote : false;
    $scope.student.skills = $scope.student.skills.split(',');
    // $scope.student.interests = $scope.student.interests.split(',');
    Profile.save($scope.student)
    .then(function(){
      $state.go('profiles.list');
    });
  };
});
