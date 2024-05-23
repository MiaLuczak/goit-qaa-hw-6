// 'Zrozumienie koncpecji' - Readme.md


// 'Zastosowanie praktyczne'


// Creating object Maciej
const Maciej = {
    username: 'Maciej',

    // Creating showName() object method
    showName() {
        console.log(`This is the current username: ${this.username}`);
    }
};

// Testing showName() object method

Maciej.showName();