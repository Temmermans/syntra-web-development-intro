class LibrarySection {
  constructor() {
    this._books;
  }

  search(type, term) {
    return this[type].filter((book) => {
      return book.title.toLowerCase().includes(term.toLowerCase());
    });
  }

  get all() {
    return this._books;
  }

  get available() {
    return this._books.filter((book) => {
      return book.inStock >= book.borrowed;
    });
  }

  get borrowed() {
    return this._books.filter((book) => {
      return book.borrowed && book.borrowed >= book.returned;
    });
  }

  // collecting book from shelf
  collectBook(bookTitle, author, borrow, quantity) {
    // to arrive at the exact book, you have to spell correctly
    const titleInRegex = new RegExp(bookTitle, "gi");
    const authorInRegex = new RegExp(author, "gi");
    const bookToUse = this.availableBooks.filter((book) => {
      return titleInRegex.test(book.title) && authorInRegex.test(book.author);
    })[0];

    // reduce the number of stocked books by one
    if (bookToUse && quantity <= bookToUse.inStock) {
      bookToUse.inStock -= quantity;
      borrow ? (bookToUse.borrowed += 1) : (bookToUse.reading += quantity);
      return bookToUse.bookPlacement;
    } else {
      return "Out of stock";
    }
  }

  // returning book back to shelf
  returnBooks(ISBN, quantity) {
    const bookToReturn = this.allBookedBooks.filter((bookedBook) => {
      return bookedBook.ISBN === ISBN;
    })[0];

    if (bookToReturn && quantity <= bookToReturn.reading) {
      bookToReturn.inStock += quantity;
      bookToReturn.reading -= quantity;
      return bookToReturn.bookPlacement;
    } else {
      return "Not collected in the quantity provided";
    }
  }
}

class FantasySection extends LibrarySection {
  #app;

  constructor(app) {
    super();
    this.#app = app;
    // accessing this array directly will lead to CONFUSION
    this._books = [
      {
        title: "Another Book",
        author: "Raymond E. Feist",
        ISBN: 4029,
        inStock: 20,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 0,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
      {
        title: "The Magician",
        author: "Raymond E. Feist",
        ISBN: 4030,
        inStock: 20,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 0,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
      {
        title: "The Magician",
        author: "Raymond E. Feist",
        ISBN: 4031,
        inStock: 18,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 20,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
    ];
  }
}

class InputHandler {
  #handlers;

  constructor(handlers) {
    this.#handlers = handlers;
    this.#initSearch();
    this.#initNavSelection();
  }

  #initSearch() {
    const search = document.getElementById("search-form");
    search.addEventListener("submit", (e) => {
      e.preventDefault();
      this.#handlers.search(e);
    });
  }

  #initNavSelection() {
    const navItems = document.querySelectorAll(".nav-selection");
    navItems.forEach((i) => i.addEventListener("click", this.#handlers.navSelection));
  }

  initBookHandlers() {
    const collectBooks = document.querySelectorAll(".collect");
    const returnBooks = document.querySelectorAll(".return");

    collectBooks.forEach((button) => button.addEventListener("click", console.log));
    returnBooks.forEach((button) => button.addEventListener("click", console.log));
  }
}

class UI {
  #app;

  constructor(app) {
    this.#app = app;
  }

  #htmlToElement(htmlString) {
    const template = document.createElement("template");
    htmlString = htmlString.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }

  #htmlToElements() {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.childNodes;
  }

  clear(selector) {
    const html = document.querySelector(selector);
    let child = html.lastElementChild;
    while (child) {
      html.removeChild(child);
      child = html.lastElementChild;
    }
  }

  append(selector, html) {
    const article = this.#htmlToElement(html);
    return document.querySelector(selector).append(article);
  }

  bookCard(book) {
    return `
    <article class="book">
      <img src="${book.cover}" />
      <section>
        <h3>${book.title}</h3>
        <h5>${book.author}</h5>
        <p>${book.desc}</p>
        <section>
          <p>In Stock: <b>${book.inStock}</b></p>
          <button class="collect" data-id="${book.ISBN}">Collect</button>
          <button class="return" data-id="${book.ISBN}">Return</button>
        </section>
      </section>
    </article>
    `;
  }
}

class App {
  #name;
  #input;
  #ui;
  #fantasySection;
  lookingAtBooks = "all";

  constructor() {
    this.name = "Book App";
    this.#ui = new UI(this);
    this.#fantasySection = new FantasySection(this);
    this.#input = new InputHandler({
      search: (e) => {
        const searchTerm = e.target.querySelector("[name=search]").value;
        this.#ui.clear(".books");
        const books = this.#fantasySection.search(this.lookingAtBooks, searchTerm);
        books.forEach((book) => this.#ui.append(".books", this.#ui.bookCard(book)));
        this.#input.initBookHandlers();
      },
      navSelection: (e) => {
        const type = e.target.parentNode.dataset.bookType;
        this.lookingAtBooks = type;
        this.#ui.clear(".books");
        const books = this.#fantasySection[this.lookingAtBooks];
        books.forEach((book) => this.#ui.append(".books", this.#ui.bookCard(book)));
        this.#input.initBookHandlers();
      },
    });
  }

  bootstrap() {
    const books = this.#fantasySection.all;
    books.forEach((book) => this.#ui.append(".books", this.#ui.bookCard(book)));
    this.#input.initBookHandlers();
  }
}

const app = new App();
app.bootstrap();
console.log("App bootstrapped! 🚀");
