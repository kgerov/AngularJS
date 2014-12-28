videoApp.factory('videoFactory', function($http){
	var videoFactory = {};
	var iterator = 0;

	videoFactory.iterate = function () {
		iterator++;
		console.log(iterator);
	}

	videoFactory.getAllVideos = function () {
		return videos;
	}

	var videos = 
[
  {
    "title": "Course introduction",
    "videoUrl": "//www.youtube.com/embed/UJpSqrO_kfc?list=PLlcYRzEHmgNkSwRY18AVyfQvZPDtCMbCM",
    "length": "3:32",
    "category": "programming",
    "subscribers": 3,
    "date": 1393034567877,
    "haveSubtitles": true,
    "comments": [
      {
        "username": "Pesho Peshev",
        "content": "Congratulations Nakov",
        "date": 1393134567877,
        "likes": 12,
        "websiteUrl": "http://pesho.com"
      },
      {
        "username": "Gosho Geshev",
        "content": "Well sead Pesho",
        "date": 1393034567877,
        "likes": 0,
        "websiteUrl": "http://gosho.com/"
      }
    ]
  },
  {
    "title": "Bloodhound Gang - The Ballad of Chasey Lain",
    "videoUrl": "//www.youtube.com/embed/If9fC9aJd-U",
    "length": "4:32",
    "category": "music",
    "subscribers": 13,
    "date": 1383034567877,
    "haveSubtitles": false,
    "comments": [
      {
        "username": "Chasey Lain",
        "content": "Thank you for the  support guys.I hope your parents really liked my performance",
        "date": 1383034567877,
        "likes": 3,
        "websiteUrl": "https://www.facebook.com/chasey.lain.7"
      },
      {
        "username": "Bloodhound Gang",
        "content": "You're wellcome Chasey.They sure did.Next time bring a bigger dildo!",
        "date": 1383034567877,
        "likes": 33,
        "websiteUrl": "http://www.bloodhoundgang.com/"
      }
    ]
  },
  {
    "title": "Mountin Biking in Red Bull Rampage",
    "videoUrl": "//www.youtube.com/embed/x76VEPXYaI0",
    "length": "4:10",
    "category": "sport",
    "subscribers": 33,
    "date": 1283036567877,
    "haveSubtitles": true,
    "comments": [
      {
        "username": "Mr. Nice Guy",
        "content": "Holly shit",
        "date": 1293035567877,
        "likes": 3,
        "websiteUrl": "http://en.wikipedia.org/wiki/Peter_Griffin"
      },
      {
        "username": "Cecka Cacheva",
        "content": "Watch your mouth punk!",
        "date": 1293034557877,
        "likes": 33,
        "websiteUrl": "http://bg.wikipedia.org/wiki/%D0%A6%D0%B5%D1%86%D0%BA%D0%B0_%D0%A6%D0%B0%D1%87%D0%B5%D0%B2%D0%B0"
      }
    ]
  },
  {
    "title": "Complex forms with Advanced Directives in AngularJS",
    "videoUrl": "http://www.youtube.com/embed/G5MzkDJQkoQ",
    "category": "programming",
    "length": 0,
    "subscribers": 0,
    "date": "Sat Dec 20 2014",
    "haveSubtitles": false,
    "comments": []
  },
  {
    "title": "PEEING ON PEOPLE PRANK",
    "videoUrl": "http://www.youtube.com/embed/hBXLT7VZsHM",
    "category": "others",
    "length": 0,
    "subscribers": 0,
    "date": "Sun Dec 21 2014",
    "haveSubtitles": true,
    "comments": []
  }
]
	return videoFactory;
})