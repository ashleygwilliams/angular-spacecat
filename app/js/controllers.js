'use strict';

var spacecatApp = angular.module('spacecatApp', []);

spacecatApp.controller('CatListCtrl', function($scope){
  $scope.cats = [
    { 'name': 'bigbelly',
      'bio': 'Emerged into consciousness how far away shores of the cosmic ocean Cambrian explosion',
      'color': 'white',
      'personality': 'relaxed'},
    { 'name': 'keyboard',
      'bio': 'decipherment from which we spring tendrils of gossamer clouds quasar ship of the imagination rings of Uranus',
      'color': 'grey',
      'personality': 'nervous'},
    { 'name': 'laser',
      'bio': 'stirred by starlight, gathered by gravity worldlets Jean-François Champollion at the edge of forever billions',
      'color': 'grey',
      'personality': 'aggresive'},
    { 'name': 'lounge',
      'bio': 'Flatland not a sunrise but a galaxyrise emerged into consciousness a mote of dust suspended in a sunbeam globular star cluster',
      'color': 'grey',
      'personality': 'relaxed'},
    { 'name': 'ohno',
      'bio': 'Euclid preserve and cherish that pale blue dot Jean-François Champollion network of wormholes',
      'color': 'orange',
      'personality': 'nervous'},
    { 'name': 'yucky',
      'bio': "The only home we've ever known dream of the mind's eye, prime number.",
      'color': 'brown',
      'personality': 'relaxed'}
  ];
});