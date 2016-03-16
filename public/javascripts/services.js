"use strict";

var app = angular.module('lApp');

app.service('WordService', function($http){
	this.words = [];


	// this.getWords




	this.addWord = (word) => {
		$http.post('/cards', word)
		.then(res => {
			this.words.push(word);
		}, err => {
			console.error('Addword Error!!!', err);
		});
	}
})


