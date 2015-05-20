'use strict';

angular.module('recruitr')
.controller('ProfilesNewCtrl', function($scope, Profile, $state, msaList, skillsList){
  $scope.msa = msaList.map(function(msaItem){
    var msaObj = {};
    msaObj.id = msaObj.name = msaItem;
    return msaObj;
  });
  $scope.skillList = skillsList.map(function(skillItem){
    var skillObj = {};
    skillObj.id = skillObj.name = skillItem;
    return skillObj;
  });
  $scope.student = {};
  $scope.student.locationPref = [];
  $scope.student.interests = [];
  $scope.student.skills = [];
  $scope.student.exposure = [];
  if($state.params.studentId){
    Profile.findStudent($state.params.studentId)
    .then(function(result){
      $scope.student = result.data.profile;
      $scope.editMode = true;
    });
  }

  $scope.addPreferredLocation = function(newPreferredLocation){
    $scope.student.locationPref.push(newPreferredLocation);
    $scope.msa.selected = '';
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

  $scope.addSkill = function(skill){
    $scope.student.skills.push(skill);
    $scope.skillList.selected = '';
  };

  $scope.removeSkill = function(removeIndex){
    $scope.student.skills.splice(removeIndex, 1);
  };

  $scope.addExposure = function(exposure){
    $scope.student.exposure.push(exposure);
    $scope.skill = '';
  };

  $scope.removeExposure = function(removeIndex){
    $scope.student.exposure.splice(removeIndex, 1);
  };

  $scope.create = function(){
    $scope.student.available = $scope.student.available ? $scope.student.available : false;
    $scope.student.relocate = $scope.student.relocate ? $scope.student.relocate : false;
    $scope.student.remote = $scope.student.remote ? $scope.student.remote : false;
    Profile.save($scope.student)
    .then(function(){
      $state.go('profiles.list');
    });
  };

  $scope.save = function(student){
    var obj = angular.copy(student);
    delete obj._id;
    delete obj.__v;
    delete obj.createdAt;
    var id = student._id;
    console.log(obj);
    Profile.editStudent(id, obj)
    .then(function(){
      $state.go('profiles.list');
    });
  };
});
