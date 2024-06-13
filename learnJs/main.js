let myObj = {};


function inputs(event){
    myObj[event.target.id] =  event.target.value;
    
    console.log(myObj);
}

async function signup(event){
    event.preventDefault();
    console.log(myObj);

    let response = await fetch('http://localhost:5000/allUserData/createUser',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(myObj)
    })

    console.log(await response.json());
}
