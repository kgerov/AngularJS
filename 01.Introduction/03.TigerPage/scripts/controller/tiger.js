app.controller('TigerPage', function ($scope) {
	var tiger = {
	  name: 'Pesho',
	  born: 'Asia',
	  BirthDate: 2006,
	  live: 'Sofia Zoo',
	  url: 'http://assets.worldwildlife.org/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942'
	};
	
	$scope.tiger = tiger;

	$scope.title = {
        color: '#1F3246',
        fontWeight: 'bold',
        fontSize: '2em'
    }

    $scope.text = {
    	color: '#1F3246',
    	fontSize: '1.3em'
    }
})