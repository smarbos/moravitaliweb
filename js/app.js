'use strict';

var moravitaliApp = angular.module('moravitaliApp', ['ui.router', 'ui.bootstrap']);
console.log("hola");

moravitaliApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider


        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('mision', {
            url: '/mision',
            templateUrl: 'views/mision.html'
        })
        .state('rescatados', {
            url: '/rescatados',
            templateUrl: 'views/rescatados.html'
        })
        .state('historias', {
            url: '/historias',
            templateUrl: 'views/historias.html'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'views/shop.html'
        })
        .state('contacto', {
            url: '/contacto',
            templateUrl: 'views/contacto.html'
        })
        .state('donaciones', {
            url: '/donaciones',
            templateUrl: 'views/donaciones.html'
        });

        $urlRouterProvider.otherwise('/home');

});
