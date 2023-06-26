// NIAZ AHMED  301203

function fetchNews() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=74fe25a52c0941c39e00c63c249003cc')
    .then(response => response.json())
    .then(data => {
      const articles = data.articles;
      const rootElement = document.getElementById("root");

      // Clear existing content
      rootElement.innerHTML = "";

      let rowElement;

      // Create HTML elements for each article
      articles.forEach((article, index) => {
        if (index % 3 === 0) {
          // Create a new row for every third article
          rowElement = document.createElement("div");
          rowElement.className = "w3-row-padding";
          rootElement.appendChild(rowElement);
        }

        const articleElement = document.createElement("div");
        articleElement.className = "w3-third";
        
        // Check if urlToImage is null or undefined
        const imageUrl = article.urlToImage ? article.urlToImage : "placeholder.png";
        
        articleElement.innerHTML = `
          <img src="${imageUrl}" alt="${article.title}" style="width:100%">
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        rowElement.appendChild(articleElement);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

// Fetch news articles on page load
fetchNews();
