app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.stageOne = true;

	$scope.genders = [
		{
			icon: "fa fa-mars",
			title: "male",
			titleShow: false,
			stageAction: "male"
		},
		{
			icon: "fa fa-venus",
			title: "female",
			titleShow: false,
			stageAction: "female"
		}
	];

	$scope.stages = function (stage) {
		$scope.stageOne = false;
		switch(stage) {
	      case "male":
	         $scope.stageOne = false;
	         break;
	      case "female":
	         $scope.stageOne = false;
	         break;
	      default:
	         console.log('There should not be a default failover at this thing.');
   }
	}



}]);