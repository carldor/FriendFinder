var data = [
  {
	"name":"Ahmed",
	"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	"scores":["5","1","4","4","5","1","2","5","4","1"]
  },
  {
  	"name":"Jacob Deming",
  	"photo":"https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
  	"scores":["4","2","5","1","3","2","2","1","3","2"]
  },
  {
  	"name":"Jeremiah Scanlon",
    "photo":"https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores":["5","2","2","2","4","1","3","2","5","5"]
  },
  {
  	"name":"Louis T. Delia",
  	"photo":"https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
  	"scores":["3","3","4","2","2","1","3","2","2","3"]
  },
  {
  	"name":"Lou Ritter",
    "photo":"https://m.facebook.com/photo.php?fbid=10208500699025296&id=1542229019&set=a.1549418665704.77596.1542229019&source=11",
    "scores":["4","3","4","1","5","2","5","3","1","4"]
  }];

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(data);
  });

  app.post("/api/friends", function(req, res) {
  	  var match = findAFriend(req.body);
      data.push(req.body);
      res.json(match);
  });

  function findAFriend(user){
  	var matchScore = [];

  	for (var i = 0; i < data.length; i++){
  	  matchScore.push(totalDifference(user.scores,data[i].scores));
  	}

  	return data[matchScore.indexOf(Math.min.apply(null,matchScore))];
  }

  function totalDifference(user1,user2){

  	var result = 0;

  	for(var i = 0; i < 10; i++){
  		result += Math.abs(user1[i] - user2[i]);
  	}

  	return result;
  }

};