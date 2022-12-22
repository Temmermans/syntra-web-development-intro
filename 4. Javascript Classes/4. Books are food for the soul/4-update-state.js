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

  collectBook(bookTitle, author, borrow, quantity) {
    const titleInRegex = new RegExp(bookTitle, "gi");
    const authorInRegex = new RegExp(author, "gi");
    const bookToUse = this.availableBooks.filter((book) => {
      return titleInRegex.test(book.title) && authorInRegex.test(book.author);
    })[0];

    if (bookToUse && quantity <= bookToUse.inStock) {
      bookToUse.inStock -= quantity;
      borrow ? (bookToUse.borrowed += 1) : (bookToUse.reading += quantity);
      return bookToUse.bookPlacement;
    } else {
      return "Out of stock";
    }
  }

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
  constructor() {
    super();

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

class App {
  constructor() {
    const fantasyBooks = new FantasySection();
    const state = {
      books: fantasyBooks.all,
    };

    // when we click one of the elements, the state should update.
    // Excercise: it would be best to refactor this in its own SideBar Class
    document.querySelectorAll(".nav-selection").forEach((nav) => {
      console.log(nav);
      nav.addEventListener("click", (e) => {
        const type = e.target.parentNode.dataset.bookType;
        this.state.books = fantasyBooks[type];
      });
    });

    // Can you create a searchbar component?

    this.state = new Proxy(state, {
      set: this.update,
    });

    this.bookList = new BookList(this.state);
  }

  // make sure update is an arrow function, so the this points to the class and not the function
  update = (prevState, property, value) => {
    // first update the state of the object
    target[property] = value;
    // based on what changes in the state, we can rerender different elements on the page
    if (property === "books") {
      this.bookList.render();
    }
    return true;
  };
}

class BookList {
  constructor(state) {
    // keep a pointer to the state so when we render, we have the latest changes
    this.state = state;
    this.booksContainer = document.querySelector(".books");
    for (let book of state.books) {
      const bookInstance = new Book(book);
      this.booksContainer.appendChild(bookInstance.el);
    }
  }

  render() {
    // empty the list
    this.booksContainer.innerHTML = "";
    // fill the list with the books
    for (let book of this.state.books) {
      const bookInstance = new Book(book);
      this.booksContainer.appendChild(bookInstance.el);
    }
  }
}

class Book {
  constructor(book) {
    this.book = book;
  }

  get el() {
    return this.#htmlToElement(this.#bookCard(this.book));
  }

  #htmlToElement(htmlString) {
    const template = document.createElement("template");
    htmlString = htmlString.trim();
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }

  #bookCard(book) {
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

const app = new App();
