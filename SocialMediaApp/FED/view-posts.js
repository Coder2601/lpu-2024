async function validateToken(){
    let token = localStorage.getItem("token");

    let response = await fetch("http://localhost:5000/socialMedia/authToken/validateToken",{
        method:"GET",
        headers:{
            'Content-type':'application/json',
            'Authorization':`Basic ${token}` 
        }
    })

    let result = await response.json();
    console.log(result);
}