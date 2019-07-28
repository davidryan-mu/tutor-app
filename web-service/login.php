<?php
	if (isset($_POST['login'])) {
		$servername = "localhost";
		$username = "root";
		$password = "s0m3thingcl3v3r";
		$database = "assignment4";

		$connection = new mysqli($servername, $username, $password, $database);

		$username = $connection->real_escape_string($_POST['username']);
		$password = $connection->real_escape_string($_POST['password']);

		$data = $connection->query("SELECT id FROM users WHERE username='$username' AND password='$password'");
		if ($data->num_rows > 0) {
			exit('Login successful');
		} else {
			exit('Username or password incorrect. Have you signed up?');
		}

		$connection->close();
	}
?>