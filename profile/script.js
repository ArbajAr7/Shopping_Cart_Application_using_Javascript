// Write your script here
let currUser = localStorage.getItem('currUser'); 
if(currUser) {
    document.getElementById('saveinfobtn').addEventListener("click",()=>{
        let firstname = document.getElementById('fname').value;
        let lastname = document.getElementById('lname').value;
        if(firstname != "" && lastname != "") {
            document.getElementById("error").style.display ="none";
            document.getElementById("success").style.display ="none";
            document.getElementById('fname').value = "";
            document.getElementById('lname').value = "";
            let users = JSON.parse(localStorage.getItem('users'));
            let currUser = JSON.parse(localStorage.getItem('currUser'));
            console.log(currUser.emial);
            users.forEach(item => {
                if (currUser.emial == item.email) {
                    item.fname = firstname;
                    console.log(item.fname);
                    item.lname = lastname;
                    console.log(item.lname);
                    document.getElementById("success").style.display ="block";
                } else{
                    console.log(item.emial);
                }
            });
            localStorage.setItem("users", JSON.stringify(users));
            
        } else {
            console.log("nothing to show");
            document.getElementById("error").style.display ="block";
            document.getElementById("success").style.display ="none";
        }
    });


    document.getElementById("changepassword").addEventListener("click", () => {
        let oldpass = document.getElementById('oldpass').value;
        let newpass = document.getElementById('newpass').value;
        let confirmpass = document.getElementById('confirmpass').value;
        // console.log(oldpass);
        // console.log(newpass);
        // console.log(confirmpass);
        if(oldpass!="" && newpass !="" && confirmpass !=""){
            let users = JSON.parse(localStorage.getItem('users'));
            let currUser = JSON.parse(localStorage.getItem('currUser'));
            if(oldpass != currUser.password) {
                document.getElementById("error2").innerHTML = `Please Enter correct Old Password`;
                document.getElementById("error2").style.display = "block";
                document.getElementById("success2").style.display = "none";

            } else if(newpass == confirmpass){
                document.getElementById("error2").style.display = "none";
                console.log("old pass correct and both pass matched");
                document.getElementById("success2").style.display = "block";
                currUser.password = newpass;
                localStorage.setItem("currUser", JSON.stringify(currUser));
                users.forEach(item => {
                    if(oldpass == item.password){
                        item.password = newpass
                    }
                });

                localStorage.setItem("users", JSON.stringify(users));
                document.getElementById('oldpass').value="";
                document.getElementById('newpass').value="";
                document.getElementById('confirmpass').value="";
                
            } else {
                document.getElementById("error2").innerHTML = `Please match new password and Confirm password!!`;
                document.getElementById("error2").style.display = "block";
                document.getElementById("success2").style.display = "none";

            }
        } else {

        }

    })
    

    document.getElementById("logout").addEventListener("click",()=>{
        localStorage.removeItem("currUser");
        window.location.href = "../index.html"
      });
      document.getElementById("logoutbtn").addEventListener("click",()=>{
        localStorage.removeItem("currUser");
        window.location.href = "../index.html"
      });
} else {
    //take user back to login!
    window.location.href = "../login/login.html"
}