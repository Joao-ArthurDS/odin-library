const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    function info(){
        if (this.read){
            const beenRead = 'book already read'
        }
        else{
            const beenRead = 'not read yet'
        }

        `${this.title} by ${this.author}, ${this.pages} pages, ${beenRead}.`
    }
}

function addBookToLibrary(){
    const title = document.getElementById('title').value; 
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const record = new Book(title, author, pages, false);
}