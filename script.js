$(document).ready(function() {

	//Initializing the arrays that contain the quotes and authors
	//array length = 16

	var quote = ["The concept of always being reachable makes us present nowhere.",
	"Life is about making an impact, not making an income.",
	"Whatever the mind of man can conceive and believe, it can achieve.",
	"Strive not to be a success, but rather to be of value.",
	"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
	"Life is what happens to you while you’re busy making other plans.",
	"The best time to plant a tree was 20 years ago. The second best time is now.",
	"An unexamined life is not worth living.","Eighty percent of success is showing up.",
	"Your time is limited, so don’t waste it living someone else’s life.",
	"Every child is an artist.  The problem is how to remain an artist once he grows up.",
	"The best revenge is massive success.",
	"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
	"Certain things catch your eye, but pursue only those that capture the heart.",
	"Believe you can and you’re halfway there.","When I let go of what I am, I become what I might be."];

	var author = ["Peter Arvai","Kevin Kruse","Napoleon Hill","Albert Einstein","Robert Frost",
	"John Lennon","Chinese Proverb","Socrates","Woody Allen","Steve Jobs","Pablo Picasso","Frank Sinatra",
	"Aristotle","Ancient Indian Proverb","Theodore Roosevelt","Lao Tzu"];

 	$(".butt").click(function() {

 		//First we clear the sections where quote and author are going to be displayed
	    $("#quote").html("");
	    $("#author").html("");

	    //Then we pick a random number (position in array)
	    var i = Math.floor(Math.random() * 16);
	    var j = 17;
	    //Check to see if current position is equal to the previous one
	    //(we don't want to display the same quote twice in a row)
	    if ( i === j) {
	    	i = Math.floor(Math.random() * 16);
	    } else {
	    	j = i;
	    }
	    
	    //Then we display the random picked quote and author
	    $("#quote").html(quote[j]);
	    $("#author").html(author[j]);
 	});
});