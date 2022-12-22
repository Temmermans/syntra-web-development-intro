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

    document.querySelectorAll(".nav-selection").forEach((nav) => {
      nav.addEventListener("click", (e) => {
        const type = e.target.parentNode.dataset.bookType;
        this.state.books = fantasyBooks[type];
      });
    });

    this.state = new Proxy(state, {
      set: this.update,
    });

    this.bookList = new BookList(this.state);
  }

  update = (target, property, value) => {
    target[property] = value;
    if (property === "books") {
      this.bookList.render();
    }
    return true;
  };
}

class BookList {
  constructor(state) {
    this.state = state;
    this.booksContainer = document.querySelector(".books");
    for (let book of state.books) {
      const bookInstance = new Book(book);
      this.booksContainer.appendChild(bookInstance.el);
    }
  }

  render() {
    this.booksContainer.innerHTML = "";
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
