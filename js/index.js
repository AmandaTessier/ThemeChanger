// changes to grey theme
function switchToGrey(){
	// change the background to grey
	$("body").addClass("greyTheme");
	// $("body").css("background-color", "grey");
	// // change the font to white
	// 	$("body").css("color", "white");
}

// changes to white theme
function switchToWhite(){
	// change the background to white
	$("body").removeClass("greyTheme");
	// 	$("body").css("background-color", "white");
	// // change the font to black	
	// 	$("body").css("color", "black");
}

// user clicks on grey button
$("#grayButton").click(switchToGrey);



// user clicks on white button
$("#whiteButton").click(switchToWhite);
