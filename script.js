const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

// Function to display books in the library
function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = ''; // Clear previous entries

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleReadStatus(${index})">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
        `;
        libraryDiv.appendChild(bookCard);
    });
}

// Function to remove a book from the library
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

// Event listener for the new book button
document.getElementById('newBookBtn').addEventListener('click', () => {
    const bookForm = document.getElementById('bookForm');
    bookForm.classList.toggle('hidden');
});

// Event listener for the book input form submission
document.getElementById('bookInputForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    event.target.reset(); // Reset the form
    document.getElementById('bookForm').classList.add('hidden'); // Hide the form
});
