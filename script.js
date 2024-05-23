// 'Zrozumienie koncpecji' - Readme.md


// 'Zastosowanie praktyczne'


// Creating object Maciej, with username property
const maciej = {
    username: 'Maciej',

    // Creating showName() object method, that displays in console username property of `this` (maciej) object
    showName() {
        console.log(`This is the current username: ${this.username}`);
    }
};

// Testing showName() object method - executing showName() maciej object method
maciej.showName();


// 'Rozszerzony przykład'
// Creating object bookshelf with array property - authors
const bookshelf = {
    authors: ['Bourgeois Paulette', 'Milne Alan Alexander', 'Joanne K. Rowling'],

    // Creating getAuthors() method, that returns `this` (bookshelf) object authors property
    getAuthors() {
        return this.authors;
    },

    // Creating addAuthor() method, that adds new entry to array to `this` (bookshelf) object authors property
    addAuthor(authorName) {
        this.authors.push(authorName);
    }
};

// Testing bookshelf object methods


// console.log() for displying array of authors property of bookshelf object in console - node.js in use
console.log(bookshelf.getAuthors());

// Adding new author 'John Ronald Reuel Tolkien' to the authors property of bookshelf using object method
bookshelf.addAuthor('John Ronald Reuel Tolkien');
// Adding new author 'Andrzej Sapkowski' to the authors property of bookshelf using object method
bookshelf.addAuthor('Andrzej Sapkowski');

// console.log() for displying array of authors property of bookshelf object in console - node.js in use
console.log(bookshelf.getAuthors());
