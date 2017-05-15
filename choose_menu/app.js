var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/foods", {
			templateUrl: "partials/food-list.html",
			controller: "foodListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
		})
	.otherwise({
		redirectTo: "/foods"
	});
});

myApp.factory("kartService", function() {
	var kart = [];
	var sum = 0;

	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(food) {
			kart.push(food);
		},
		buy: function(food) {
			sum += food.price;
			alert("Total:"+sum);
			alert("Thanks for buying: " + food.name);
		}
		


	}
});

myApp.factory("foodService", function() {
	var foods = [
		{
			imgUrl: "A-1.jpg",
			name: "Ajiaco",
			price: 205,
			details: "In the Colombian capital of Bogotá, ajiaco is typically made with chicken, three varieties of potatoes, and the Galinsoga parviflora herb commonly referred to in Colombia as guascas.[1] In Cuba, it is a hearty stew made from beef, pork, chicken, vegetables, and a variety of starchy roots and tubers classified as viandas.[2]"
		},
		{
			imgUrl: "A-2.jpg",
			name: "Acquacotta",
			price: 168,
			details: "Originally a peasant food,[3] historically, its primary ingredients were water, stale bread, onion, tomato, olive oil[4] and any spare vegetables or leftovers. It has been described as an ancient dish.[5]"
		},
		{
			imgUrl: "A-3.jpg",
			name: "Avocado",
			price: 339,
			details: "Clear broth, rice, potato, squash or pumpkin, corn and chicken or beef. Eaten in South America and Spain, it combines native and introduced ingredients. Pictured is an Ecuadorian cazuela."
		},
		{
			imgUrl: "A-4.jpg",
			name: "Caldo Verde",
			price: 599,
			details: "Beetroot (or sometimes tomato), popular in Eastern Europe. A Lithuanian specialty, usually made in summer time in two varieties, hot and cold. Both are based on beets, but are otherwise prepared and served differently."
		},
		{
			imgUrl: "A-5.jpg",
			name: "Carrot Soup",
			price: 227,
			details: "Savory soup made by red lentil, bulgur, onion, garlic, salt, olive oil, black pepper, hot pepper and peppermint"
		},
		{
			imgUrl: "A-6.jpg",
			name: "Cream of celery",
			price: 124,
			details: "ethod of cooking using coconut milk. Due to the general nature of the term, it can refer to a number of different dishes, each called ginataan, but distinct from one another."
		}
	];

	return {
		getFoods: function() {
			return foods;
		},
		addToKart: function(food) {

		}
	}
});

myApp.controller("KartListCtrl", function($scope, kartService) {
	$scope.kart = kartService.getKart();

	$scope.buy = function(food) {
		//console.log("food: ", food);
		kartService.buy(food);
	}
	
});

myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "En el restaurante";
	$scope.appDetails.tagline = "Plethora of dishes";

	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}

		return false;
	}
});

myApp.controller("foodListCtrl", function($scope, foodService, kartService) {
	$scope.foods = foodService.getFoods();

	$scope.addToKart = function(food) {
		kartService.addToKart(food);
	}
});
