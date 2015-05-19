'use strict';

angular.module('recruitr')
.controller('ProfilesListCtrl', function($scope, $rootScope, Profile, $state, $window){
  $scope.page = 1;

  $scope.moveBack = false;
  $scope.moveForward = false;

  function showPage(page){
    Profile.find(page)
    .then(function(response){
      console.log(response);
      $scope.students = response.data.profiles;
      $scope.moveForward = $scope.students.length >= 10 ? true : false;
      $scope.moveBack = $scope.page > 1 ? true : false;
    });
  }

  showPage($scope.page);

  $scope.changePage = function(change){
    if(change === 'next' && $scope.students.length === 10){
      $scope.page += 1;
      $scope.moveBack = true;
    } else if(change === 'prev' && $scope.page !== 1){
      $scope.page -= 1;
      $scope.moveForward = true;
    }
    showPage($scope.page);
  };
  $scope.editStudent = function(student){
    console.log(student);
    $state.go('profiles.edit', {studentId: student});
  };
  $scope.deleteStudent = function(student){
    Profile.destroy(student)
    .then(function(response){
      $window._.remove($scope.searchResults, function(profile){
        return profile._id === response.data._id;
      });
    });
  };
  $scope.sortByName = function(name){
    Profile.sortByName(name);
  };
  $scope.sortBySkills = function(skill){
    Profile.sortsortBySkills(skill);
  };
  $scope.profileGo = function(index){
    console.log('inside profile list js - index', index);
    $state.go('profiles.show', {studentId: index});
  };
});
