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


    if(result.status){
        if(result.data.length <= 0){
            document.getElementById("msg").innerHTML = `If there are no posts to display, create a new post by <a href="create-post.html">clicking here</a>.`
        }
    }else{
        alert(result.msg);
        window.location.href = "login.html"
    }
}
