/**
 * Angular JS module
 */
var app=angular.module("app",['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/blogs',{templateUrl:'views/blogs.html',controller:'BlogController'})
	.when('/students',{templateUrl:'views/students.html',controller:'StudentController'})
	.when('/departments',{templateUrl:'views/departments.html',controller:'DepartmentController'})
	.when('/addstudent',{templateUrl:'views/studentform.html',controller:'StudentController'})
	.otherwise({templateUrl:'views/home.html'})
	
})
