let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let error = document.getElementById("error");
let success = document.getElementById("success");


function generateToken() {
    return Math.random(0, 100000).toString();
}


document.getElementById("signup").addEventListener("click", (e) => {
    if(fname.value == "" || lname.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "")
        {
            error.textContent = "Please enter all required fields!";
            error.style.color = "red";
        } else if ( password.value == confirmPassword.value) {
            let  users = JSON.parse(localStorage.getItem('users')?? "[]");
            let filteredUser = users.filter((user) => user.email == email.value);
            if(filteredUser.length > 0) {
                error.style.color = "red";
                error.textContent = "User already exists!!!";
                success.textContent = "";
            }else {
                users.push({
                    email:email.value,
                    password: password.value,
                    fname: fname.value,
                    lname: lname.value,
                    createdAt: new Date(),
                });
                localStorage.setItem("users", JSON.stringify(users)); 
                error.textContent = "";
                fname.value = "";
                lname.value = "";
                email.value = "";
                password.value = "";
                confirmPassword.value = "";
                success.textContent = "Signup Successful!";
                success.style.color = "green";
                error.textContent = "";
                setTimeout(()=>{
                    localStorage.setItem("currUser", JSON.stringify({
                        emial:email.value,
                        password: password.value,
                        token: generateToken()
                    }))
                    window.location.href = "../shop/index.html";
                }, 1000);
            }
        }
        else {
            error.textContent = "Make Sure password and confirm password matches!!";
            error.style.color = "red";
        }
        
})