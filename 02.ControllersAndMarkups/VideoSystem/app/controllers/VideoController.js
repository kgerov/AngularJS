videoApp.controller('VideoController', function($scope, videoFactory, $http){
	init();

	function init () {
		$scope.videos = videoFactory.getAllVideos();
	}

	$scope.orderSelector = 'title';

	$scope.upVote = function (comment) {
		comment.likes++;
	}

	$scope.downVote = function (comment) {
		if (comment.likes > 0) {
			comment.likes--;
		}
	}
});