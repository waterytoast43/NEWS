const articles = [
  {
    filename: "example-article.html",
    title: "Quantum Tech Breakthrough!",
    date: "2025-09-30",
    author: "Alex Rivera",
    summary: "Scientists have discovered a new material that bends light in unexpected ways. Discover the implications for future tech."
  },
  {
    filename: "example-article2.html",
    title: "Urban Gardens Transform Cities",
    date: "2025-09-28",
    author: "Samira Patel",
    summary: "Cities are going green in vertical gardens, bringing nature into dense urban areas and improving air quality."
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
