
app.controller('ContactCtrl', function ($http,$scope, $rootScope,LoginService)
{
	console.log("In ContactCtrl controller ");
	
	$rootScope.currentUser = LoginService.chkLogin(function(){
		 console.log($rootScope.currentUser);
	});
	

    $scope.go = function ( path ) {
    	  $location.path( path );
    	};
  
    
});