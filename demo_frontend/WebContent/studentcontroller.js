/**
 * StudentController
 */
app.controller('StudentController',function(StudentService,$scope,$location){
	StudentService.getAllStudents().then(function(response){
		//The result of the query "select * from student"
		$scope.students=response.data //Array of Students in JSON format
		console.log('The response.status is ' + response.status)
		console.log('resposne.data is ' + response.data)
	},function(response){
		console.log('For ERROR: The response.status is '+ response.status)
	})
	
	$scope.addStudent=function(){
		StudentService.addStudent($scope.student).then(function(response){
			alert('Student details added')
			$location.path('/students')
			$scope.student={}
			},
			function(response) {
				console.log(response.data)
				console.log(response.staus)
			})
		}
	
})
