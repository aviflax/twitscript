var twit = require("./src/twitscript"),
	sys = require("sys");

var twitter = new twit.init({
	username: "example", 
	password: "example"
});

/*
twitter.updateStatus({status: "I'm about to push this project up"}, function(data) {
	sys.puts("Sent?");
}); */

/*	Yeeeaaahhh bulk user lookup API */
twitter.bulkUserLookup({screen_names: ["ryanmcgrath", "enotionz"]}, function(data) {
	sys.puts("Working?");
	sys.puts(JSON.stringify(data));
});

/*twitter.getPublicTimeline(function(data) {
	for(var i = 0; i < data.length; i++) {
		sys.puts(data[i].text);
	}
}); */
