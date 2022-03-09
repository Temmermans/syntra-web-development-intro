const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, get, child, remove } = require("firebase/database");
const uuidv4 = require("uuid").v4;

const firebaseConfig = {
  apiKey: "AIzaSyBIzmLdNDEHznOGDjNYDLNkgcI3y9Cs1RU",
  authDomain: "syntra-countries.firebaseapp.com",
  databaseURL: "https://syntra-countries-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "syntra-countries",
  storageBucket: "syntra-countries.appspot.com",
  messagingSenderId: "116938610047",
  appId: "1:116938610047:web:facc12a9a8961a9613f64a",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

module.exports = {
  writeItem: async (item, id) => {
    const generatedId = id || uuidv4();
    await set(ref(database, "syntra/" + generatedId), item);
  },
  updateItem: async (id, item) => {
    await set(ref(database, "syntra/" + id), item);
  },
  readItem: async (itemId) => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `syntra/${itemId}`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
  },
  readAll: async () => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `syntra`));
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
  },
  removeItem: async (id) => {
    await remove(ref(database, "syntra/" + id));
  },
};
