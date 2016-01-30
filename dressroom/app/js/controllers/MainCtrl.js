app.controller('MainCtrl', ['$scope', function($scope) {
	$scope.stageOne = false;
	$scope.enterFemale = false;
	$scope.enterMale = false;
	$scope.clothesFilter = "";
	$scope.dressRoomActive = false;

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
console.log($scope.dressRoomActive);
	$scope.stages = function (stage) {
		$scope.stageOne = false;
		switch(stage) {
	      case "male":
	         $scope.stageOne = false;
	         $scope.models[0].action = true;
	         $scope.clothesFilter = "male";
	         break;
	      case "female":
	         $scope.stageOne = false;
	         $scope.models[1].action = true;
	         $scope.clothesFilter = "female";
	         break;
	      default:
   		}
	};

	$scope.models = [
		{
			action: true,
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
	
	$scope.clothes = [
		{
			category: "t-shirt",
			items: [
				{ img:"assets/img/clothes/tshirts/tshirt_1.png", filter: "male" },
				{ img:"assets/img/clothes/tshirts/tshirt_2.png", filter: "male" },
				{ img:"assets/img/clothes/tshirts/tshirt_3.png", filter: "female" },
				{ img:"assets/img/clothes/tshirts/tshirt_4.png", filter: "male" },
				{ img:"assets/img/clothes/tshirts/tshirt_5.png", filter: "male" },
				{ img:"assets/img/clothes/tshirts/tshirt_6.png", filter: "male" },
				{ img:"assets/img/clothes/tshirts/tshirt_7.png", filter: "male" },
				{ img:"assets/img/clothes/tshirts/tshirt_8.png", filter: "male" },
				{ img:"assets/img/clothes/tshirts/tshirt_9.png", filter: "female" },
				{ img:"assets/img/clothes/tshirts/tshirt_10.png", filter: "female" },
				{ img:"assets/img/clothes/tshirts/tshirt_11.png", filter: "female" }				
			]
		},	
		{
			category: "trousers",
			items: [
				{ img: "assets/img/clothes/jeans/jeans_1.png", filter: "male" },
				{ img: "assets/img/clothes/jeans/jeans_2.png", filter: "male" },
				{ img: "assets/img/clothes/jeans/jeans_3.png", filter: "female" },
				{ img: "assets/img/clothes/jeans/jeans_4.png", filter: "female" },
				{ img: "assets/img/clothes/jeans/jeans_5.png", filter: "female" }				
			]
		},
		{
			category: "dresses",
			items: [
				{ img: "assets/img/clothes/dresses/dress_1.png", filter: "female" },
				{ img: "assets/img/clothes/dresses/dress_2.png", filter: "female" },
				{ img: "assets/img/clothes/dresses/dress_3.png", filter: "female" },
				{ img: "assets/img/clothes/dresses/dress_4.png", filter: "female" }				
			]
		},
		{
			category: "cups",
			items: [
				{ img: "assets/img/clothes/cups/cap_1.png", filter: "male" },
				{ img: "assets/img/clothes/cups/cap_2.png", filter: "male" },
				{ img: "assets/img/clothes/cups/cap_3.png", filter: "male" },
				{ img: "assets/img/clothes/cups/cap_4.png", filter: "male" },
				{ img: "assets/img/clothes/cups/cap_5.png", filter: "male" },
				{ img: "assets/img/clothes/cups/cap_6.png", filter: "male" }				
			]
		},
		{
			category: "boots",
			items: [
				{ img: "assets/img/clothes/boots/boots_1.png", filter: "male"}
			]
		}	
	];

	$scope.tshirt = "";
	$scope.trouser = "";
	$scope.dress = "";
	$scope.cup= "";
	$scope.boots= "";

	$scope.msover = function (img, filter) {
		
		console.log(filter);
		switch(filter) {
			case "t-shirt":
				console.log(filter + 'SELECT');
				$scope.tshirt = img;
				break;
			case "trousers":
				console.log(filter + 'SELECT');
				$scope.trouser = img;
				break;
	    	case "dresses":
				console.log(filter + 'SELECT');
				$scope.dress = img;
				break;
	        case "cups":
				console.log(filter + 'SELECT');
				$scope.cup = img;
				break;
			case "boots":
				console.log(filter + 'SELECT');
				$scope.boots = img;
				break;
	      default:
   		}
	}

}]);