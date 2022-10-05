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
    this.isRead = status;
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
        for(let i = 0; i < myLibrary.length; i++) {
            let b = myLibrary[i];
            let bookCard = document.createElement('div');
            let title = document.createElement('h1');
            let bookAuthor = document.createElement('h2');
            let bookPages = document.createElement('h3');
            let readStatus = document.createElement('h3');
            let readToggle = createToggle(b.isRead);


            title.innerText = "Book name: " + b.bookName;
            bookAuthor.innerText = "Written by: " + b.author;
            bookPages.innerText = `${b.pages} pages`;
            readStatus.innerText = setReadStatus(b.isRead);
            readStatus.setAttribute('id', 'status');
            readToggle.setAttribute('type', 'checkbox');
            readToggle.checked = b.isRead;
            bookCard.appendChild(title);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(readStatus);
            bookCard.appendChild(readToggle);
            bookCard.setAttribute('data-index', `${i}`);
            bookCard.classList.add('book-card');
            bookContainer.appendChild(bookCard);
        }
        
    }
}
function setReadStatus(isRead) {
    
    if (isRead) {
        return "The book is read";
    }

    return "The book is not read";
}

function createToggle(isChecked) {
    let label = document.createElement('label');
    let toggle = document.createElement('input');
    let fill = document.createElement('div');
    label.setAttribute('for', 'myToggle');
    toggle.setAttribute('type', 'checkbox');
    toggle.setAttribute('id', 'myToggle');
    toggle.checked = isChecked;
    label.classList.add('toggle');
    toggle.classList.add('toggle-input');
    toggle.addEventListener('change', (e) => {
        let card = e.target.parentElement.parentElement;
        let index = card.dataset.index;
        myLibrary[index].setRead(e.target.checked);
        let readStatus = card.querySelector('#status');
        readStatus.innerText = setReadStatus(myLibrary[index].isRead);
    });

    fill.classList.add('toggle-fill');
    label.appendChild(toggle);
    label.appendChild(fill);

    return label;
}


