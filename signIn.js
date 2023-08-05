
let mail = document.getElementById("email");
let password = document.getElementById("password");
let htag=document.getElementById("give")
let form = document.querySelector("form");
let arr = JSON.parse(localStorage.getItem("account-data"));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj1 = {
        mailInp: mail.value,
        passInp: password.value,
    };
    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i].email == obj1.mailInp &&
            arr[i].password == obj1.passInp
        ) {
           alert("Sign in Successful");
           window.location.href = "./product.html"
        } else {
            htag.innerText="Fill righ information"
            // alert("Wrong Credentials");
            
        }
    }
});