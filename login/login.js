let email = document.getElementById('email');
let password = document.getElementById('password');

function generateToken() {
    return Math.random(0, 100000).toString();
}

document.getElementById("login").addEventListener("click", () => {
    if(email.value == "" || password.value == "") {
        //please make sure its not empty
    }else {
            let users = JSON.parse(localStorage.getItem("users") ?? "[]");
            if(users.length > 0) {
                let user = users.filter((user) => user.email ==email.value);
                if(user.length > 0) {
                    //user exists
                    let obj = user[0];
                    if (obj.password == password.value) {
                        //login
                        localStorage.setItem("currUser", JSON.stringify({
                            emial:email.value,
                            password: password.value,
                            token: generateToken()
                        }))
                        document.getElementById("error").style.display= "none";
                        window.location.href = "../shop/index.html";
                    }
                } else {
                    document.getElementById("error").innerHTML = "User not found Please Signup!!";
                    document.getElementById("error").style.color= "red";
                }
            } else {
                //please signup
            }
        }
    
})