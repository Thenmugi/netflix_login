const signin=document.getElementById("sign_in").value;
const form=document.getElementById("form");
const email_error=document.getElementById("email_error");
const password_error=document.getElementById("password_error");
form.addEventListener("submit",(e)=>{
    if(!Validateinp()){
        e.preventDefault();  
    }
    else{
        storedinlocalstorage();
        const stored_username=localStorage.getItem("username")
        const stored_password=localStorage.getItem("password")
        console.log("Stored username:",stored_username)
        console.log("Stored password:",stored_password)
    }
})
function Validateinp(){
    let success=true;
    const usernameval=document.getElementById("username").value.trim();
    const passwordval=document.getElementById("password").value.trim();
    if(usernameval===""||!usernameval.includes("@")){
        email_error.textContent="Please enter a valid email address or phone number.";
        success=false;
    }
    else{
        email_error.textContent="";
        success=true;
    }
    if(passwordval===""||!(passwordval.length>4 && passwordval.length<60)){
        password_error.textContent="Your password must contain between 4 and 60 characters.";
        success=false;
    }
    else{
        password_error.textContent="";
        success=true;
    }
    return success;
}
function storedinlocalstorage(){
    const usernameval=document.getElementById("username").value.trim();
    const passwordval=document.getElementById("password").value.trim();

    localStorage.setItem("username",usernameval);
    localStorage.setItem("password",passwordval);
}


const stored_username=localStorage.getItem("username")
const stored_password=localStorage.getItem("password")
console.log(stored_username,stored_password)

