const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, get, child, remove } = require("firebase/database");
const uuidv4 = require("uuid").v4;

const firebaseConfig = {};

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
