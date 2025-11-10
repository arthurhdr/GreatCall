document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const userData = {
                username: username,
                email: email,
                password: password
            };

            console.log('Attempting to register:', userData);

            fetch('/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            })
                .then(response => {
                    if (response.ok) {
                        alert('Registration successful! Redirecting to login...');
                        window.location.href = '/login.html';
                    } else {
                        return response.text().then(errorMessage => {
                            alert('Registration failed: ' + errorMessage);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred during registration.');
                });
        });
    } else {
        console.error('Register form not found!');
    }
});