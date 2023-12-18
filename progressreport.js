window.addEventListener("load",addListeners);
window.addEventListener("load",initelements);
var totalcourses = 0
var totalscore = 0
var overall = 0
var gpa
var letter
var num1
var slc
var grade
function addListeners()
{
	//LogIn Page
	document.getElementById("btnlogin").disabled=true;
	document.getElementById("inloginuser").addEventListener("click" LogInPress);
	document.getElementById("inloginpassword").addEventListener("click" LogInPress);
	document.getElementById("btnlogin").addEventListener("click", LogIn);
	
	document.getElementById("btnsubmit").addEventListener("click",submit);
	document.getElementById("inputname").addEventListener("keypress",elementable);
	document.getElementById("inputlastname").addEventListener("keypress",elementable)
	document.getElementById("cmbslc").addEventListener("click",switchslc)
	document.getElementById("cmbgrade").addEventListener("click",switchgrade)
	document.getElementById("inputemail").addEventListener("keypress",elementable)
	document.getElementById("inputosis").addEventListener("keypress",elementable)
	
	//Progress Report Page
	document.getElementById("courseone").addEventListener("keypress",elementable)
	document.getElementById("coursetwo").addEventListener("keypress",elementable)
	document.getElementById("coursethree").addEventListener("keypress",elementable)
	document.getElementById("coursefour").addEventListener("keypress",elementable)
	document.getElementById("coursefive").addEventListener("keypress",elementable)
	document.getElementById("coursesix").addEventListener("keypress",elementable)
	document.getElementById("courseseven").addEventListener("keypress",elementable)
	document.getElementById("courseeight").addEventListener("keypress",elementable)
	
	document.getElementById("gradeone").addEventListener("keypress",elementable)
	document.getElementById("gradetwo").addEventListener("keypress",elementable)
	document.getElementById("gradethree").addEventListener("keypress",elementable)
	document.getElementById("gradefour").addEventListener("keypress",elementable)
	document.getElementById("gradefive").addEventListener("keypress",elementable)
	document.getElementById("gradesix").addEventListener("keypress",elementable)
	document.getElementById("gradeseven").addEventListener("keypress",elementable)
	document.getElementById("gradeeight").addEventListener("keypress",elementable)
	
}

function LogInPress()
{
	if (document.getElementById("inloginuser").value != "" && document.getElementById("inloginpassword").value != "")
	{
		document.getElementById("btnlogin").disabled=false;
	}
}
function LogIn()
{
	alert("fff")
	
	window.location.href = "Main.html"
}

function switchslc()
{
	slc = document.getElementById("cmbslc").selectedIndex;
	
	switch(slc)
	{
		case 0:
			slc = "N/A"
			break;
		case 1:
			slc = "Humanities";
			document.getElementById("cmbgrade").disabled=false;
			break;
		case 2:
			slc = "Teachers Of Tomorrow";
			document.getElementById("cmbgrade").disabled=false;
			break;
		case 3:
			slc = "Performing & Visual Arts";
			document.getElementById("cmbgrade").disabled=false;
			break;
		case 4:
			slc = "Public Service";
			document.getElementById("cmbgrade").disabled=false;
			break;
		case 5:
			slc = "Pre-Med";
			document.getElementById("cmbgrade").disabled=false;
			break;
		case 6:
			slc = "Global Citizens";
			document.getElementById("cmbgrade").disabled=false;
			break;
		case 7:
			slc = "HSSE";
			document.getElementById("cmbgrade").disabled=false;
			break;
		default:
			break;
			
	}
	
}

function switchgrade()
{
	grade = document.getElementById("cmbgrade").selectedIndex;
	
	switch(grade)
	{
		case 0:
			grade = "N/A";
			break;
		case 1:
			grade = "9th";
			document.getElementById("inputemail").disabled=false;
			break;
		case 2:
			grade = "10th";
			document.getElementById("inputemail").disabled=false;
			break;
		case 3:
			grade = "11th";
			document.getElementById("inputemail").disabled=false;
			break;
		case 4:
			grade = "12th";
			document.getElementById("inputemail").disabled=false;
			break;
		default:
			break;
	}
}

function initelements()
{
	document.getElementById("inputname").focus();
	document.getElementById("inputmiddle").disabled=true;
	document.getElementById("inputlastname").disabled=true;
	document.getElementById("cmbslc").disabled=true;
	document.getElementById("cmbgrade").disabled=true;
	document.getElementById("inputemail").disabled=true;
	document.getElementById("btnsubmit").disabled=true;
	document.getElementById("inputosis").disabled=true;
	
	document.getElementById("courseone").disabled=true;
	document.getElementById("coursetwo").disabled=true;
	document.getElementById("coursethree").disabled=true;
	document.getElementById("coursefour").disabled=true;
	document.getElementById("coursefive").disabled=true;
	document.getElementById("coursesix").disabled=true;
	document.getElementById("courseseven").disabled=true;
	document.getElementById("courseeight").disabled=true;
	
	document.getElementById("gradeone").disabled=true;
	document.getElementById("gradetwo").disabled=true;
	document.getElementById("gradethree").disabled=true;
	document.getElementById("gradefour").disabled=true;
	document.getElementById("gradefive").disabled=true;
	document.getElementById("gradesix").disabled=true;
	document.getElementById("gradeseven").disabled=true;
	document.getElementById("gradeeight").disabled=true;
}

function elementable()
{
	if (document.getElementById("inputname").value != "") {
		document.getElementById("inputmiddle").disabled=false;
		document.getElementById("inputlastname").disabled=false;
	}
	
	if (document.getElementById("inputlastname").value != "") {
		document.getElementById("cmbslc").disabled=false;
	}
	if (document.getElementById("inputemail").value != "") {
		document.getElementById("inputosis").disabled=false;
	}
	if (document.getElementById("inputosis").value != "") {
		document.getElementById("courseone").disabled=false;
		document.getElementById("gradeone").disabled=false;
	}
	if (document.getElementById("courseone").value != "" && document.getElementById("gradeone").value != "") {
		document.getElementById("coursetwo").disabled=false;
		document.getElementById("gradetwo").disabled=false;
		document.getElementById("btnsubmit").disabled=false;
	}
	if (document.getElementById("coursetwo").value != "" && document.getElementById("gradetwo").value != "") {
		document.getElementById("coursethree").disabled=false;
		document.getElementById("gradethree").disabled=false;
	}
	if (document.getElementById("coursethree").value != "" && document.getElementById("gradethree").value != "") {
		document.getElementById("coursefour").disabled=false;
		document.getElementById("gradefour").disabled=false;
	}
	if (document.getElementById("coursefour").value != "" && document.getElementById("gradefour").value != "") {
		document.getElementById("coursefive").disabled=false;
		document.getElementById("gradefive").disabled=false;
	}
	if (document.getElementById("coursefive").value != "" && document.getElementById("gradefive").value != "") {
		document.getElementById("coursesix").disabled=false;
		document.getElementById("gradesix").disabled=false;
	}
	if (document.getElementById("coursesix").value != "" && document.getElementById("gradesix").value != "") {
		document.getElementById("courseseven").disabled=false;
		document.getElementById("gradeseven").disabled=false;
	}
	if (document.getElementById("courseseven").value != "" && document.getElementById("gradeseven").value != "") {
		document.getElementById("courseeight").disabled=false;
		document.getElementById("gradeeight").disabled=false;
	}
}

function submit()
{
	totalcourses = 0;
	totalscore = 0;
	if (document.getElementById("inputname").value === ""){
		alert("First Name is required!")
		return
	} else if (document.getElementById("inputlastname").value === "") {
		alert("Last Name is required!")
		return
	} else if (slc === "N/A") {
		alert("SLC is required!")
		return
	} else if (grade === "N/A") {
		alert("Grade is required!")
		return
	} else if (document.getElementById("inputemail").value === "") {
		alert("Email is required!")
		return
	} else if (document.getElementById("inputosis").value == "") {
		alert("OSIS Required")
		return
	}
	
	//The Code could be way smaller, but I decided to add alerts on whats missing
	//I know that there is a more optimized way to write this
	// The && is used as AND, both conditions must be met, The conditions must be inside of a single parenthesis
	if (parseInt(document.getElementById("gradeone").value) > -1 && parseInt(document.getElementById("gradeone").value) < 101 && document.getElementById("courseone").value != "") {
		totalcourses = totalcourses + 1;
		totalscore = totalscore + parseInt(document.getElementById("gradeone").value);
	} else if (parseInt(document.getElementById("gradeone").value) > -1 && parseInt(document.getElementById("gradeone").value) < 101 && document.getElementById("courseone").value == "") {
		alert("Course #1 should have a name");
		return;
		// The || is used as OR, at least one condition is required to be met
	} else if (parseInt(document.getElementById("gradeone").value) < 0 || parseInt(document.getElementById("gradeone").value) > 100) {
		alert("Grade #1 Should be 0-100");
		return;
	}
	if (parseInt(document.getElementById("gradetwo").value) > -1 && parseInt(document.getElementById("gradetwo").value) < 101 && document.getElementById("coursetwo").value != "") {
		totalcourses = totalcourses + 1;
		totalscore = totalscore + parseInt(document.getElementById("gradetwo").value);
	} else if (parseInt(document.getElementById("gradetwo").value) > -1 && parseInt(document.getElementById("gradetwo").value) < 101 && document.getElementById("coursetwo").value == "") {
		alert("Course #2 should have a name");
		return;
	} else if (parseInt(document.getElementById("gradetwo").value) < 0 || parseInt(document.getElementById("gradetwo").value) > 100) {
		alert("Grade #2 Should be 0-100");
		return;
	}
	if (parseInt(document.getElementById("gradethree").value) > -1 && parseInt(document.getElementById("gradethree").value) < 101 && document.getElementById("coursethree").value != "") {
		totalcourses = totalcourses + 1;
		totalscore = totalscore + parseInt(document.getElementById("gradethree").value);
	} else if (parseInt(document.getElementById("gradethree").value) > -1 && parseInt(document.getElementById("gradethree").value) < 101 && document.getElementById("coursethree").value == "") {
		alert("Course #3 should have a name");
		return;
	} else if (parseInt(document.getElementById("gradethree").value) < 0 || parseInt(document.getElementById("gradethree").value) > 100) {
		alert("Grade #3 Should be 0-100");
		return;
	}
	if (parseInt(document.getElementById("gradefour").value) > -1 && parseInt(document.getElementById("gradefour").value) < 101 && document.getElementById("coursefour").value != "") {
		totalcourses = totalcourses + 1;
		totalscore = totalscore + parseInt(document.getElementById("gradefour").value);
	} else if (parseInt(document.getElementById("gradefour").value) > -1 && parseInt(document.getElementById("gradefour").value) < 101 && document.getElementById("coursefour").value == "") {
		alert("Course #4 should have a name");
		return;
	} else if (parseInt(document.getElementById("gradefour").value) < 0 || parseInt(document.getElementById("gradefour").value) > 100) {
		alert("Grade #4 Should be 0-100");
		return;
	}
	if (parseInt(document.getElementById("gradefive").value) > -1 && parseInt(document.getElementById("gradefive").value) < 101 && document.getElementById("coursefive").value != "") {
		totalcourses = totalcourses + 1;
		totalscore = totalscore + parseInt(document.getElementById("gradefive").value);
	} else if (parseInt(document.getElementById("gradefive").value) > -1 && parseInt(document.getElementById("gradefive").value) < 101 && document.getElementById("coursefive").value == "") {
		alert("Course #5 should have a name");
		return;
	} else if (parseInt(document.getElementById("gradefive").value) < 0 || parseInt(document.getElementById("gradefive").value) > 100) {
		alert("Grade #5 Should be 0-100");
		return;
	}
	if (parseInt(document.getElementById("gradesix").value) > -1 && parseInt(document.getElementById("gradesix").value) < 101 && document.getElementById("coursesix").value != "") {
		totalcourses = totalcourses + 1;
		totalscore = totalscore + parseInt(document.getElementById("gradesix").value);
	} else if (parseInt(document.getElementById("gradesix").value) > -1 && parseInt(document.getElementById("gradesix").value) < 101 && document.getElementById("coursesix").value == "") {
		alert("Course #6 should have a name");
		return;
	} else if (parseInt(document.getElementById("gradesix").value) < 0 || parseInt(document.getElementById("gradesix").value) > 100) {
		alert("Grade #6 Should be 0-100");
		return;
	}
	if (parseInt(document.getElementById("gradeseven").value) > -1 && parseInt(document.getElementById("gradeseven").value) < 101 && document.getElementById("courseseven").value != "") {
		totalcourses = totalcourses + 1;
		totalscore = totalscore + parseInt(document.getElementById("gradeseven").value);
	} else if (parseInt(document.getElementById("gradeseven").value) > -1 && parseInt(document.getElementById("gradeseven").value) < 101 && document.getElementById("courseseven").value == "") {
		alert("Course #7 should have a name");
		return;
	} else if (parseInt(document.getElementById("gradeseven").value) < 0 || parseInt(document.getElementById("gradeseven").value) > 100) {
		alert("Grade #7 Should be 0-100");
		return;
	}
	if (parseInt(document.getElementById("gradeeight").value) > -1 && parseInt(document.getElementById("gradeeight").value) < 101 && document.getElementById("courseeight").value != "") {
		totalcourses = totalcourses + 1;
		totalscore = totalscore + parseInt(document.getElementById("gradeeight").value);
	} else if (parseInt(document.getElementById("gradeeight").value) > -1 && parseInt(document.getElementById("gradeeight").value) < 101 && document.getElementById("courseeight").value == "") {
		alert("Course #8 should have a name");
		return;
	} else if (parseInt(document.getElementById("gradeeight").value) < 0 || parseInt(document.getElementById("gradeeight").value) > 100) {
		alert("Grade #8 Should be 0-100");
		return;
	}
	
	if (totalcourses < 1) {
		alert("You need at least one course with both name and grade");
		return;
	}
	
	//Calculation 
	overall = totalscore / totalcourses;
	num1 = overall / 100;
	gpa = num1 * 4
	
	//Prevents from GPA becoming 3.7600000000000002, its an error from js
	if (overall == 94) {
		gpa = 3.76;
	}
	
	//Finding the Letter
	if (overall >= 97) {
		letter = "A+";
	} else if (overall <= 96 && overall >= 93) {
		letter = "A";
	} else if (overall <= 92 && overall >= 90) {
		letter = "A-";
	} else if (overall <= 89 && overall >= 87) {
		letter = "B+";
	} else if (overall <= 86 && overall >= 83) {
		letter = "B";
	} else if (overall <= 82 && overall >= 80) {
		letter = "B-";
	} else if (overall <= 79 && overall >= 77) {
		letter = "C+";
	} else if (overall <= 76 && overall >= 73) {
		letter = "C";
	} else if (overall <= 72 && overall >= 70) {
		letter = "C-";
	} else if (overall <= 69 && overall >= 67) {
		letter = "D+";
	} else if (overall <= 66 && overall >= 65) {
		letter = "D-";
	} else if (overall < 65) {
		letter = "F";
	}
	

	
	document.getElementById("Name").innerHTML = document.getElementById("inputname").value;
	document.getElementById("MID").innerHTML = document.getElementById("inputmiddle").value;
	document.getElementById("LastName").innerHTML = document.getElementById("inputlastname").value;
	document.getElementById("SLC").innerHTML = slc;
	document.getElementById("Grade").innerHTML = grade;
	document.getElementById("Email").innerHTML = document.getElementById("inputemail").value;
	document.getElementById("Osis").innerHTML = document.getElementById("inputosis").value;
	document.getElementById("Overall").innerHTML = String(overall);
	document.getElementById("Gpa").innerHTML = String(gpa)
	document.getElementById("Letter").innerHTML = letter;
}
