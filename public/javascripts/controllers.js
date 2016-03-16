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
    $scope.word.img = '';

	}

})
.controller('playCtrl', function($scope, WordService){

  WordService.getWords();

  $scope.$watch(function() {
    return WordService.words;
  }, function(newVal, oldVal) {
    $scope.words = newVal;
    console.log('words', $scope.words);
    $scope.word = $scope.words[index];
  })

  var index = 0;

  $scope.next = function() {
    index++;
    if(index == $scope.words.length){
      index = 0;
      $scope.word = $scope.words[index]
    } else {
      $scope.word = $scope.words[index];
    }
  }

  $scope.previous = function() {
    if(index === 0){
      $scope.word = $scope.words[index]
      return;
    } else {
      index--;
    $scope.word = $scope.words[index];
    }
  }

}).controller('practiceCtrl', function($scope, WordService){

  WordService.getWords();

  $scope.$watch(function() {
    return WordService.words;
  }, function(newVal, oldVal) {
    $scope.words = newVal;
    console.log('words', $scope.words);
    $scope.word = $scope.words[index];
  })

  var index = 0;

  $scope.next = function() {
    index++;
    if(index == $scope.words.length){
      index = 0;
      $scope.word = $scope.words[index]
    } else {
      $scope.word = $scope.words[index];
    }
  }

  $scope.previous = function() {
    if(index === 0){
      $scope.word = $scope.words[index]
      return;
    } else {
      index--;
    $scope.word = $scope.words[index];
    }
  }

})
