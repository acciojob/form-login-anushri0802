function getFormvalue() {
    //Write your code here

	// Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Retrieve the values from the input fields
    const firstName = document.forms['form1']['fname'].value.trim(); // .trim() to remove any leading or trailing spaces
    const lastName = document.forms['form1']['lname'].value.trim();

    // Check if both fields are not empty
    if (firstName && lastName) {
        // Display the full name using alert
        alert(`${firstName} ${lastName}`);
    } else {
        // If either field is empty, display an error message
        alert("Please enter both first and last names.");
    }

}
