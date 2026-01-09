let form = document.querySelector('form');
form.addEventListener('submit', (e) => {

    e.preventDefault();

    let fn = document.getElementById('fn').value;
    let ln = document.getElementById('ln').value;
    let pass = document.getElementById('pass').value;
    let cp = document.getElementById('cp').value;
    let mail = document.getElementById('mail').value;
    let num = document.getElementById('num').value;

    let fnerror = document.getElementById('firsterror');
    let lnerror = document.getElementById('lasterror');
    let passerror = document.getElementById('passerror');
    let cperror = document.getElementById('cperror');
    let numerror = document.getElementById('numerror');
    let mailerror = document.getElementById('mailerror');

    fnerror.textContent = ""
    lnerror.textContent = ""
    passerror.textContent = ""
    cperror.textContent = ""
    numerror.textContent = ""
    mailerror.textContent = "";

    let valid = true;
    let firstReg = /^[a-zA-Z0-9]{3,}$/;
    let fn1 = fn.trim();

    if (!fn1) {
        fnerror.textContent = "cannot be empty";
        valid = false;
    }
    else if (!firstReg.test(fn1)) {
        fnerror.textContent = "must be at least 3 characters (letters or numbers only)";
        valid = false;
    }


    let lastReg = /^[a-zA-Z0-9]{3,}$/;
    let ln1 = ln.trim();
    if (!ln1) {
        lnerror.textContent = "can not be empty";
        valid = false;
    }
    else if (!lastReg.test(ln1)) {
        lnerror.textContent = 'must be 3 charracters which is uppercase,lowercase and special symbol';
        valid = false;
    }


    let emailReg = /^[^\@s]+@[^\@s]+\.[^\@s]+$/;
    let em1 = mail.trim();
    if (!em1) {
        mailerror.textContent = "can not be empty";
        valid = false;
    }
    else if (!emailReg.test(em1)) {
        mailerror.textContent = "enter valid mail id";
        valid = false;
    }

    let numReg = /^[6-9]\d{9,}$/;
    let num1 = num.trim();
    if (!num1) {
        numerror.textContent = "can not be empty";
        valid = false
    }
    else if (!numReg.test(num1)) {
        numerror.textContent = 'enter valid 10 digits';
        valid = false;
    }

    let passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[&*#@$]).{5,}$/;
    let pass1 = pass.trim();
    if (!pass1) {
        passerror.textContent = "can not be empty"
        valid = false;
    }
    else if (!passReg.test(pass1)) {
        passerror.textContent = "password shoulc contain uppercase,lowercase ans special symbol";
        valid = false;
    }

    if (pass !== cp) {
        cperror.textContent = "password should match";
        valid = false;
    }

    if (valid) {
        let userData = {
            firstName: fn,
            lastName: ln,
            password: pass,
            confirmpassword: cp,
            Email: mail,
            number: num
        }
        localStorage.setItem('registerData', JSON.stringify(userData))
        alert("registered successfully")
        location.href = "login.html"
    }




})  
