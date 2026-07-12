const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    function info(){
        const beenRead = 'book already read' ? this.read : 'not read yet';

        `${this.title} by ${this.author}, ${this.pages} pages, ${beenRead}.`
    }
}

function addBookToLibrary(){
    const title = document.getElementById('title').value; 
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const record = new Book(title, author, pages, false);

    myLibrary.push(record);
    clearDialog();
    const bookForm = document.getElementById('my-dialog'); 
    bookForm.close();
}

function clearDialog(){
    const bookForm = document.getElementById('book_info'); 
    bookForm.reset();
        
}