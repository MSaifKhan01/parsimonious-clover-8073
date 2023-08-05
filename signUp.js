let myform=document.querySelector("form")
  let nameInp=document.getElementById("name")
  let emailInp=document.getElementById("email")
  let passInp=document.getElementById("password")

  let sData=JSON.parse(localStorage.getItem("account-data"))
  if(sData==null){
     sData=[]
    }
    myform.addEventListener("submit",(e)=>{
      e.preventDefault();
      let formData={
            name: nameInp.value,
            email: emailInp.value,
            password:passInp.value
        };
        sData.push(formData)
        localStorage.setItem("account-data",JSON.stringify(sData))
        window.location.href = "./index.html"
    })