const articles = [
  {
    filename: "example-article.html",
    title: "Example article",
    date: "0001-01-01",
    author: "John Doe",
    category: "frig",
    summary: "Lucien sucks"
  },
  {
    filename: "example-article.html",
    title: "Example article",
    date: "0001-01-01",
    author: "John Doe",
    category: "Science",
    summary: "Lucien sucks"
  }
];

function renderCategoryPage() {
  const container = document.getElementById("category-container");
  if (!container) return;
  
  // Group by category
  const grouped = {};
  articles.forEach(a => {
    if (!grouped[a.category]) grouped[a.category] = [];
    grouped[a.category].push(a);
  });
  
  container.innerHTML = Object.entries(grouped).map(([cat, list]) => `
    <div class="category-section">
      <h2>${cat}</h2>
      ${list.map(createArticlePreview).join('')}
    </div>
  `).join('');
}

function createArticlePreview(article) {
  return `
    <div class="article-preview">
      <h3><a href="${article.filename}">${article.title}</a></h3>
      <p>${article.summary}</p>
      <small>By ${article.author} on ${article.date}</small>
    </div>
  `;
}


document.addEventListener("DOMContentLoaded", renderCategoryPage);
