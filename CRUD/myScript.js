var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function ($scope, $http, $routeParams) {
    $http.get("https://jsonplaceholder.typicode.com/users").success(function (data, status, headers, config) {
        $scope.users = data;
        $scope.deleteUser = function (index) {
            $scope.users.splice(index, 1);
        };
        // $scope.selected=$routeParams.uID;
    });

});
// myApp.config(function ($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: 'index.html',
//             controller: 'myCtrl'
//         })
//         .when('/details/:uID', {
//             templateUrl: 'detailsUser.html',
//             controller:'myCtrl'
//         })
//         .otherwise({
//             redirectTo:'/'
//         })
// });