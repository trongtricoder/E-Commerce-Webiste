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
        if (mail === users[i].mail) {
            if (password === users[i].password) {
              document.getElementById("errorAlert").textContent = "Login successful";
              errorAlert.style.display = "block";
              errorAlert.classList.remove("error"); 
              errorAlert.classList.add("success"); 
      
              setTimeout(() => {
                window.location.href = "/index.html";
              }, 1000);
              return; 
            } else {
              document.getElementById("errorAlert").textContent = "The password doesn't match with an existing password.";
              errorAlert.style.display = "block";
              errorAlert.classList.remove("success"); 
              errorAlert.classList.add("error"); 
              return; 
            }
          }
        }
        document.getElementById("errorAlert").textContent = "The email address doesn't match an existing account.";
        errorAlert.style.display = "block";
        errorAlert.classList.remove("success"); 
        errorAlert.classList.add("error");
        }
);


function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(email);
}