const quotes = [
  {
    quote: "There is no great genius without some touch of madness.",
    author: "Aristotle",
  },
  {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Genius is patience.",
    author: "Isaac Newton",
  },
  {
    quote: "True genius resides in the capacity for evaluation of uncertain, hazardous, and conflicting information.",
    author: "Winston Churchill",
  },
  {
    quote: "Towering genius disdains a beaten path. It seeks regions hitherto unexplored.",
    author: "Abraham Lincoln",
  }
]

const btnNewQuote = document.querySelector('.btn-new-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

window.onload = () => showRandomQuote()

function showRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  console.log(quote, author, randomIndex)

  quote.innerText = quotes[randomIndex].quote;
  author.innerText = quotes[randomIndex].author;
}

btnNewQuote.addEventListener('click', () => showRandomQuote())