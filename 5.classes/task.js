class PrintEditionItem{
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
    this.type = null;
	}
  fix() {
    this.state *= 1.5;
  }

  set state (newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100){
      this._state = 100;
    } else{
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem{
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type =  "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type =  "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30){
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (const book of this.books){
      if(book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    const foundBookIndex = this.books.findIndex(book => book.name === bookName);
  
    if (foundBookIndex !== -1) {
      const removedBooks = this.books.splice(foundBookIndex, 1);
      return removedBooks[0];
    } else {
      return null;
    }
  }
}

const library = new Library("Мобильная библиотека");

const edgarPo = new PrintEditionItem (
  "10 лучших рассказов Эдгара Аллана По", 
  2023,
  1238
);

const mifogennaiaLiubowKast = new Book(
  "Мифогенная любовь каст",
  2022,
  2500,
  "Сергей Ануфриев, Павел Пепперштейн"
);

const geo = new Magazine(
  "GEO",
  2023,
  150
);

const prevrashenie = new NovelBook(
  "Превращение",
  1912,
  350,
  "Франц Кафка"
);

library.addBook(edgarPo);
library.addBook(mifogennaiaLiubowKast);
library.addBook(geo);
library.addBook(prevrashenie);

const book2022 = new Book("Книга из 2022 года", 2022, 250, "Автор 2023");
library.addBook(book2022);

const givedBook = library.giveBookByName("Мифогенная любовь каст");

givedBook.state = 20;  
givedBook.fix();
library.addBook(givedBook);

console.log(`Состояние книги "Мифогенная любовь каст" после восстановления: ${issuedBook.state}`);
console.log(`Количество книг в библиотеке после восстановления: ${library.books.length}`);



