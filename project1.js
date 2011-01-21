function validate () {
	
	// Check whether the name input has a value.

	if (document.getElementById("Name").value == "") {
		
		// Check whether the error message is already shown.
		if (!document.getElementById("nameErrorField")) {
		
			// Create the html error message: <span id="nameErrorField" class="errorField">Your name is a required field.</span> and append it to the document.
			var nameErrorField = document.createElement("span");
			nameErrorField.setAttribute("id", "nameErrorField");
			nameErrorField.className = "errorField";
			nameErrorField.appendChild(document.createTextNode("Your name is a required field."));
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
			emailErrorField.appendChild(document.createTextNode("Your email is required."));
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
			phoneErrorField.appendChild(document.createTextNode("Your phone number is required."));
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
			addressErrorField.appendChild(document.createTextNode("Your address is required."));
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
			cityErrorField.appendChild(document.createTextNode("Your city is required."));
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
			stateErrorField.appendChild(document.createTextNode("Your state is required."));
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
			zipErrorField.appendChild(document.createTextNode("Your zip code is required."));
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
			genderErrorField.appendChild(document.createTextNode("Your gender is required."));
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
			classErrorField.appendChild(document.createTextNode("A course is required."));
			document.getElementById("inputCourseContainer").appendChild(classErrorField);
		}
	} else {
		var removeError = document.getElementById("classErrorField");
		if (removeError) {
			removeError.parentNode.removeChild(removeError);
		}		
	}

} 