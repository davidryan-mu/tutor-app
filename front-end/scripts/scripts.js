$(document).ready(function() {
	const chars = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"];


	//Fill study mode container
	for(var i = 0; i < 46; i++) {
		var gif = "this.src='front-end/gifs/img" + (i+1) + ".gif'",
			restore = "this.src='front-end/images/" + chars[i] + ".png'",
			fill = '<div class="character">' + 
					'<img src="front-end/images/' + chars[i] + '.png" onmouseover="'+ gif + '" onmouseout="' + restore +'" onclick="playSound(' + (i+1) + ')"/>' +						
					'<p>' + chars[i] + '</p>' +
					'</div>';

		$(fill).appendTo('#container_index');
	}

	//Fill quiz mode container
	for(var i = 0; i < 46; i++) {
		var gif = "this.src='gifs/img" + (i+1) + ".gif'",
			restore = "this.src='images/" + chars[i] + ".png'",
			fill = '<div class="character">' + 
					'<img src="images/' + chars[i] + '.png" onmouseover="'+ gif + '" onmouseout="' + restore +'" onclick="playSound(' + (i+1) + ')"/>' +						
					'<input class="checkbox" type="checkbox" name="'+ chars[i] + '" value="' + chars[i] + '">' + chars[i] +
					'</div>';

		$(fill).appendTo('#formID');
	}

	$('<input class="button" class="submit" type="submit" value="Submit">').appendTo('#formID');

	//Hide quiz by default
	$('#questions').hide();

	//When user selects training set
	$('#formID').submit(function(event) {
		$('#toHide').hide();
		$('#questions_container').show();
		event.preventDefault();

		var form = $(this),
			data = {};

		$(':checkbox').each(function(index, value) {
			var input = $(this),
				name = input.attr('name'),
				value = input.val();
				isChecked = $(this).is(':checked');


			if(isChecked) {
				data[name] = value;
				var x = chars.indexOf(value),
					random1 = Math.floor(Math.random() * 46),
					random2 = Math.floor(Math.random() * 46),
					random3 = Math.floor(Math.random() * 46);
				
				//Prevent outputting the same option twice
				while(x == random1) {
					random1 = Math.floor(Math.random() * 46);
				}

				while(random2 == x || random2 == random1) {
					random2 = Math.floor(Math.random() * 46);
				}

				while(random3 == x || random3 == random2 || random3 == random1) {
					random3 = Math.floor(Math.random() * 46);
				}


				//Create array of options and shuffle them
				var array = ['<input type="radio" name="' + value + '" value="' + value + '"> ' + value + ' <br />',
							 '<input type="radio" name="' + value + '" value="' + chars[random1] + '"> ' + chars[random1] + ' <br />',
							 '<input type="radio" name="' + value + '" value="' + chars[random2] + '"> ' + chars[random2] + ' <br />',
							 '<input type="radio" name="' + value + '" value="' + chars[random3] + '"> ' + chars[random3] + ' <br />'];

				array = shuffle(array);

				//Fill quiz questions
				var elm = '<p>What does the character in the image correspond to?</p>' +
							'<img src="images/' + value + '.png" style="float: left; margin-right: 10px; margin-bottom: 10px; box-shadow: 5px 5px #888888;"/>' +
							array[0] + array[1] + array[2] + array[3] + '<br /> <br />';
				$(elm).appendTo('#quiz_form');
			}
		});

		$('<input class="button" class="submit" type="submit" value="Submit">').appendTo('#quiz_form');
	});


	var flag = false;
	$('#quiz_form').on('submit', function(event) {
		event.preventDefault();
		var correctCount = 0;
			count = 0;

		$('input[type=radio]:checked').each(function() {
			var input = $(this),
				name = input.attr('name'),
				value = input.val();
				
				if(name == value) {
					correctCount++;
				}
		});

		$('input[type=radio]').each(function() {
			count += 0.25;
		});

		var result = Math.round((correctCount / count) * 100);

		if(!flag) {
			$('<p>You scored ' + result + '%</p>').appendTo('#results');
			$('<button class="button" id="save" onclick="saveResults()" value="Save Results">Save Results</button>').appendTo('#results');
			flag = true;
		}
	});

	//Sign up via progress page
	$('#signup_progress_button').on('click', function() {
		var username = $('#username').val(),
			password = $('#password').val();
		
		if (username == "" || password == "") {
			alert("Please check your inputs");
		}

		else {
			$.ajax(
			{
				url: '../web-service/signup.php',
				method: 'POST',
				data: {
					signup: 1,
					username: username,
					password: password
					},
				success: function (response) {
					$('#response_progress').html(response);
				},
				dataType: 'text'
				}
			);

			$('#username').val("");
			$('#password').val("");
		}
	});

	//Log in via progress page
	$('#login_progress_button').on('click', function() {
		var username = $('#username').val(),
			password = $('#password').val();
		
		if (username == "" || password == "") {
			alert("Please check your inputs");
		}

		else {
			$.ajax(
			{
				url: '../web-service/login.php',
				method: 'POST',
				data: {
					login: 1,
					username: username,
					password: password
					},
				success: function (response) {
					$('#response_progress').html(response);
					if (response == "Login successful") {
						$('#login_progress').hide();
						$('#show_progress').show();

						$.ajax(
						{
									url: '../web-service/get_progress.php',
									method: 'POST',
									data: {
										save: 1,
										username: username,
										password: password
									},
									success: function(response) {
										$('#show_progress').html(response);
									},
									dataType: 'text'
						}
						);
					}
				},
				dataType: 'text'
				}
			);
		}
	});
});

function playSound(x) {
	var id = "audio#" + x;
	$(id)[0].play();
}


//Implementation of Fisher-Yates shuffling algorithm by StackOverflow user CoolAJ86
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var saveFlag = false;
//When user chooses to save results
function saveResults() {
	//Create login form
	if(!saveFlag) {
		saveFlag = true;
		$('<p>Log in or Sign Up</p><form method="post" action="../web-service/login.php"><input type="text" id="username" placeholder="Username"><br /><input type="password" id="password" placeholder="Password"><br /><input type="button" value="Log In" id="login"><input type="button" value="Sign Up" id="signup"></form>').appendTo('#results');
	}

	$('#login').on('click', function() {
		var username = $('#username').val(),
			password = $('#password').val();
		
		if (username == "" || password == "") {
			alert("Please check your inputs");
		}

		else {
			$.ajax(
			{
				url: '../web-service/login.php',
				method: 'POST',
				data: {
					login: 1,
					username: username,
					password: password
					},
				success: function (response) {
					$('#response').html(response);
					if (response == "Login successful") {
						$('#username').val("");
						$('#password').val("");

						$('input[type=radio]:checked').each(function() {
							var input = $(this),
								name = input.attr('name'),
								value = input.val();
				
							if(name == value) {
								$.ajax(
								{
									url: '../web-service/save.php',
									method: 'POST',
									data: {
										save: 1,
										username: username,
										value: value
									},
									success: function(response) {
										$('#response').html(response);
									},
									dataType: 'text'
								}
								);
							}
						});
					}
				},
				dataType: 'text'
				}
			);
		}
	});

	$('#signup').on('click', function() {
		var username = $('#username').val(),
			password = $('#password').val();
		
		if (username == "" || password == "") {
			alert("Please check your inputs");
		}

		else {
			$.ajax(
			{
				url: '../web-service/signup.php',
				method: 'POST',
				data: {
					signup: 1,
					username: username,
					password: password
					},
				success: function (response) {
					$('#response').html(response);
				},
				dataType: 'text'
				}
			);

			$('#username').val("");
			$('#password').val("");
		}
	});
}