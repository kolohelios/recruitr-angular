'use strict';

angular.module('recruitr')
.controller('UsersNewCtrl', function($scope, User, $state, $window){
  console.log('in UsersNewCtrl');
  $scope.isEdit = false;

  function checkState(){
    if($state.params.userId){
      $scope.isEdit = true;
      User.findOne($state.params.userId)
      .then(function(response){
        $scope.user = response.data;
      });
    }
  }

  checkState();

  $scope.edit = function(obj){
    console.log('before copy', obj._id);
    var o = angular.copy(obj);
    console.log('copy ID', o._id);
    delete o.__v;
    delete o.$$hashkey;
    delete o.createdAt;
    delete o.password2;
    o.password = o.password1;
    delete o.password1;
    delete o._id;
    User.edit(o, obj._id)
    .then(function(){
      $state.go('users.list');
    });
  };
  $scope.create = function(obj){
    if($scope.user.password1 === $scope.user.password2){
      obj.password = $scope.user.password1;
      delete obj.password1;
      delete obj.password2;
      obj.role = parseInt(obj.role, 10);
      User.save(obj)
      .then(function(){
        $state.go('users.list');
      });
    }else{
      $window.swal({title: 'Password Error', text: 'Passwords do not match. Please try again.', type: 'error'});
    }
  };
});
