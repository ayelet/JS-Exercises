// ex11_1.js - Ayelet Danieli - Array methods

// Write a JavaScript function that receives the following library object as an
// input and displays the books that can be read (the reading status is true).
// Log the book name, author name and reading status .

var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    let readBooks = (library) => {
        return library.filter(book => book.readingStatus);
    }

    console.log(readBooks(library));
