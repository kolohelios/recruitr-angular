'use strict';

angular.module('recruitr')
.controller('UsersNewCtrl', function($scope, User){
  console.log('in UsersNewCtrl');

  $scope.create = function(obj){
  	var user = new User(obj);
	user.save(obj)
    .then(function(){
      $state.go('users.list');
    });
  };

});
