<?php
	if (isset($_POST['save'])) {
		$servername = "localhost";
		$username = "root";
		$password = "s0m3thingcl3v3r";
		$database = "assignment4";

		$connection = new mysqli($servername, $username, $password, $database);

		$username = $connection->real_escape_string($_POST['username']);
		$value = $connection->real_escape_string($_POST['value']);

		$data = $connection->query("UPDATE users SET $value='Learned' WHERE username='$username'");

		$query = $connection->query("SELECT * FROM users WHERE username='$username' AND $value='Learned'");
		if ($query->num_rows > 0) {
			exit('Save successful');
		} else {
			exit('Error when saving progress');
		}

		$connection->close();
	}
?>