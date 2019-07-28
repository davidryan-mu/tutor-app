<?php
	if (isset($_POST['signup'])) {
		$servername = "localhost";
		$username = "root";
		$password = "s0m3thingcl3v3r";
		$database = "assignment4";

		$connection = new mysqli($servername, $username, $password, $database);

		$username = $connection->real_escape_string($_POST['username']);
		$password = $connection->real_escape_string($_POST['password']);

		//check if user exists
		$data = $connection->query("SELECT * FROM users WHERE username = '$username'");
		
		if($data->num_rows > 0) {
			exit("Username already exists");
		} else {
			$connection->query("INSERT INTO users(username, password) VALUES ('$username', '$password')");

			exit("User created successfully, please log in.");
		}

		$connection->close();
	}
?>