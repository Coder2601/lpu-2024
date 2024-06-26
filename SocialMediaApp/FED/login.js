let userObj = {};

function handleInput(event){
    userObj[event.target.id] = event.target.value;
}

async function login(){
    let result = await fetch("http://localhost:5000/socialMedia/user/login",{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(userObj)
    })   
}