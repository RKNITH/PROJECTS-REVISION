// Add dynamic year in footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Search functionality for blog posts
function searchBlog() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const blogPosts = document.querySelectorAll('.blog-post');

    blogPosts.forEach(post => {
        const title = post.querySelector('.blog-title').textContent.toLowerCase();
        const content = post.querySelector('.blog-content').textContent.toLowerCase();

        if (title.includes(input) || content.includes(input)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}
