let url = new URL(location.href);
let userPostId = url.searchParams.get('userPostId');

fetch(`https://jsonplaceholder.typicode.com/posts/${userPostId}`)
        .then(response => response.json())
        .then(post => {
            let posts = document.createElement('div');
            posts.classList.add('posts-details');

            let postCard = document.createElement('div');
            postCard.innerHTML = `PostID: ${post.id}<br>title: ${post.title}`
            let postBody = document.createElement('div')
            postBody.innerText = `body: ${post.body}`;

            posts.append(postCard, postBody)
            document.body.appendChild(posts)
        })

function commentsFetch() {
    return (fetch(`https://jsonplaceholder.typicode.com/posts/${userPostId}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                let comments = document.createElement('div');
                comments.classList.add('comments-details');

                let commentDiv = document.createElement('div');
                commentDiv.innerHTML = `<br> <b>name:</b>  ${comment.name}<br> <b>email:</b> ${comment.email}<br> <b>body:</b> ${comment.body}`;

                comments.appendChild(commentDiv)
                document.body.appendChild(comments)
            }
        }))
}

setTimeout(commentsFetch, 100)
