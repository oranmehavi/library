let myLibrary = [];
const dialog = document.getElementById("bookDialog");
const addABookButton = document.getElementById("addBook");
const confirmButton = document.getElementById("confirmBtn");
const form = document.getElementById("bookForm");
const authorField = dialog.querySelector("#author");
const nameField = dialog.querySelector("#book-name");
const pagesField = dialog.querySelector("#pages");
const checkBox = dialog.querySelector("#isRead");
const bookContainer = document.querySelector(".books-container");

function Book(author, bookName, pages, isRead) {
    this.author = author;
    this.bookName = bookName;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.setRead = function (status) {

};

function addBookToLibrary(author, bookName, pages, isRead) {
    myLibrary.push(new Book(author, bookName, pages, isRead));
};

addABookButton.addEventListener('click', () => {
    dialog.showModal();
});

dialog.addEventListener('close', () => {
    form.reset();    
});


confirmButton.addEventListener('click', () => {
    addBookToLibrary(authorField.value, nameField.value, pages.value, checkBox.checked);
    showBooks();
});


function showBooks() {
    if (myLibrary.length > 0) {
        bookContainer.innerHTML = '';
        for(b of myLibrary) {
            let bookCard = document.createElement('div');
            let title = document.createElement('h1');
            let bookAuthor = document.createElement('h2');
            let bookPages = document.createElement('h3');
            let readStatus = document.createElement('h3');
            let readToggle = document.createElement('input');


            title.innerText = "Book name: " + b.bookName;
            bookAuthor.innerText = "Written by: " + b.author;
            bookPages.innerText = `${b.pages} pages`;
            if (b.isRead) {
                readStatus.innerText = "The book is read";
            }
            else { 
                readStatus.innerText = "The book is not read";
            }
            readToggle.setAttribute('type', 'checkbox');
            readToggle.checked = b.isRead;
            bookCard.appendChild(title);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(readStatus);
            bookCard.appendChild(readToggle);
            bookCard.classList.add('book-card');
            bookContainer.appendChild(bookCard);
        }
        
    }
}
