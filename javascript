// Brandon Hubler
// Colors JavaScript page
/* Table elements are grabbed from HTML page depending on selection from drop down, 
	picture also drawn in canvas based on selection */

// Function for fading out colors
function colorFade()
{
	// Fade in color divs
	$("#blue").fadeTo(500,0);
	$("#purple").fadeTo(500,0);
	$("#green").fadeTo(500,0);
	$("#red").fadeTo(500,0);
	$("#black").fadeTo(500,0);
	$("#orange").fadeTo(500,0);
	$("#yellow").fadeTo(500,0);
	$("#brown").fadeTo(500,0);
	$("#gray").fadeTo(500,0);
	$("#white").fadeTo(500,0);
	$("#wrap").fadeTo(500,0);
	
	// Run picture fade
	run = setTimeout(function(){drawOut()}, 500);
}

// Function for fading pictures
function drawOut()
{
	// Dropdown and picture vars, can't be global since value isn't set until button press
	var select = document.getElementById("choose");
	var display = select.value;
	
	// Fades in and out simultaneously, but fade in has longer delay so it looks better
	if (display == "menFav" || display == "menBad")
	{
		$("#woman").fadeOut(500, "linear", $("#man").fadeIn(1000) );
	}
	else
	{
		$("#man").fadeOut(500, "linear", $("#woman").fadeIn(1000) );
	}
	
	// Call color function, delay for fades, passing display so user can't change during delay
	run = setTimeout(function(){color(display)}, 500);
}

// Function to get table data and set heights of color divs
function color(display)
{
	
	// Color divs
	var blue = document.getElementById("blue");
	var purple = document.getElementById("purple");
	var green = document.getElementById("green");
	var red = document.getElementById("red");
	var black = document.getElementById("black");
	var orange = document.getElementById("orange");
	var yellow = document.getElementById("yellow");
	var brown = document.getElementById("brown");
	var gray = document.getElementById("gray");
	var white = document.getElementById("white");
	
	// Getting values from HTML table, table row and dropdown id's are the same
	var table = $("table tbody");
	// This function is really only running once but this is the easiest way I found to make this work
	table.find('#'+display).each(function(i,el)
	{
		var $cell = $(this).find('td');
		var blueVal = $cell.eq(0).text();
		var purpleVal = $cell.eq(1).text();
		var greenVal = $cell.eq(2).text();
		var redVal = $cell.eq(3).text();
		var blackVal = $cell.eq(4).text();
		var orangeVal = $cell.eq(5).text();
		var yellowVal = $cell.eq(6).text();
		var brownVal = $cell.eq(7).text();
		var grayVal = $cell.eq(8).text();
		var whiteVal = $cell.eq(9).text();
		
		// Changing div heights based on table percentages
		blue.style.height = (500*(parseInt(blueVal)/100))+'px';
		purple.style.height = (500*(parseInt(purpleVal)/100))+'px';
		green.style.height = (500*(parseInt(greenVal)/100))+'px';
		red.style.height = (500*(parseInt(redVal)/100))+'px';
		black.style.height = (500*(parseInt(blackVal)/100))+'px';
		orange.style.height = (500*(parseInt(orangeVal)/100))+'px';
		yellow.style.height = (500*(parseInt(yellowVal)/100))+'px';
		brown.style.height = (500*(parseInt(brownVal)/100))+'px';
		gray.style.height = (500*(parseInt(grayVal)/100))+'px';
		white.style.height = (500*(parseInt(whiteVal)/100))+'px';
	});
	
	// Run color fade in
	run = setTimeout(function(){colorShow()}, 500);
}

// Function to fade in colors
function colorShow()
{
	// Fade in color divs
	$("#blue").fadeTo(500,1);
	$("#purple").fadeTo(500,1);
	$("#green").fadeTo(500,1);
	$("#red").fadeTo(500,1);
	$("#black").fadeTo(500,1);
	$("#orange").fadeTo(500,1);
	$("#yellow").fadeTo(500,1);
	$("#brown").fadeTo(500,1);
	$("#gray").fadeTo(500,1);
	$("#white").fadeTo(500,1);
	$("#wrap").fadeTo(500,1);
}

window.onload = function()
{
	var button = document.getElementById("button");
	var run;
	
	button.onclick = colorFade;
};
