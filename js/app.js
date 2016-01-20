'use strict';

var moravitaliApp = angular.module('moravitaliApp', ['ui.router', 'ui.bootstrap']);
moravitaliApp.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});
moravitaliApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider


        .state('main', {
            url: '/main',
            controller: 'main',
            templateUrl: 'views/main.html'
        })
        .state('portfolio', {
            controller: 'portfolio',
            url: '/portfolio',
            templateUrl: 'views/portfolio.html'
        })
        .state('lovestory', {
            url: '/lovestory',
            parent:'portfolio',
            templateUrl: 'views/lovestory.html'
        })
        .state('bio', {
            url: '/bio',
            templateUrl: 'views/bio.html'
        })
        .state('cv', {
            url: '/cv',
            templateUrl: 'views/cv.html'
        })
        .state('contacto', {
            url: '/contacto',
            controller: 'contacto',
            templateUrl: 'views/contacto.html'
        });
});
