angular.module("quoteBook").controller("mainCtrl", function($scope, dataService){
	
	$scope.quotes = dataService.getData();

	$scope.addData = function(){
		var newData = {text: $scope.newQuote, author: $scope.newAuthor}
		if(newData.text === undefined){
			alert("Quote field is blank");
			return;
		};
		if(newData.author === undefined){
			alert("Author field is blank");
			return;
		};
		dataService.addData(newData);
	};

	$scope.removeData = function(){
		var toBeRemoved = [];
		for(var i = 0; i < $scope.quotes.length; i++){
			if($("#"+ i).is(":checked")){
				toBeRemoved[i] = true;
			}else{
				toBeRemoved[i] = false;
			}
		}
		dataService.removeData(toBeRemoved);
	}

	
})