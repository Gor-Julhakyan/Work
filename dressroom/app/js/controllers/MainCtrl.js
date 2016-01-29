app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.stageOne = true;
	$scope.enterFemale = false;
	$scope.enterMale = false;

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
	         $scope.models[0].action = true;
	         break;
	      case "female":
	         $scope.stageOne = false;
	         $scope.models[1].action = true;
	         break;
	      default:
   		}
	};

	$scope.models = [
		{
			action: false,
			class: "male-enter",
			items: [
				{ model: "assets/img/models/boy_1.png" },
				{ model: "assets/img/models/boy_2.png" },
				{ model: "assets/img/models/boy_3.png" }
			]
		},
		{
			action: false,
			class: "female-enter",
			items: [
				{ model: "assets/img/models/girl_1.png" },
				{ model: "assets/img/models/girl_2.png" },
				{ model: "assets/img/models/girl_3.png" }
			]
		}
	];
	
	$scope.activeModel = "";

	$scope.isActive = function (src) {
		$scope.activeModel = src;
		console.log($scope.activeModel);
	}
	
}]);