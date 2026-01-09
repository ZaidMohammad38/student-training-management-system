let loginForm = document.querySelector('form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let loginUser = document.getElementById('user').value;
    let loginPass = document.getElementById('pass').value;

    let userError = document.getElementById('usererror');
    let passError = document.getElementById('passerror');

    userError.textContent = "";
    passError.textContent = "";

    let valid = true;

    let userReg = /^[a-zA-Z0-9]{3,}$/;
    let passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&*#@$]).{8,}$/;

    if (!userReg.test(loginUser)) {
        userError.textContent = "Username must be at least 3 characters";
        valid = false;
    }

    if (!passReg.test(loginPass)) {
        passError.textContent = "Password must be 8 characters with upper, lower, number & symbol";
        valid = false;
    }

    if (!valid) return;

    let data = JSON.parse(localStorage.getItem('registerData'));

    if (!data) {
        alert("User not found");
    } else if (loginUser === data.firstName || email === data.Email
        && loginPass === data.password) {
        alert("Login successful");
        location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
});
