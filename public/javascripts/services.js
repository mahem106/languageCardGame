"use strict";

var app = angular.module('lApp');

app.service('WordService', function($http){
	this.words = [];


	this.getWords = () => {
    $http.get('/cards')
    .then(res => {
      this.words = res.data;
      console.log(res.data);
      console.log(this.words);
    }, err => {
      console.error('GetWord error: ', err);
    })
  }




	this.addWord = (word) => {
		$http.post('/cards', word)
		.then(res => {
			this.words.push(word);
		}, err => {
			console.error('Addword Error!!!', err);
		});
	}
})
