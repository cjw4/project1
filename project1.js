function validate () { 
	
	// Check whether the name input has a value.

	if (document.getElementById("Name").value == "") {
		
		// Check whether the error message is already shown.
		if (!document.getElementById("nameErrorField")) {
		
			// Create the html error message: <span id="nameErrorField" class="errorField">Your name is a required field.</span> and append it to the document.
			var nameErrorField = document.createElement("span");
			nameErrorField.setAttribute("id", "nameErrorField");
			nameErrorField.className = "errorField";
			nameErrorField.appendChild(document.createTextNode("You must provide a name."));
			document.getElementById("inputNameContainer").appendChild(nameErrorField);	
		}
	
	} else {	
		
		// Check to see if the error is being displayed.
		var removeError = document.getElementById("nameErrorField");
		
		// Remove the error if it's being displayed.
		if (removeError) {
			removeError.parentNode.removeChild(removeError);		
		}
	}
	
	
	// Email validation
	
	if (document.getElementById("Email").value == "") {
		if (!document.getElementById("emailErrorField")) {
			var emailErrorField = document.createElement("span");
			emailErrorField.setAttribute("id", "emailErrorField");
			emailErrorField.className = "errorField";
			emailErrorField.appendChild(document.createTextNode("You must provide an email."));
			document.getElementById("inputEmailContainer").appendChild(emailErrorField);
		}
	} else {
		var removeError = document.getElementById("emailErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}
	
	// Phone Number validation
	
	if ((document.getElementById("Phone1").value == "") || (document.getElementById("Phone2").value == "") || (document.getElementById("Phone3").value == "")) {
		if (!document.getElementById("phoneErrorField")) {
			var phoneErrorField = document.createElement("span");
			phoneErrorField.setAttribute("id", "phoneErrorField");
			phoneErrorField.className = "errorField";
			phoneErrorField.appendChild(document.createTextNode("You must provide a phone number."));
			document.getElementById("inputPhoneContainer").appendChild(phoneErrorField);
		}
	} else {
		var removeError = document.getElementById("phoneErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}
	
	// Address validation
	
	if (document.getElementById("Address").value == "") {
		if (!document.getElementById("addressErrorField")) {
			var addressErrorField = document.createElement("span");
			addressErrorField.setAttribute("id", "addressErrorField");
			addressErrorField.className = "errorField";
			addressErrorField.appendChild(document.createTextNode("You must provide an address."));
			document.getElementById("inputAddressContainer").appendChild(addressErrorField);
		}
	} else {
		var removeError = document.getElementById("addressErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}
	
	// City validation
	
	if (document.getElementById("City").value == "") {
		if (!document.getElementById("cityErrorField")) {
			var cityErrorField = document.createElement("span");
			cityErrorField.setAttribute("id", "cityErrorField");
			cityErrorField.className = "errorField";
			cityErrorField.appendChild(document.createTextNode("Your must provide a city."));
			document.getElementById("inputCityContainer").appendChild(cityErrorField);
		}
	} else {
		var removeError = document.getElementById("cityErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}
	
	// State validation
	
	if (document.getElementById("State").value == "None") {
		if (!document.getElementById("stateErrorField")) {
			var stateErrorField = document.createElement("span");
			stateErrorField.setAttribute("id", "stateErrorField");
			stateErrorField.className = "errorField";
			stateErrorField.appendChild(document.createTextNode("You must select a state."));
			document.getElementById("inputStateContainer").appendChild(stateErrorField);
		}
	} else {
		var removeError = document.getElementById("stateErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}
	
	// Zip validation
	
	if (document.getElementById("Zip").value == "") {
		if (!document.getElementById("zipErrorField")) {
			var zipErrorField = document.createElement("span");
			zipErrorField.setAttribute("id", "zipErrorField");
			zipErrorField.className = "errorField";
			zipErrorField.appendChild(document.createTextNode("You must provide a zip code."));
			document.getElementById("inputZipContainer").appendChild(zipErrorField);
		}
	} else {
		var removeError = document.getElementById("zipErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}
	
	// Gender validation
	
	if ((!document.getElementById("male").checked) && (!document.getElementById("female").checked)) {
		if (!document.getElementById("genderErrorField")) {
			var genderErrorField = document.createElement("span");
			genderErrorField.setAttribute("id", "genderErrorField");
			genderErrorField.className = "errorField";
			genderErrorField.appendChild(document.createTextNode("You must select a gender."));
			document.getElementById("inputGenderContainer").appendChild(genderErrorField);
		}
	} else {
		var removeError = document.getElementById("genderErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}
	
	// Course validation
	
	if ((!document.getElementById("php").checked) && (!document.getElementById("java").checked) && (!document.getElementById("rails").checked)) {
		if (!document.getElementById("classErrorField")) {
			var classErrorField = document.createElement("span");
			classErrorField.setAttribute("id", "classErrorField");
			classErrorField.className = "errorField";
			classErrorField.appendChild(document.createTextNode("You must select a course."));
			document.getElementById("inputCourseContainer").appendChild(classErrorField);
		}
	} else {
		var removeError = document.getElementById("classErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}
	
	// Showing the valid input 
	if ((!document.getElementById("nameErrorField")) && (!document.getElementById("emailErrorField")) && (!document.getElementById("phoneErrorField")) 
	&& (!document.getElementById("addressErrorField")) && (!document.getElementById("cityErrorField")) && (!document.getElementById("stateErrorField"))
	&& (!document.getElementById("zipErrorField")) && (!document.getElementById("genderErrorField")) && (!document.getElementById("classErrorField"))) {
		
		if (!document.getElementById("output")) {
			
		// Create: <div id="output">You have filled out the form validly. Here is what you said:</div>
		var output = document.createElement("div");
		output.setAttribute("id", "output");
		output.appendChild(document.createTextNode("You have filled out the form validly. Here is what you said:"));
		document.getElementById("form").appendChild(output);
		
		// Create: <div id="nameOutput">Name: Chris</div> and append it to the output div.
		var nameValue = document.getElementById("Name").value;
		var nameOutput = document.createElement("div");
		nameOutput.setAttribute("id", "nameOutput");
		nameOutput.appendChild(document.createTextNode("Name: " + nameValue));
		document.getElementById("output").appendChild(nameOutput);
		
		//Email
		var emailValue = document.getElementById("Email").value;
		var emailOutput = document.createElement("div");
		emailOutput.setAttribute("id", "emailOutput");
		emailOutput.appendChild(document.createTextNode("Email: " + emailValue));
		document.getElementById("output").appendChild(emailOutput);
		
		//Phone
		var phoneValue1 = document.getElementById("Phone1").value;
		var phoneValue2 = document.getElementById("Phone2").value;
		var phoneValue3 = document.getElementById("Phone3").value;
		var phoneOutput = document.createElement("div");
		phoneOutput.setAttribute("id", "emailOutput");
		phoneOutput.appendChild(document.createTextNode("Phone: (" + phoneValue1 + ") " + phoneValue2 + "-" + phoneValue3));
		document.getElementById("output").appendChild(phoneOutput);
		
		//Address
		var addressValue = document.getElementById("Address").value;
		var addressOutput = document.createElement("div");
		addressOutput.setAttribute("id", "emailOutput");
		addressOutput.appendChild(document.createTextNode("Address: " + addressValue));
		document.getElementById("output").appendChild(addressOutput);
		
		//City
		var cityValue = document.getElementById("City").value;
		var cityOutput = document.createElement("div");
		cityOutput.setAttribute("id", "cityOutput");
		cityOutput.appendChild(document.createTextNode("City: " + cityValue));
		document.getElementById("output").appendChild(cityOutput);
		
		//State
		var stateValue = document.getElementById("State").value;
		var stateOutput = document.createElement("div");
		stateOutput.setAttribute("id", "stateOutput");
		stateOutput.appendChild(document.createTextNode("State: " + stateValue));
		document.getElementById("output").appendChild(stateOutput);
	
		//Zip code
		var zipValue = document.getElementById("Zip").value;
		var zipOutput = document.createElement("div");
		zipOutput.setAttribute("id", "zipOutput");
		zipOutput.appendChild(document.createTextNode("Zip Code: " + zipValue));
		document.getElementById("output").appendChild(zipOutput);
		
		//Gender
		if (document.getElementById("male").checked) {
			var genderValue = "male";
		} else {
			var genderValue = "female";
		}
		var genderOutput = document.createElement("div");
		genderOutput.appendChild(document.createTextNode("Gender: " + genderValue));
		document.getElementById("output").appendChild(genderOutput);
		
		//Previous Courses
		var phpValue = document.getElementById("php").checked;
		var javaValue = document.getElementById("java").checked;
		var railsValue = document.getElementById("rails").checked;
		coursesOutput = document.createElement("div");
		coursesOutput.setAttribute("id", "coursesOutput");
		
		
		document.getElementById("output").appendChild(coursesOutput);
		
		} else {
		
		}
	} else {
		
		var removeOutput = document.getElementById("output");
		if (removeOutput) {
			removeOutput.parentNode.removeChild(removeOutput);
		}
	}

} 