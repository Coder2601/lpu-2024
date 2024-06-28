let postId = localStorage.getItem("editpostId");

async function handlePostData(){
    let response = await fetch(`http://localhost:5000/socialMedia/posts/getPost/${postId}`,{
        method:"GET",
        headers:{'Content-type':'application/json'}
    })

    let result = await response.json();
    console.log(result);

    
}