document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById("posts");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length === 0) {
        postsContainer.innerHTML = "<p>No blog posts available.</p>";
    } else {
        posts.forEach(post => {
            const postElement = document.createElement("article");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><em>Author: ${post.username}</em></p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});
