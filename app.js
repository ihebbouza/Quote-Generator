//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

//could be from a database
const quotes = [
    {
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        person: "Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        person: "Napoleon Hill"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.", 
        person: "Albert Einstein"
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", 
        person: "Robert Frost"
    }
];

//Event
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = '"' + quotes[random].quote + '"';
    person.innerText = quotes[random].person;
});