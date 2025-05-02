const myLibrary = [];
let id;


function Book(title, author, pages, read, cover, id) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.cover = cover;
    this.id = id
}

function addBookToLibrary(title, author, pages, read, cover, id) {
    let newBook = new Book(title, author, pages, read, cover, id);
    myLibrary.push(newBook);
}

const mainContent = document.querySelector('#main-content');
addBookToLibrary("Surely You're Joking, Mr. Feynman!", "Richard Feynman", "350", "Read", "assets/richard-fey.jpg", id);


function displayBook(book) {
    const buttons = document.createElement('div');
    buttons.className = "btnsWrapper";
    const readStatusBtn = document.createElement('button');
    const readStatusContainer = document.createElement('span');
    const buttonText = document.createElement("span");
    const readIconDiv = document.createElement('span');
    
    const bookCard = document.createElement('div');
    bookCard.className = "bookCard";

    const bookCover = document.createElement('img');
    bookCover.src = book.cover;
    bookCover.className = "bookCover";

    const bookInfo = document.createElement('div');
    bookInfo.className = "bookInfo";

    const bookTitle = document.createElement('div');
    bookTitle.className = "bookTitle";
    bookTitle.textContent = book.title;
    bookTitle.style.textTransform = "capitalize";

    const bookAuthor = document.createElement('div');
    bookAuthor.className = "bookAuthor";
    bookAuthor.textContent = `By ${book.author}`;
    bookAuthor.style.textTransform = "capitalize";

    const bookPages = document.createElement('div');
    bookPages.className = "bookPages";
    bookPages.textContent = `${book.pages} pages`;

    mainContent.appendChild(bookCard);
    bookCard.appendChild(bookCover);
    bookCard.appendChild(bookInfo)
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);
    bookInfo.appendChild(buttons);
        

    if (book.read === "Read") {
        toggleToRead();
        
        
    } else if (book.read === "Not Read") {
        toggleToNotRead();
        
    }

    function toggleToRead() {
        readStatusBtn.className = "readBtn";
        buttonText.textContent = "Read";
        readIconDiv.className = "readSvg";
        const readIconCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,17C12.5,17 12.97,16.93 13.42,16.79C13.15,17.5 13,18.22 13,19V19.45L12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5C17,4.5 21.27,7.61 23,12C22.75,12.64 22.44,13.26 22.08,13.85C21.18,13.31 20.12,13 19,13C18.22,13 17.5,13.15 16.79,13.42C16.93,12.97 17,12.5 17,12A5,5 0 0,0 12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17Z" /></svg>'
        
        readIconDiv.innerHTML = readIconCode;
        buttons.appendChild(readStatusBtn);
        readStatusContainer.appendChild(readIconDiv);
        readStatusContainer.appendChild(buttonText);
        readStatusBtn.appendChild(readStatusContainer);
    }

    function toggleToNotRead() {
        readStatusBtn.className = "notReadBtn";
        buttonText.textContent = "Not read";
        readIconDiv.className = "notReadSvg";
        const readIconCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.47 21.12L17.59 19L15.47 16.88L16.88 15.47L19 17.59L21.12 15.47L22.54 16.88M12 9C10.34 9 9 10.34 9 12S10.34 15 12 15 15 13.66 15 12 13.66 9 12 9M12 17C9.24 17 7 14.76 7 12S9.24 7 12 7 17 9.24 17 12C17 12.5 16.9 13 16.77 13.43C17.46 13.16 18.21 13 19 13C20.12 13 21.17 13.32 22.07 13.85C22.43 13.27 22.74 12.65 23 12C21.27 7.61 17 4.5 12 4.5S2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C12.35 19.5 12.69 19.5 13.03 19.45C13 19.3 13 19.15 13 19C13 18.21 13.16 17.46 13.43 16.77C13 16.9 12.5 17 12 17Z" /></svg>'
        
        readIconDiv.innerHTML = readIconCode;
        buttons.appendChild(readStatusBtn);
        readStatusContainer.appendChild(readIconDiv);
        readStatusContainer.appendChild(buttonText);
        readStatusBtn.appendChild(readStatusContainer);
    }

    const removeBtn = document.createElement('button');
    removeBtn.className = "removeBtn";
    removeBtn.dataset.indexNumber = book.id;

    const removeBtnContainer = document.createElement('span');
    removeBtnContainer.className = "removeBtnContainer";
    const removeText = document.createElement("span");
    removeText.textContent = "Remove";

    const removeIconDiv = document.createElement('span');
    removeIconDiv.className = "removeSvg";
    const removeIconCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>'
    removeIconDiv.innerHTML = removeIconCode;

    buttons.appendChild(removeBtn);
    removeBtnContainer.appendChild(removeText);
    removeBtnContainer.appendChild(removeIconDiv);
    removeBtn.appendChild(removeBtnContainer);
    
    removeBtn.addEventListener("click", removeBook);

    function removeBook(event) {
        event.stopImmediatePropagation();
        if (confirm(`Are you sure you want to remove the book "${book.title}" from the library?`)) {
            
            for (let i = myLibrary.length - 1; i >= 0; i--) {
                if (myLibrary[i].id === this.dataset.indexNumber) {
                    myLibrary.splice(i, 1);   
                }
            }
            
            bookCard.remove();

          };  
    }

    readStatusBtn.addEventListener("click", toggleReadStatus);

    function toggleReadStatus() {
        if (book.read === "Read") {
            book.read = "Not Read";
            toggleToNotRead();
        } else {
            book.read = "Read";
            toggleToRead();
        }
    }
}

function displayAllBooks() {
    for (let book of myLibrary) {
        displayBook(book);
    }
}

displayAllBooks();

function addBook() {
    const bookInfoDialog = document.querySelector("#bookInfoDialog");
    bookInfoDialog.showModal();
}

const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click', addBook);



const form = document.querySelector("#form");
const uploadCover = document.querySelector("#addBookCover");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readStatus = document.querySelector("#read-status").value;  
    const coverImg = uploadCover.files[0];

    if (title && author && pages && readStatus && coverImg) {
    const coverUrl = URL.createObjectURL(coverImg);
    
    addBookToLibrary(title, author, pages, readStatus, coverUrl);
    bookInfoDialog.close(displayBook(myLibrary[myLibrary.length - 1]));

    form.reset();
    }
});

const cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", () => {
    form.reset();
    bookInfoDialog.close();
});