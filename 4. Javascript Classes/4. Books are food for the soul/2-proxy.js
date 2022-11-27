// the app class will bring everything together and manage the state of the app
// at the highest level
class App {
  constructor() {
    // create the initial state object
    const state = {
      books: [],
    };

    // listen for changes to the state object
    this.state = new Proxy(state, {
      set: this.update,
    });
  }

  // react to state changes
  update(prevState, property, value) {
    console.log(`${JSON.stringify(prevState)} changed ${property} to ${value}`);
  }
}

// create a new instance of the App
const app = new App();

// this should log "books changed from [] to 1"
app.state.books = 1;
