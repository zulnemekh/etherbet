export default class Storage {
  static getInstance() {
    if (!Storage._instance) {
      Storage._instance = new Storage();
    }

    return Storage._instance;
  }
  
  async getItem(key, haveToParse = false) {
    const item = window.localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}_${key}`);

    if (haveToParse) {
      try {
        return JSON.parse(item);
      } catch(error) {
        return null;
      }
    } else {
      return item;
    }
  }

  async setItem(key, rawValue, haveToStringify = false) {
    let value = rawValue;

    if (haveToStringify) {
      value = JSON.stringify(rawValue);
    }

    window.localStorage.setItem(
      `${process.env.REACT_APP_STORAGE_PREFIX}_${key}`,
      value
    );
  }

  async removeItem(key) {
    window.localStorage.removeItem(
      `${process.env.REACT_APP_STORAGE_PREFIX}_${key}`,
    );
  }
} 