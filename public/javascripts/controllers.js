"use strict";

var app = angular.module('lApp');

app.controller('homeCtrl', function($scope){

	// console.log('home');

})
.controller('addCtrl', function($scope, WordService){
	$scope.addWord = function(){
		var temp = angular.copy($scope.word);
		WordService.addWord(temp);
		$scope.word.english = '';
		$scope.word.german = '';
		$scope.word.spanish = '';
		
	}

})
.controller('playCtrl', function($scope){

	// console.log('play');


})

