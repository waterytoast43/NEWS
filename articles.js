const articles = [
  {
    filename: "example-article.html",
    title: "Quantum Tech Breakthrough!",
    date: "2025-09-30",
    author: "Alex Rivera",
    category: "Science",
    summary: "Scientists have discovered a new material that bends light in unexpected ways."
  },
  {
    filename: "example-article2.html",
    title: "Urban Gardens Transform Cities",
    date: "2025-09-28",
    author: "Samira Patel",
    category: "Environment",
    summary: "Cities are going green in vertical gardens, improving air quality."
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

document.addEventListener("DOMContentLoaded", renderCategoryPage);
