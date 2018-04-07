<html>
<head>
<title>Calandar++</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
 <meta http-equiv="Content-Security-Policy" content="default-src *; style-src *  'unsafe-inline'; script-src *  'unsafe-inline'; media-src *">
<link rel='stylesheet' href='css/style.css' type='text/css' media='all' />
<style>
td{
	text-align:center;
}
#innerTable{
	height:100%;
	width:100%;
	margin:auto;
	color:#ffffff;
}
#innerTable td{background-color:teal;border:2px solid black;border-radius:5px;}
tr:first-child td{border:0;}
#event{height:70%;width:70%;text-align:left;}
a{text-decoration:none;color:cyan}
</style>
</head>
<body bgcolor="black">
<div id="header">
<h1>CALANDAR++</h2>
</div>
		<table id="outerTable"><tr><td id="img" >&#9673;</td>
		<td id="img" >&#9673;</td><td  id="img" >&#9673;</td></tr>
		<tr><td colspan=3><h1>Day's Activities</h1></td></tr>
		<tr id="inner">
			<td colspan=3><table  id="calandar" >
<?php
$servername = "sql303.byethost.com";
$username = "b12_21899800";
$password = "tess4321";
$dbname = "b12_21899800_dailyevents";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "";

$da=$_POST['d'];
$mo=$_POST['m'];
$ye=$_POST['y'];


 $sql="SELECT * from events where day='$da'AND month='$mo' AND year='$ye'";
  $result = $conn->query($sql);
 
	if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    echo "<table id='innerTable'><tr><td>". "Date: " ."</td>
			<td><b>". $row["day"] ."-".$row["month"]."-".$row["year"]. "</b></td></tr>" .
			"<tr><td>". " Semester: " ."</td><td><b>". $row["class"]. "</td></tr>" .
			"<tr><td >" . " Today's Events: " ."</td><td id='event'><b>". $row["events"]."</td></tr></table>";
    	
	}
} else {
    echo "<table >No Results Found</table>";
}
$conn->close();
		
?>
<tr><td colspan=3><a href="index.html">Back</a></td></tr>	
</table></td></td>
</tr></table>
</body>
</html>
	
