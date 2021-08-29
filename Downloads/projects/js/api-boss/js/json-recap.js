const loadComments = () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
        .then(res => res.json())
        .then(data => displayComments(data));
}
loadComments();
const displayComments = comments => {
    const commentsDiv = document.getElementById("comments");
    comments.forEach(comment => {
        console.log(comment);

        const div = document.createElement("div");
        div.innerHTML = `
        <div class = " border  mt-3 border-success p-4">
            <h4 class="mb-0 fs-5 fw-bold">${comment.name}</h4>
            <h5 class="fs-6 mt-0 mb-4">${comment.email}</h4>
            <button onclick = "showComment(${comment.id})">Show Comment </button>
        </div>
        `;
        commentsDiv.appendChild(div);
    })
}
const showComment = (comment) => {

    const url = `https://jsonplaceholder.typicode.com/posts/${comment}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showOnClick(data));
}
const showOnClick = comment => {
    // console.log(comment)
    const commentBox = document.getElementById("comment-box");
    commentBox.textContent = "";
    const div = document.createElement("div");
    div.innerHTML = `
    <div class = " border  mt-3  border-success p-4">
        <h4 class="mb-0 fs-5 fw-bold">${comment.title}</h4>
        <p>${comment.body}</p>
    </div>
    `;
    commentBox.appendChild(div);
}