const quotes = [
    {
        quote: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll",
    },
    {
        quote: "Quality is not an act, it is a habit.",
        author: "Aristotle",
    },
    {
        quote: "Knowing is not enough; we must apply. Willing is not enough; we must do",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar",
    },
    {
        quote: "Perseverance is not a long race; it is many short races one after the other.",
        author: "Walter Elliot",
    },
    {
        quote: "Don't think, just do.",
        author: "Horace",
    },
    {
        quote: "A goal is a dream with a deadline.",
        author: "Napoleon Hill",
    },
    {
        quote: "The more things you do, the more you can do.",
        author: "Lucille Ball",
    },
    {
        quote: "You have to make it happen.",
        author: "Denis Diderot",
    },
    {
        quote: "There is always room at the top.",
        author: "Daniel Webster",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;