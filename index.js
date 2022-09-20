// const damiData=[
//     {
//         taitel:"taitel 1",
//         body:"description1",

//     },
//     {
//         taitel:"taitel 2",
//         body:"description2",

//     }, {
//         taitel:"taitel 3",
//         body:"description3",

//     },
//     {
//         taitel:"taitel 4",
//         body:"description4",

//     },
//     {
//         taitel:"taitel 1",
//         body:"description1",

//     },
//     {
//         taitel:"taitel 2",
//         body:"description2",

//     }, {
//         taitel:"taitel 3",
//         body:"description3",

//     },
//     {
//         taitel:"taitel 4",
//         body:"description4",

//     }
// ]

// post jeson data fetch

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => loedData(data));


const postsElement = document.querySelector(".posts");

const loedData=(post)=>{
    post.map((post)=>{
        const cretPost=document.createElement("div");
        cretPost.classList.add("post");
        cretPost.innerHTML=`
     
            <h2 class="post-title">${post.title}</h2>
            <p class="description">${post.body}</p>
        `;
        postsElement.appendChild(cretPost);
     } )
   
   
}
