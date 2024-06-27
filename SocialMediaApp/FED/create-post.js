let postObj = {};
let token = localStorage.getItem("token");

function handleInput(event){
    postObj[event.target.id] = event.target.value;
}

async function createPost(event){
    event.preventDefault();

    let response = await fetch("http://localhost:5000/socialMedia/posts/createPost",{
        method:"POST",
        headers:{
            'Content-type':'application/json',
            'Authorization':`Basic ${token}`
        },
        body: JSON.stringify(postObj)
    });

    let result = await response.json();
    console.log(result);
}