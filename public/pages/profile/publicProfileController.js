app.controller('PublicProfileCtrl', function ($http, $scope, $rootScope,LoginService,$routeParams){
console.log("In PublicProfileCtrl ");
//console.log($rootScope.currentUser);
$scope.selectedTab = 1;


var username = $routeParams.username
console.log(username);
  
 
$http.get('/rest/publicProfile/' + username)
.success(function (response) {
	console.log('getting Profile Details');

	//$scope.publicProf = response;
	$scope.user = response;
	console.log($scope.user);  
	
	 if(response.role == "both"){
 		$scope.receiver = true;
 		$scope.amount = response.need.amount;
 		 
 		console.log(response.need.amountReceived);
 		
 		if(response.need.receivedAmount == 0){
 			$scope.receivedAmount = "0"
 		}
 		else
		{
		$scope.receivedAmount =	response.need.amountReceived;
		}
 }
	
 });
	 
   


/*
$rootScope.currentUser = LoginService.chkLogin(function(){
	 console.log($rootScope.currentUser);
});

ProfileService.profileDetails(id,function(response){
	
	console.log(response);

 if(response.role == "both"){
		$scope.receiver = true;
		$scope.amount = response.need.amount;
		 
		console.log(response.need.amountReceived);
		
		if(response.need.receivedAmount == 0){
			$scope.receivedAmount = "0"
		}
		else
		{
			$scope.receivedAmount =	response.need.amountReceived;
		}
}
 $scope.user = response;

});
*/ 

     
});