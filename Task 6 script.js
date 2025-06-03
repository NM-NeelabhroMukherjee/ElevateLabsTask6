document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();
    
    // Clear previous messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate inputs
    let isValid = true;
    
    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Email validation
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    } 
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Message sent successfully!';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}