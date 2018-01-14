/**
 * StudentService - singleton object 
 * services are used to make server side calls.
 * Http Request to middleware, 
 * Http Response from middleware
 * app -angular js module
 * app - add studentservice
 * 1st parameter - name of the service
 * 2nd parameter  - function definition
 */
app.factory('StudentService',function($http){
	var studentService={} //initialize
	
	studentService.getAllStudents=function(){
		return $http.get("http://localhost:8080/demo_middleware/getallstudents")
	}
	
	studentService.addStudent=function(student){
		return $http.post("http://localhost:8080/demo_middleware/addstudent", student)
	}
	return studentService;
})