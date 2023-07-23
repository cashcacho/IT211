// Function to validate password 
function validatePassword(password) {

  // Initialize validation flags
  let hasLength = false;
  let hasUppercase = false;
  let hasLowercase = false;

  // Check length
  if(password.length >= 8) {
    hasLength = true;
  }

  // Check for uppercase
  if(password.match(/[A-Z]/)) {
    hasUppercase = true;
  } 

  // Check for lowercase
  if(password.match(/[a-z]/)) {
    hasLowercase = true;
  }

  // Return validation result
  return hasLength && hasUppercase && hasLowercase;

}

// Function to validate form
function validateForm(firstName, lastName, password) {
  
  // Check first and last name
  if(!firstName || !lastName) {
    console.log('First and last name cannot be blank');
    return;
  }

  // Validate password
  if(!validatePassword(password)) {
    console.log('Password must be at least 8 characters, have 1 uppercase and 1 lowercase letter');
    return; 
  }

  // If all validation passed
  console.log('Form is valid');

}

// Example usage
validateForm('Justine', 'Cacho', 'Hello123');