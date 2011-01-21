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
	
/*	var addressErrorField = document.createElement("span");
	addressErrorField.className = "errorField";
	addressErrorField.appendChild(document.createTextNode("Your address is required."));
	document.getElementById("inputAddressContainer").appendChild(addressErrorField);
	
	var cityErrorField = document.createElement("span");
	cityErrorField.className = "errorField";
	cityErrorField.appendChild(document.createTextNode("Your city is required."));
	document.getElementById("inputCityContainer").appendChild(cityErrorField);
*/	
} 