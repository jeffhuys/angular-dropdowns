'use strict';

var app = angular.module('app', ['ngDropdowns']);

app.controller('AppCtrl', function($scope) {
  $scope.ddSelectOptions = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      value: 'one',
      iconCls: 'someicon'
    }, {
      text: 'Option2',
      someprop: 'somevalue'
    }, {
      divider: true
    }, {
      text: 'Option4',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddSelectSelected = {
    text: "Select an Option"
  };

  $scope.ddSelectOptions2 = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      value: 'one',
      iconCls: 'someicon'
    }, {
      text: 'Option2',
      someprop: 'somevalue'
    }, {
      divider: true
    }, {
      text: 'Option4',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddSelectSelected2 = {
    text: "Select an Option"
  };

  $scope.ddMenuOptions = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      iconCls: 'someicon'
    }, {
      text: 'Option2'
    }, {
      divider: true
    }, {
      text: 'A link',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMenuSelected = {};
  $scope.ddMenuOptions2 = [
    {
      name: 'Option2-1 Name',
      iconCls: 'someicon'
    }, {
      name: 'Option2-2 Name'
    }, {
      divider: true
    }, {
      name: 'A link',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMenuSelected2 = {};
  $scope.ddMenuOptions3 = [
    {
      text: 'Option3-1',
      iconCls: 'someicon'
    }, {
      text: 'Option3-2'
    }, {
      divider: true
    }, {
      text: 'A link',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMenuSelected3 = {};

  $scope.ddMenuOptions4 = [
    {
      text: 'Option4-1'
    }, {
      text: 'Option4-2'
    }, {
      text: 'Option4-3'
    }, {
      text: 'Option4-4'
    }
  ];

  $scope.ddMenuSelected4 = {};
});
