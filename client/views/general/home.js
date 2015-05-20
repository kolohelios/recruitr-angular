'use strict';

angular.module('recruitr')
.controller('HomeCtrl', function(){

  var tempPassword = generatePassword();
  console.log(tempPassword);

  function generatePassword(){
    var password = [];
    for(var i = 0; i < 8; i++){
      var char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      if(i%2){
        char = char.toUpperCase();
      }
      password.push(char);
    }
    password = password.join('');
    return password;
  }

});
