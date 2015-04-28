app.controller('ProfileCtrl', function ($http, $scope, $location,$rootScope,LoginService,ProfileService)
{
	console.log("In ProfileCtrl ");
	$scope.selectedTab = 1;
	console.log($rootScope.currentUser);
	
	
	 var id = $rootScope.currentUser._id;
	
	
	console.log(id);
	

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
	 
 
	
	
    $scope.editProfile = function (){
    	
    	 $location.path("/settings");
    }
});