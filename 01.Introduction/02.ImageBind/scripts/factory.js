app.factory('Utils', function ($q) {
	return {
		isImage: function (src) {
			var deferred = $q.defer();

			var image = new Image();
			image.onerror = function() {
				deferred.reject(false);
			};

			image.onload = function() {
				deferred.resolve(true);
			};

			image.src = src;

			return deferred.promise;
		}
	}
})