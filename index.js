let form = document.getElementById("form")
let input = document.getElementById("input")
let post = document.getElementById("post")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    formValidation()
})

let formValidation = ()=>{
    let inputPost = input.value
    if(inputPost.length === 0){
        alert("Please Enter Your Post")
        // console.log("write here");
    }else{
        acceptData()
    }
}


let data = {};

let acceptData = ()=>{
    data["text"] = input.value
    createPost()
}

let createPost = ()=>{
    post.innerHTML+= `
     <div class="post-content">
        <p>${data.text}</p>
            <span class="options">
                <i onClick = editPost(this) class="fa-solid fa-pen-to-square"></i>
                <i onClick = deletePost(this) class="fa-solid fa-trash"></i>
                    </span>
                </div>`

    input.value = ""

};

let deletePost = (e)=>{
    e.parentElement.parentElement.remove()
}

let editPost = (event)=>{
    input.value = event.parentElement.previousElementSibling.innerHTML
    event.parentElement.parentElement.remove()
}