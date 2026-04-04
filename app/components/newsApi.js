export const categories = {
    all : "https://newsapi.org/v2/top-headlines?country=us&apiKey=250ce62fd0874c8c970cc82cc88e7217",
    tech : "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=250ce62fd0874c8c970cc82cc88e7217",
    business: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=250ce62fd0874c8c970cc82cc88e7217",
    tesla: "https://newsapi.org/v2/everything?q=tesla&from=2026-03-03&sortBy=publishedAt&apiKey=250ce62fd0874c8c970cc82cc88e7217",
    apple: "https://newsapi.org/v2/everything?q=apple&from=2026-04-02&to=2026-04-02&sortBy=popularity&apiKey=250ce62fd0874c8c970cc82cc88e7217",
    searchNews: (query) => {
  return `https://newsapi.org/v2/everything?q=${(query)}&apiKey=250ce62fd0874c8c970cc82cc88e7217`;
 }
}

