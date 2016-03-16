"use strict";


var app = angular.module('lApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: "views/home.html",
			controller: 'homeCtrl'
		})
		.state('add', {
			url: '/add',
			templateUrl: "views/add.html",
			controller: 'addCtrl'
		})
		.state('play', {
			url: '/play',
			templateUrl: "views/play.html",
			controller: 'playCtrl'
		}).state('practice', {
			url: '/practice',
			templateUrl: "views/practice.html",
			controller: 'practiceCtrl'
		})
	})