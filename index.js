const body = document.querySelector('body');
const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    
    this.info =  function(){
        const beenRead = this.read ? 'Book already read'  : 'Not read yet';

        return(`${this.title} by ${this.author}, ${this.pages} pages, ${beenRead}.`);
    }
};

function addBookToLibrary(){
    const title = document.getElementById('title').value; 
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const record = new Book(title, author, pages, read);

    myLibrary.push(record);
    clearDialog();
    const bookForm = document.getElementById('my-dialog'); 
    bookForm.close();
    displayBooks();
};

function clearDialog(){
    const bookForm = document.getElementById('book_info'); 
    bookForm.reset();
        
};

function displayBooks(){ 
    for (var book of myLibrary){
        if (!document.getElementById(book.id)){
            const div = document.createElement('div');
            div.classList.add('card');
            div.setAttribute('id', book.id);
            
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            
            p1.innerHTML = book.title;
            div.appendChild(p1);
            
            p2.innerHTML = `${book.author}, Total pages: ${book.pages}`;
            div.appendChild(p2);

            p3.innerHTML = book.info();
            div.appendChild(p3);

            body.appendChild(div);
        }
    }
};