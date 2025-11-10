document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form[action="/login"]');

    if (loginForm) {
        const newForm = loginForm.cloneNode(true);
        loginForm.parentNode.replaceChild(newForm, loginForm);

        newForm.addEventListener('submit', function(event) {
            console.log('Login form submitted');
        });

        const urlParams = new URLSearchParams(window.location.search);
        const errorMessage = document.getElementById('errorMessage');
        const logoutMessage = document.getElementById('logoutMessage');

        if (urlParams.has('error') && errorMessage) {
            errorMessage.style.display = 'block';
        }
        if (urlParams.has('logout') && logoutMessage) {
            logoutMessage.style.display = 'block';
        }
    }
});