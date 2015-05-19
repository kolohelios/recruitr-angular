'use strict';

angular.module('recruitr')
.controller('ProfilesListCtrl', function($scope, $rootScope, Profile, $state, $window){
  Profile.find(1)
  .then(function(response){
    $scope.students = response.data.profiles;
    if($scope.students.length === 10){
      $scope.moveForward = true;
    }
  });
  $scope.page = 1;

  $scope.moveBack = false;
  $scope.moveForward = false;

  $scope.changePage = function(change){
    if(change === 'next' && $scope.users.length === 10){
      $scope.page += 1;
      $scope.moveBack = true;
    } else if(change === 'prev' && $scope.page !== 1){
      $scope.page -= 1;
      $scope.moveForward = true;
    }
    Profile.find($scope.page)
    .then(function(response){
      $scope.users = response.data.profile;
    });
    if($scope.page === 1){
      $scope.moveBack = false;
    } else if($scope.users.length < 10){
      $scope.moveForward = false;
    }
  };

  Profile.find()
  .then(function(response){
    $scope.students = response.data.profiles;
    $rootScope.searchResults = response.data.profiles;
    if($scope.students.length === 10){
      $scope.moveForward = true;
    }
  });

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
