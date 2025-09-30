// List of articles in the /articles/ folder to display.
// In a production site, you might generate this list dynamically (with a backend or build step).
// For static sites, you have to manually maintain this array.
const articles = [
    {
        filename: "example-article.html",
        title: "Breaking News: Example Headline",
        date: "2025-09-30",
        author: "Jane Doe",
        summary: "This is a summary of the example article. It introduces the topic and entices the reader to click and read more."
    }
];

// Function to create article previews
function createArticlePreview(article) {
    return `
        <div class="article-preview">
            <h3><a href="articles/${article.filename}" target="_blank">${article.title}</a></h3>
            <div class="meta">By ${article.author} | ${article.date}</div>
            <p>${article.summary}</p>
            <a href="articles/${article.filename}" class="readmore" target="_blank">Read more &rarr;</a>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("news-container");
    container.innerHTML = articles.map(createArticlePreview).join('');
});