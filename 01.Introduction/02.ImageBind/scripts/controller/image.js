app.controller('ImagePage', function ($scope, Utils) {
	$scope.DisplayImg = function (urlNew) {
		Utils.isImage(urlNew)
			.then(function () {
				$scope.url = urlNew;	
			}, function (error) {
				alert("Invalid URL");
			});
		
	}
	$scope.url = "http://galerias.nfist.pt/~galerias/d/12935-2/IMG_2411.jpg";
})