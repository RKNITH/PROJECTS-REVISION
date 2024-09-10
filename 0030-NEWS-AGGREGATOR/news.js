
const newsList = document.getElementById('news')
const date = document.getElementById('date')
const copyright = document.getElementById('copyright-year')

const currentDate = new Date()
date.innerHTML = currentDate.toDateString()
copyright.innerHTML = currentDate.getFullYear()

const feeds = [
    { url: 'http://feeds.bbci.co.uk/news/world/asia/india/rss.xml', name: "BBC News - India" },
    { url: 'https://www.theguardian.com/world/india/rss', name: "India - The Guardian" },
    { url: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms', name: "Times of India" },
    { url: 'https://www.thehindu.com/feeder/default.rss', name: "The Hindu" },
    { url: 'http://indianexpress.com/print/front-page/feed/', name: "The Indian Express" },
    { url: 'https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN%3Aen&oc=11', name: "Top Stories - Google News" }
];

function loadNews(newsUrl, newsName) {
    feednami.load(newsUrl, function (result) {
        if (result.error) {
            console.log(`Error loading ${newsName}:`, result.error.message); // Log the error message
            let errorMessage = document.createElement('p');
            errorMessage.innerHTML = `Unable to load ${newsName} at the moment. Please try again later.`;
            newsList.appendChild(errorMessage);  // Show an error message to the user
        } else {
            let newsHeader = document.createElement('h5');
            newsHeader.innerHTML = `
            <hr>
            ${newsName}
            <hr>
            `;
            newsList.appendChild(newsHeader);

            let newsEntries = result.feed.entries;
            newsEntries.forEach(entry => {
                let newsItem = document.createElement('li');
                let newsSummary = document.createElement('p');

                newsItem.innerHTML = `<h4><a href="${entry.link}" target="_blank">${entry.title}</a></h4>`;
                newsSummary.innerHTML = entry.summary;

                newsList.appendChild(newsItem);
                newsList.appendChild(newsSummary);
            });
        }
    });
}

feeds.forEach(feed => {
    loadNews(feed.url, feed.name);
});
