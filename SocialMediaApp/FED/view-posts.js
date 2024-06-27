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
        else{
            let postData = result.data;
            let container = document.getElementById("post-container");

            postData.map((post,index)=>{
                let div = document.createElement("div");
                
                div.setAttribute("id",`${post.username}_${index+1}`);
                
                div.innerHTML = `
                <h1>TITLE : ${post.title}</h1>
                <hr>
                <p>Content: ${post.content}</p>
                <hr>
                <span>
                    <p><b>Author : </b> ${post.author}</p>
                    <p><b>Created On: </b> ${post.created_On}</p>
                </span>
                `;

                container.append(div)
                return;
            })
            
        }
    }else{
        alert(result.msg);
        window.location.href = "login.html"
    }
}
