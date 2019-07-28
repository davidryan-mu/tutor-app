<?php
	if (isset($_POST['save'])) {
		$servername = "localhost";
		$username = "root";
		$password = "s0m3thingcl3v3r";
		$database = "assignment4";

		$connection = new mysqli($servername, $username, $password, $database);

		$username = $connection->real_escape_string($_POST['username']);
		$password = $connection->real_escape_string($_POST['password']);

		$sql = $connection->query("SELECT * FROM users WHERE username = '$username' AND password = '$password'");

		$chars = array("a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n");

		if ($sql->num_rows > 0) {
			echo "<table id='myTable'>";

			while ($row = mysqli_fetch_assoc($sql)) {
				for($i = 0; $i < 42; $i+=4) {
					echo "<col><col><col><col><col><col><col><col><tr><td>" . "<div class='character'><img src='images/" . $chars[$i] . ".png'><br /> " . $chars[$i] . "</div>" . "</td><td>" . $row[$chars[$i]] . "</td><td>" . "<div class='character'><img src='images/" . $chars[$i+1] . ".png'><br /> " . $chars[$i+1] . "</div>" . "</td><td>" . $row[$chars[$i+1]] . "</td><td>" . "<div class='character'><img src='images/" . $chars[$i+2] . ".png'><br /> " . $chars[$i+2] . "</div>" . "</td><td>" . $row[$chars[$i+2]] . "</td><td>" . "<div class='character'><img src='images/" . $chars[$i+3] . ".png'><br /> " . $chars[$i+3] . "</div>" . "</td><td>" . $row[$chars[$i+3]] . "</td></tr>";
				}

				echo "<tr><td><div class='character'><img src='images/" . $chars[44] . ".png'><br /> " . $chars[44] . "</div></td><td>" . $row[$chars[44]] . "</td><td><div class='character'><img src='images/" . $chars[45] . ".png'><br /> " . $chars[45] . "</div></td><td>" . $row[$chars[45]] . "</td></tr>";
			}

			echo "</table>";
		} else {
			exit('Error when loading progress');
		}

		$connection->close();
	}
?>