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
