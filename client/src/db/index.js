import { openDB } from 'idb';

export default {
  init() {
    return openDB('groups', 1, {
      upgrade(db) {
        console.log('groups created');
        db.createObjectStore('groups', { keyPath: 'id', autoIncrement: true });
      }
    });
  },

  async createGroup(data) {
    // data is an object with a group_name prop
    const group_db = await openDB('groups', 1);
    const transaction = group_db.transaction('groups', 'readwrite');
    const store = transaction.objectStore('groups');

    const result = await store.add({ group: data });

    return result;
  },

  async find() {
    const group_db = await openDB('groups', 1);
    const transaction = group_db.transaction('groups', 'readwrite');
    const store = transaction.objectStore('groups');

    return await store.getAll();
  }
}