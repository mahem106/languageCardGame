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
.controller('playCtrl', function($scope, WordService){

  WordService.getWords();

  $scope.$watch(function() {
    return WordService.words;
  }, function(newVal, oldVal) {
    $scope.words = newVal;
    console.log('words', $scope.words);
    $scope.word = $scope.words[0];
  })

  $scope.next = function() {
    $scope.word = $scope.words[]
  }

})
