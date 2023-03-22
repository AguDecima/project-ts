const books = ["it", "the lord of the rings", "hobbit"]
const search = "it";

for (let index = 0; index < books.length; index++) {
    console.log(books[index]);
    if (books[index] === search) console.log('book exists');
}

books.forEach(book => {
    console.log(book);
    if (book === search) console.log('book exists');
});

const book = books.filter(book => book === search);

const bookMap = books.map(book => {
    if ( book === search) return book;
});

console.log(bookMap);


