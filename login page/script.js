
// Get the elements by their IDs
const signUpButton = document.getElementById('toggleSignUp');
const signInButton = document.getElementById('toggleSignIn');
const formContainer = document.getElementById('formContainer');

// Add event listener for the Sign Up button to activate the right panel
signUpButton.addEventListener('click', () => {
    formContainer.classList.add("right-panel-active");
});

// Add event listener for the Sign In button to deactivate the right panel
signInButton.addEventListener('click', () => {
    formContainer.classList.remove("right-panel-active");
});

// Function to handle form submission for sign up
function handleSignUp(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get input values from the sign-up form
    const name = document.querySelector('.sign-up-box input[type="text"]').value;
    const email = document.querySelector('.sign-up-box input[type="email"]').value;
    const password = document.querySelector('.sign-up-box input[type="password"]').value;
}

// Loop through sign-in forms to add form submission validation
const signInForms = document.getElementsByClassName('sign-in-box');
Array.from(signInForms).forEach(formBox => {
    const form = formBox.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const email = form.querySelector('input[type="email"]');
            const password = form.querySelector('input[type="password"]');

            // Check if email or password is empty
            if (email.value === '' || password.value === '') {
                event.preventDefault(); // Prevent form submission
                alert('Please fill in all required fields.');
            }
            else {
                // Clear input fields after submission
                email.value = "";
                password.value = "";
            }
        });
    }
});

// Loop through sign-up forms to add form submission validation
const signUpForms = document.getElementsByClassName('sign-up-box');
Array.from(signUpForms).forEach(formBox => {
    const form = formBox.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const email = form.querySelector('input[type="email"]');
            const password = form.querySelector('input[type="password"]');
            const name = form.querySelector('input[type="text"]');

            // Check if any of the fields are empty
            if (email.value === '' || password.value === '' || name.value === '') {
                event.preventDefault(); // Prevent form submission
                alert('Please fill in all required fields.');
            }
            else {
                // Clear input fields after submission
                email.value = "";
                password.value = "";
                name.value = "";
            }
        });
    }
});
