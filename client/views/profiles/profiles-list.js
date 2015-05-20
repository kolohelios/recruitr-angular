'use strict';

angular.module('recruitr')
.controller('ProfilesListCtrl', function($scope, $rootScope, Profile, $state, $window, skillsList){
  $scope.page = 1;
  $scope.skills = skillsList;

  $scope.moveBack = false;
  $scope.moveForward = false;

  function showList(page){
    Profile.find(page)
    .then(function(response){
      $scope.students = response.data.profiles;
      $scope.moveForward = $scope.students.length >= 10 ? true : false;
      $scope.moveBack = $scope.page > 1 ? true : false;
    });
  }

  showList($scope.page);

  $scope.changePage = function(change){
    if(change === 'next' && $scope.students.length === 10){
      $scope.page += 1;
      $scope.moveBack = true;
    } else if(change === 'prev' && $scope.page !== 1){
      $scope.page -= 1;
      $scope.moveForward = true;
    }
    showList($scope.page);
  };
  $scope.editStudent = function(student){
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
  $scope.sortBy = function(){
    Profile.sortBy($scope.searchSkills)
    .then(function(response){
      $scope.students = response.data.profiles;
    });
  };

  $scope.profileGo = function(student){
    $state.go('profiles.show', {studentId: student._id});
  };
});
