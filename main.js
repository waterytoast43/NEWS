const articles = [
  {
    filename: "example-article.html",
    title: "Example article",
    date: "0001-01-01",
    author: "John Doe",
    summary: "Lucien sucks"
  }
];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
}

function createArticlePreview(article, index) {
  return `
    <div class="article-preview dark-glass" style="--delay: ${index * 0.15}s">
      <div class="shine"></div>
      <h3><a href="articles/${article.filename}" target="_blank">${article.title}</a></h3>
      <div class="meta">By ${article.author} | ${formatDate(article.date)}</div>
      <p>${article.summary}</p>
      <a href="articles/${article.filename}" class="readmore" target="_blank">Read more →</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-container");
  container.innerHTML = articles.map(createArticlePreview).join('');
});
