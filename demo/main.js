// var app = angular.module("app", ["ngRoute", "ui.bootstrap"]);

// app.config(function ($routeProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: 'home.html'
//       controller: "HomeCtrl"
//     })
//     .when('/login', {
//       templateUrl: 'login.html',
//       controller: "LoginCtrl"
//     })
//     .otherwise('/home')
// });

// app.controller("LoginCtrl", function($scope) {
//   $scope.message = "It works!";
// });




var app = angular.module("app", ["ngRoute", 'ui.bootstrap']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: "HomeCtrl"

    })
    .when('/login', {
      templateUrl: 'views/entity.html',
      controller: "LoginCtrl"
    })
    .otherwise('/home')
});

app.controller("LoginCtrl", function($scope) {
  $scope.message = "It works!";
});


app.controller('HomeCtrl', function ($scope) {
  
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

});