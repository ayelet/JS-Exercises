// ex7_1 - Ayelet Danieli - Objects

// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary


let book = {
  Name: "Catcher in the rye",
  Author: "J D Salinger",
  Published: 1951,
  Summary:
    "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world."
};

console.log(book);

function sumBook(book) {
    let str = '';
    str += "The book " + book.Name + " was written by " + book.Author + " and published in " + book.Published;
    str += "\nBook summary: " + book.Summary;

    return str;
}

console.log(sumBook(book));
