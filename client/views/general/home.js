//'use strict';

angular.module('recruitr')
.controller('HomeCtrl', function(){


  function generatePassword(){
    var password = [];
    for(var i = 0; i < 8; i++){
      var char = Math.floor(Math.random() * 26) + 97;
      console.log(char);
    }
  }

});
