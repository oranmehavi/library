let myLibrary = [];
const dialog = document.getElementById("bookDialog");
const addABookButton = document.getElementById("addBook");
const confirmButton = document.getElementById("confirmBtn");
const form = document.getElementById("bookForm");
const authorField = dialog.querySelector("#author");
const nameField = dialog.querySelector("#book-name");
const pagesField = dialog.querySelector("#pages");
const checkBox = dialog.querySelector("#isRead");

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
});
