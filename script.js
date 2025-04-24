const myLibrary = [];


function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const mainContent = document.querySelector('#main-content');
addBookToLibrary("Surely You're Joking, Mr. Feynman!", "Richard Feynman", "350 pages", "read");

function displayBooks(book) {
    
    for (book of myLibrary) {
        const bookCard = document.createElement('div');
        bookCard.className = "bookCard";

        const bookCover = document.createElement('img');
        bookCover.src = "assets/richard-fey.jpg";
        bookCover.className = "bookCover";

        const bookInfo = document.createElement('div');
        bookInfo.className = "bookInfo";

        const bookTitle = document.createElement('div');
        bookTitle.className = "bookTitle";
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('div');
        bookAuthor.className = "bookAuthor";
        bookAuthor.textContent = book.author;

        const bookPages = document.createElement('div');
        bookPages.className = "bookPages";
        bookPages.textContent = book.pages;

        mainContent.appendChild(bookCard);
        bookCard.appendChild(bookCover);
        bookCard.appendChild(bookInfo)
        bookInfo.appendChild(bookTitle);
        bookInfo.appendChild(bookAuthor);
        bookInfo.appendChild(bookPages);
    }
}

displayBooks()