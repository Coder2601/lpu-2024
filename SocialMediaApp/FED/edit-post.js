let postId = localStorage.getItem("editpostId");
let token = localStorage.getItem("token");
let postObj = {};

async function handlePostData() {
    if (!postId) {
        alert("There is no post selected for editing.");
        window.location.href = "view-posts.html";
        return;
    }

    let response = await fetch(`http://localhost:5000/socialMedia/posts/getPost/${postId}`, {
        method: "GET",
        headers: { 
            'Content-type': 'application/json',
            'Authorization':`Basic ${token}`
         }
    })

    let result = await response.json();
    // console.log(result);

    if (result.status) {
        postObj = {...result.data};
        document.getElementById("title").value = result.data.title;
        document.getElementById("content").value = result.data.content;
        document.getElementById("category").value = result.data.category;
    }else{
        alert(result.msg);
        if(result.msg == "Error in finding the Post"){
            window.location.href = "view-posts.html"
        }else{
            localStorage.removeItem("token");
            localStorage.removeItem("editpostId");
            window.location.href = "login.html"
        }
    }

}

function handleInput(event){
    postObj[event.target.id] = event.target.value;
}

async function editPost(event){
    event.preventDefault();
    if (!postId) {
        alert("There is no post selected for editing.");
        window.location.href = "view-posts.html";
        return;
    }

    let response = await fetch(`http://localhost:5000/socialMedia/posts/editPost/${postId}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json',
            'Authorization':`Basic ${token}`
        },
        body:JSON.stringify(postObj)
    })

    let result = await response.json();
    console.log(result);

    if(result.status){
        alert(result.msg);
        window.location.href = "view-posts.html";
    }
    else{
        if(result.msg = "Unauthorised Access")
        {
            alert(result.msg);
            localStorage.removeItem("token");
            localStorage.removeItem("editpostId");
            window.location.href = "login.html"
        }else{
            alert(result.msg);
            window.location.href = "view-posts.html";
        }
    }
}