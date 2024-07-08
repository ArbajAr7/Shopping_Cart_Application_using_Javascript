 
let currUser = localStorage.getItem('currUser'); 
if(currUser) {
    window.location.href = "shop/index.html"
} else {
    //take user back to login!
    document.getElementById("loginbtn").addEventListener("click", () => {
        window.location.href = "/login/login.html";
    });
    document.getElementById("signupbtn").addEventListener("click", () => {
        window.location.href = "/signup/index.html";
    });  
}


