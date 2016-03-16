"use strict";

var app = angular.module('lApp');

app.controller('homeCtrl', function($scope) {

  })
  .controller('addCtrl', function($scope, WordService) {
    $scope.addWord = function() {
      var temp = angular.copy($scope.word);
      WordService.addWord(temp);
      $scope.word.english = '';
      $scope.word.german = '';
      $scope.word.spanish = '';
      $scope.word.img = '';

    }

  })
  .controller('playCtrl', function($scope, WordService) {

    WordService.getWords();

    $scope.$watch(function() {
      return WordService.words;
    }, function(newVal, oldVal) {
      $scope.words = newVal;
      shuffle($scope.words);
      $scope.word = $scope.words[index];
    })

    var index = 0;

    $scope.next = function() {
      index++;
      if (index == $scope.words.length) {
        index = 0;
        $scope.word = $scope.words[index]
      } else {
        $scope.word = $scope.words[index];
      }
    }

    $scope.previous = function() {
      if (index === 0) {
        $scope.word = $scope.words[index]
        return;
      } else {
        index--;
        $scope.word = $scope.words[index];
      }
    }

    $scope.checkWordGerman = function() {
      var testWord = $scope.words[index].german;
      var word = $scope.word.germanTest;
      if (word.toLowerCase() !== testWord.toLowerCase()) {
        return $scope.playForm.germanTest.$error.noMatch = true;
      } else {
        return $scope.playForm.germanTest.$error.noMatch = false;
      }
    }

    $scope.checkWordSpanish = function() {
      var testWord = $scope.words[index].spanish;
      var word = $scope.word.spanishTest;
      if (word.toLowerCase() !== testWord.toLowerCase()) {
        return $scope.playForm.spanishTest.$error.noMatch = true;
      } else {
        return $scope.playForm.spanishTest.$error.noMatch = false;
      }
    }

  })
  .controller('practiceCtrl', function($scope, WordService) {

    WordService.getWords();

    $scope.$watch(function() {
      return WordService.words;
    }, function(newVal, oldVal) {
      $scope.words = newVal;
      shuffle($scope.words);
      $scope.word = $scope.words[index];
    })

    var index = 0;

    $scope.next = function() {
      index++;
      if (index == $scope.words.length) {
        index = 0;
        $scope.word = $scope.words[index]
      } else {
        $scope.word = $scope.words[index];
      }
    }

    $scope.previous = function() {
      if (index === 0) {
        $scope.word = $scope.words[index]
        return;
      } else {
        index--;
        $scope.word = $scope.words[index];
      }
    }

  })

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}
