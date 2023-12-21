window.addEventListener("load",LoadPage);
var page

//Calculator
var total = 0;
var label = "";
var num1 = "0";
var num2 = "0";
var operation = "";
var sign = "+";
var num3;
num3 = parseInt(num3);

//Progress Report
var totalcourses = 0
var totalscore = 0
var overall = 0
var gpa
var letter
var num1
var slc
var grade


function LoadPage()
{
	page = document.getElementById("Header1").innerHTML;
	
	//LogIn Page
	if (page == "LOG IN") {
		alert(page)
		document.getElementById("btnlogin").disabled=true;
		document.getElementById("btnsignup").disabled=true;
		document.getElementById("inloginuser").addEventListener("keypress", LogInPress);
		document.getElementById("inloginpassword").addEventListener("keypress", LogInPress);
		document.getElementById("btnlogin").addEventListener("click", LogIn);
		document.getElementById("btnsignup").addEventListener("click", SignUp);
	}
	
	//Progress Report Page
	if (page == "Report") {
		alert(page);
		document.getElementById("btnsubmit").addEventListener("click",submit);
		document.getElementById("inputname").addEventListener("keypress",elementable);
		document.getElementById("inputlastname").addEventListener("keypress",elementable)
		document.getElementById("cmbslc").addEventListener("click",switchslc)
		document.getElementById("cmbgrade").addEventListener("click",switchgrade)
		document.getElementById("inputemail").addEventListener("keypress",elementable)
		document.getElementById("inputosis").addEventListener("keypress",elementable)
	
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
	
	//Calculator
	if (page == "Calculator") {
		document.getElementById("btndot").addEventListener("click",dot);
		document.getElementById("btnzero").addEventListener("click",zero);
		document.getElementById("btnone").addEventListener("click",one);
		document.getElementById("btntwo").addEventListener("click",two);
		document.getElementById("btnthree").addEventListener("click",three);
		document.getElementById("btnfour").addEventListener("click",four);
		document.getElementById("btnfive").addEventListener("click",five);
		document.getElementById("btnsix").addEventListener("click",six);
		document.getElementById("btnseven").addEventListener("click",seven);
		document.getElementById("btneigth").addEventListener("click",eight);
		document.getElementById("btnnine").addEventListener("click",nine);
		document.getElementById("btnplus").addEventListener("click",plus);
		document.getElementById("btnminus").addEventListener("click",minus);
		document.getElementById("btnmultiplication").addEventListener("click",multiplication);
		document.getElementById("btnsign").addEventListener("click",signchanger);
		document.getElementById("btnequal").addEventListener("click",equal);
		document.getElementById("btndivision").addEventListener("click",division)
	}
}

//LogIn/Sign In
function LogInPress()
{
	if (document.getElementById("inloginuser").value != "" && document.getElementById("inloginpassword").value != "")
	{
		document.getElementById("btnlogin").disabled=false;
		document.getElementById("btnsignup").disabled=false;
	}
}
function LogIn()
{
	if (document.getElementById("inloginuser").value == UserName && document.getElementById("inloginpassword").value == Password) 
	{
		window.location.href = "Main.html";
	} else {
		alert("UserName or Password is wrong" + Password + UserName);
	}
	
}

function SignUp()
{
	if (document.getElementById("inloginpassword").value != "" && document.getElementById("inloginuser").value != "")
	{
		var UserName = document.getElementById("inloginuser").value;
		var Password = document.getElementById("inloginpassword").value;
		alert(UserName + " " + Password);
		window.location.href = "Main.html";
	}
}

//Progress Report
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

//Calculator 
function dot()
{
	if (label === "") {
		label = "0";
	}
	label = label + "."
	document.getElementById("calculation").value = label;
	document.getElementById("btndot").disabled = true;
	alert("ddd")
}

function zero()
{
	label = label + "0"
	document.getElementById("calculation").value = label;
}

function one()
{
	label = label + "1"
	document.getElementById("calculation").value = label;
}

function two()
{
	label = label + "2"
	document.getElementById("calculation").value = label;
}

function three()
{
	label = label + "3"
	document.getElementById("calculation").value = label;
}

function four()
{
	label = label + "4"
	document.getElementById("calculation").value = label;
}

function five()
{
	label = label + "5"
	document.getElementById("calculation").value = label;
}

function six()
{
	label = label + "6"
	document.getElementById("calculation").value = label;
}

function seven()
{
	label = label + "7"
	document.getElementById("calculation").value = label;
}

function eight()
{
	label = label + "8"
	document.getElementById("calculation").value = label;
}

function nine()
{
	label = label + "9"
	document.getElementById("calculation").value = label;
}

function equal()
{
	if (label === "")
	{
		label = "0"
	}
	if (operation != "")
	{
		num2 = label;
	}
	operations()
}

function signchanger()
{
	if (sign === "+")
	{
		label = parseInt(label)
		num3 = label * 2
		label = label - num3
		label =  String(label)
		sign = "-"
		document.getElementById("calculation").value = label;
	} else if (sign === "-")
	{
		label = parseInt(label)
		num3 = label * 2
		label = (label - num3)
		label =  String(label)
		sign = "-"
		document.getElementById("calculation").value = label;

	}
}

function plus()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "+";
	label = ""
	
}

function minus()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "-";
	label = ""
	document.getElementById("btndot").disabled = false;
}

function multiplication()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "x";
	label = ""
	document.getElementById("btndot").disabled = false;
}

function division()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "/";
	label = ""
	document.getElementById("btndot").disabled = false;
}

function operations()
{
	if (operation === "+")
	{
		label = parseInt(label)
		num1 = parseInt(num1)
		num2 = parseInt(num2)
		label = num1 + num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)

		document.getElementById("calculation").value = label;

	} else if (operation === "-") 
	{
		label = parseInt(label)
		num1 = parseInt(num1)
		num2 = parseInt(num2)
		label = num1 - num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)
		
		document.getElementById("calculation").value = label;
	} else if (operation === "x")
	{
		label = parseInt(label)
		num1 = parseInt(num1)
		num2 = parseInt(num2)
		label = num1 * num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)
		
		document.getElementById("calculation").value = label;
	} else if (operation === "")
	{
		document.getElementById("calculation").value = label;
	} else if (operation === "/")
	{
		label = parseInt(label)
		num1 = parseInt(num1)
		num2 = parseInt(num2)
		label = num1 / num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)
		
		document.getElementById("calculation").value = label;
	}
	operation = "";
	num1 = "";
	num2 = "";
	document.getElementById("btndot").disabled = false;

}