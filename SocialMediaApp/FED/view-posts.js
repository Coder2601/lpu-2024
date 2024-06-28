let container = document.getElementById("post-container");


async function validateToken() {
    let token = localStorage.getItem("token");

    let response = await fetch("http://localhost:5000/socialMedia/authToken/validateToken", {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Basic ${token}`
        }
    })

    let result = await response.json();
    console.log(result);


    if (result.status) {
        if (result.data.length <= 0) {
            document.getElementById("msg").innerHTML = `If there are no posts to display, create a new post by <a href="create-post.html">clicking here</a>.`
        }
        else {
            let postData = result.data;

            postData.map((post, index) => {
                let div = document.createElement("span");

                div.setAttribute("id", `${post.username}_${index + 1}`);
                div.setAttribute("class", "postBlocks");

                div.innerHTML = `
                <h1>TITLE : ${post.title}</h1>
                <hr>
                <p>Content: ${post.content}</p>
                <hr>
                <span>
                    <p><b>Author : </b> ${post.author}</p>
                    <p><b>Created On: </b> ${post.created_On}</p>
                </span>
                <br>
                <button onclick ="editPost('${post._id}')">Edit</button>
                <button onclick ="deletePost('${post._id}')">Delete</button>
                `;

                container.appendChild(div);
                return;
            })

        }
    } else {
        alert(result.msg);
        window.location.href = "login.html"
    }
}

function createPostPage() {
    window.location.href = "create-post.html"
}


async function handleAuthorPost(event) {
    let authorName = event.target.value;
    if (authorName != "") {
        
        let response = await fetch(`http://localhost:5000/socialMedia/posts/author/${authorName}`, {
            method: "GET",
            headers: { 'Content-type': 'application/json' }
        })
        let result = await response.json();
        console.log(result);

        if (result.status) {
            container.innerHTML = ""
            let postData = result.data;

            postData.map((post, index) => {
                let div = document.createElement("span");

                div.setAttribute("id", `${post.username}_${index + 1}`);
                div.setAttribute("class", "postBlocks");

                div.innerHTML = `
            <h1>TITLE : ${post.title}</h1>
            <hr>
            <p>Content: ${post.content}</p>
            <hr>
            <span>
                <p><b>Author : </b> ${post.author}</p>
                <p><b>Created On: </b> ${post.created_On}</p>
            </span>
            <br>
            <button onclick ="editPost('${post._id}')">Edit</button>
            <button onclick ="deletePost('${post._id}')">Delete</button>
            `;

                container.appendChild(div);
            })
        } else {
            document.getElementById("msg").innerText = result.msg;
        }
    }
    else{
        document.getElementById("msg").innerText = "Enter valid Author Name";
    }

}


function editPost(id){
    localStorage.setItem("editpostId", id);
    window.location.href = "edit-post.html";
    console.log(id);
}

async function deletePost(id){
    console.log(id);

    let response = await fetch(`http://localhost:5000/socialMedia/posts/deletePost/${id}`,{
        method:"DELETE",
        headers:{'Content-type':'application/json'}
    })

    let result = await response.json();
    console.log(result);

    if(result.status){
        alert(result.msg);
        window.location.reload();
    }else{
        alert("There's some problem in deleting the post.");
        window.location.reload();
    }
}