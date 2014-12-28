var videoApp = angular.module('videoApp', ['ngRoute', 'videoFilters']);

videoApp.config(function($routeProvider) {
	$routeProvider
		.when('/',
		{
			controller: 'VideoController',
			templateUrl: 'app/partials/video.html'
		})
		.when('/add',
		{
			controller: 'AddVideoController',
			templateUrl: 'app/partials/add-video.html'
		})
		.otherwise({redirectTo: '/'});
});