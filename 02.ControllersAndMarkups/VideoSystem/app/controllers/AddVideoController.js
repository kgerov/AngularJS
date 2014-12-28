videoApp.controller('AddVideoController', function($scope){
	$scope.addVideo = function (newVideo) {
		console.log(newVideo);
		console.log("success");
	}

	$scope.successField = 'has-success';
});