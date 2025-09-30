// ===== Article Data =====
// In production, you can still keep this as a fallback or starter list.
const articles = [
  {
    filename: "example-article.html",
    title: "Breaking News: Example Headline",
    date: "2025-09-30",
    author: "Jane Doe",
    summary:
      "This is a summary of the example article. It introduces the topic and entices the reader to click and read more."
  }
];

// ===== Utility: Date formatter =====
function formatDate(isoDate) {
  try {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(isoDate).toLocaleDateString(undefined, options);
  } catch {
    return isoDate;
  }
}

// ===== Create Article Preview =====
function createArticlePreview(article) {
  return `
    <div class="article-preview glass-panel fade-in">
      <h3>
        <a href="articles/${article.filename}" target="_blank" rel="noopener">
          ${article.title}
        </a>
      </h3>
      <div class="meta">
        By ${article.author} &nbsp;|&nbsp; ${formatDate(article.date)}
      </div>
      <p>${article.summary}</p>
      <a href="articles/${article.filename}" class="readmore" target="_blank" rel="noopener">
        Read more &rarr;
      </a>
    </div>
  `;
}

// ===== Render Articles =====
function renderArticles(list) {
  const container = document.getElementById("news-container");
  if (!list || !list.length) {
    container.innerHTML =
      `<div class="empty-state glass-panel">No articles available yet.</div>`;
    return;
  }
  container.innerHTML = list.map(createArticlePreview).join("");
}

// ===== Auto Fetch Optional =====
// If you later host a /articles.json, this will load it automatically.
async function fetchArticles() {
  try {
    const res = await fetch("/articles.json");
    if (!res.ok) throw new Error("No JSON found");
    const data = await res.json();
    renderArticles(data);
  } catch {
    // fallback to local array if fetch fails
    renderArticles(articles);
  }
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", fetchArticles);
