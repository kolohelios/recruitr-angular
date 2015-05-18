'use strict';

angular.module('recruitr')
.controller('ProfilesNewCtrl', function($scope, Profile, $state, msaList){
  $scope.msa = msaList;
  var forHire;
  var remote;
  var relocate;

  $scope.create = function(){
    console.log('loc', $scope.student.preferedLocation1);
    if($scope.student.forHire === undefined){
      forHire = false;
    }else{
      forHire = true;
    }
    if($scope.student.remoteWorking === undefined){
      remote = false;
    }else{
      remote = true;
    }
    if($scope.student.relocation === undefined){
      relocate = false;
    }else{
      relocate = true;
    }
    var skills = $scope.student.skills.split(', ');
    console.log('skills', skills);
    var student = {
        firstName: $scope.student.firstName,
        lastName: $scope.student.lastName,
        photo: $scope.student.photo,
        skills: skills,
        exposure: $scope.student.exposure,
        bio: $scope.student.blurb,
        location: $scope.student.location,
        interests: [
          $scope.student.interests.interest1,
          $scope.student.interests.interest2,
          $scope.student.interests.interest3,
          $scope.student.interests.interest4,
          $scope.student.interests.interest5
        ],
        locationPref: [
          $scope.student.preferedLocation.preferedLocation1,
          $scope.student.preferedLocation.preferedLocation2,
          $scope.student.preferedLocation.preferedLocation3
        ],
        remote: remote,
        relocate: relocate,
        available: forHire,
        education: $scope.student.education,
        contact: {
          email: $scope.student.email,
          phone: $scope.student.phone,
          website: $scope.student.website
        },
        social: {
          github: $scope.student.github,
          twitter: $scope.student.twitter,
          linkedIn: $scope.student.linkedin,
          stackoverflow: $scope.student.stackoverflow
        }
      };
    console.log(student);
    console.log('$scope.student', $scope.student);
    Profile.save(student)
    .then(function(){
      $state.go('profiles.list');
    });
  };
  console.log('in ProfilesNewCtrl');
});
