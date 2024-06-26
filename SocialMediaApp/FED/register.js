let userObj = {};

function handleInput(event){
    userObj[event.target.id] = event.target.value;
    // console.log(userObj);
    
}

function handlePass(event){
    let prevPass = userObj.password;
    let cnfPass = event.target.value;

    if(prevPass == cnfPass){
        document.getElementById("msg").innerText = "Passwords Matched";
        document.getElementById("registerBtn").disabled = false;
        return true;
    }else{
        document.getElementById("msg").innerText = "Passwords Didn't Matched"
        return false;
    }
}

async function register(event){

    event.preventDefault();

    let result = await fetch("http://localhost:5000/socialMedia/user/register",{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(userObj)
    })
    
    // const response = await result;
    // const data = await response.json();
    console.log(result);
    // alert("Registration Successful");
    // window.location.href = 'login.html';
}