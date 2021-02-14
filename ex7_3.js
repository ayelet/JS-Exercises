// ex7_3 - Ayelet Danieli - Objects

// 1. create 2 book objects with properties: name, author, year.
let book1 = {
    Name: "Catcher in the rye",
    Author: "J D Salinger",
    Year: 1951,
};

let book2 = {
    Name: "War and Peace",
    Author: "Leo Tolstoy",
    Year: 1869,
};

// 2. create an empty object bookUtils (utils = short for utilities).
let utils = new Object();

// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
utils.getFirstPublished= function(b1, b2) {
      let book;
      b1.year > b2.year ? book = b1 : book = b2;
      return book;
  }

console.log("Book that was first published is " + utils.getFirstPublished(book1, book2).Name);
/////////////////////////////////////////////////
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
utils.setNewEdition = function(aBook, newEditionYear) {
    aBook.latestEdition  = newEditionYear;
}

console.log(book1);
utils.setNewEdition(book1, 1967);
console.log(book1);

// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
utils.setLanguage = function(aBook, language) {
    aBook.language  = language;
}
console.log(book2);
utils.setLanguage(book2, 'English');
console.log(book2);

// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
utils.setTranslation = function(aBook, translatedLanguage, translatorName) {
    aBook.translator  = { name: translatorName,
                            language: translatedLanguage};
}

console.log(book1);
utils.setTranslation(book1, 'Hebrew', 'Aharon Amir');
console.log(book1);

// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.

utils.setPublisher = function(aBook, _name, _location) {
    aBook.Publisher  = { name: _name,
                            location: _location};
}

console.log(book2);
utils.setPublisher(book2, 'Penguin', 'London');
console.log(book2);


// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.
utils.isSamePublisher = function(b1, b2) {
    if ((b1.Publisher.name == b2.Publisher.name) && (b1.Publisher.location == b2.Publisher.location))
        return true;
  
    return false;
}

console.log(book2);
utils.setPublisher(book1, "Penguin", 'London');
console.log(book1);
console.log(utils.isSamePublisher(book1, book2));