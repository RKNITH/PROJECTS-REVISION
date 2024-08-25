// const result = document.getElementById('result')
// const next = document.getElementById('next')

const quotes = [
    "India is a land of diversity and unity – Rabindranath Tagore",
    "The best way to find yourself is to lose yourself in the service of others – Mahatma Gandhi",
    "In the midst of darkness, light emerges – Swami Vivekananda",
    "You must be the change you wish to see in the world – Mahatma Gandhi",
    "The future belongs to those who believe in the beauty of their dreams – Eleanor Roosevelt",
    "India is a mosaic of countless cultures, languages, and traditions – Unknown",
    "Live as if you were to die tomorrow. Learn as if you were to live forever – Mahatma Gandhi",
    "Our chief weapon is our unity – Jawaharlal Nehru",
    "The greatness of a nation and its moral progress can be judged by the way its animals are treated – Mahatma Gandhi",
    "To be secure on land, we must be strong at sea – Chhatrapati Shivaji Maharaj",
    "Let us be the change we want to see – Mahatma Gandhi",
    "In the heart of India lies the spirit of its people – Unknown",
    "Be the change you want to see in the world – Mahatma Gandhi",
    "The most beautiful thing in the world is to see your parents smiling – Unknown",
    "The only way to deal with this life is to find one’s passion and give it everything – Mahatma Gandhi",
    "India is a land where the past and future meet – Unknown",
    "A nation’s culture resides in the hearts and in the soul of its people – Mahatma Gandhi",
    "In India, the past is always present, woven into the fabric of everyday life – Unknown",
    "The spirit of India is ancient and eternal – Unknown",
    "To serve is to live – Swami Vivekananda",
    "India’s true strength lies in its unity – Unknown",
    "The best way to predict the future is to create it – Peter Drucker",
    "The soul of India resides in its villages – Mahatma Gandhi",
    "India is a land of dreams and greatness – Unknown",
    "The journey of a thousand miles begins with one step – Lao Tzu",
    "In the heart of every Indian lies the essence of true patriotism – Unknown",
    "The beauty of India is in its diversity – Unknown",
    "The essence of India lies in its culture and heritage – Unknown",
    "Success is not final, failure is not fatal: It is the courage to continue that counts – Winston Churchill",
    "The Indian mind is the greatest treasure – Unknown",
    "India’s strength is in its unity – Unknown",
    "The Indian spirit is resilient and enduring – Unknown",
    "Life is either a daring adventure or nothing at all – Helen Keller",
    "India’s heritage is a treasure trove of wisdom – Unknown",
    "Believe you can and you’re halfway there – Theodore Roosevelt",
    "India is not just a country; it’s a vast treasure chest of stories – Unknown",
    "The soul of India is its people – Unknown",
    "In every corner of India lies a story waiting to be told – Unknown",
    "The only way to deal with the future is to find a way to create it – Peter Drucker",
    "The essence of India is in its philosophy – Unknown",
    "India is a land of eternal inspiration – Unknown",
    "The spirit of India is vibrant and indomitable – Unknown",
    "The beauty of India is in its unity and diversity – Unknown",
    "The only limit to our realization of tomorrow is our doubts of today – Franklin D. Roosevelt",
    "India’s legacy is one of unity in diversity – Unknown",
    "The strength of a nation is its people – Unknown",
    "India’s culture is the soul of its people – Unknown",
    "The power of India lies in its people – Unknown",
    "The essence of India is its spirituality – Unknown",
    "In every challenge lies an opportunity – Unknown",
    "India is a land of boundless opportunities – Unknown",
    "The heart of India beats in its people – Unknown"
];
// let quotesLength = quotes.length
// let currentIndex = 0
// function displayQuotes(index) {
//     let quote = quotes[index]
//     result.innerHTML = quote

// }
// displayQuotes(currentIndex)

// next.addEventListener('click', () => {
//     let randomIndex = Math.floor(Math.random() * quotesLength)
//     currentIndex = randomIndex
//     displayQuotes(currentIndex)
// })



// **********************************************
const result = document.getElementById('result')
const next = document.getElementById('next')



let currentIndex = 0

function displayQuotes(index) {
    let quote = quotes[index]

    result.innerHTML = quote
}

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (quotes.length)
    displayQuotes(currentIndex)
})

displayQuotes(currentIndex)
