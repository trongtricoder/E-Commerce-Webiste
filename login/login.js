const loginBtn = document.getElementById("login-btn");
const mailInput = document.getElementById("mail");
const passwordInput = document.getElementById("pass");
const users = JSON.parse(localStorage.accounts)

loginBtn.addEventListener("click", () => {
    event.preventDefault();

    const mail = mailInput.value.trim();
    const password = passwordInput.value.trim();
      
if (mail.length === 0) {
    errorAlert.textContent = "Please enter your email";
    errorAlert.style.display = "block";
    return;
}

if (!validateEmail(mail)) {
    errorAlert.textContent = "Please enter a valid email address";
    errorAlert.style.display = "block";
    return;
}

if (password.length < 8) {
    errorAlert.textContent = "Password must be at least 8 characters long";
    errorAlert.style.display = "block";
    return;   
}
    for(i = 0; i < users.length; i++){
            if (mail == users[i].mail && password == users[i].password){
                document.getElementById("errorAlert").textContent = "Login successfully";
                setTimeout(() => {
                window.location.href = "index.html";
                }, 1000);
            }
            else{
                errorAlert.textContent = "Wrong password";
                errorAlert.style.display = "block";
            }
        }
    }
);


function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(email);
}