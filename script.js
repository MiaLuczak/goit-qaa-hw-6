// 'Zrozumienie koncpecji' - Readme.md


// 'Zastosowanie praktyczne'


// Creating object Maciej
const maciej = {
    username: 'Maciej',

    // Creating showName() object method
    showName() {
        console.log(`This is the current username: ${this.username}`);
    }
};

// Testing showName() object method
maciej.showName();


// 'Rozszerzony przykład'
const bookshelf = {
    authors: ['Bourgeois Paulette', 'Milne Alan Alexander', 'Joanne K. Rowling'],

    getAuthors() {
        return this.authors;
    },

    addAuthor(authorName) {
        this.authors.push(authorName);
    }
};

// Testing bookshelf object methods
console.log(bookshelf.getAuthors());
bookshelf.addAuthor('John Ronald Reuel Tolkien');
bookshelf.addAuthor('Andrzej Sapkowski');
console.log(bookshelf.getAuthors());
