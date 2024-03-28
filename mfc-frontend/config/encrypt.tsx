import CryptoJS from "crypto-js";
import SecureStorage from "secure-web-storage";
var SECRET_KEY = "girnarsoftInternationalLoan";

const secureStorage = new SecureStorage( {
  hash: function hash(key ?: any) {
    key = CryptoJS.AES.SHA256(key, SECRET_KEY);
    return key.toString();
  },
  encrypt: function encrypt(data ?: any) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);
    data = data.toString();
    return data;
  },
  decrypt: function decrypt(data ?: any) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY);
    data = data.toString(CryptoJS.enc.Utf8);
    return data;
  },
  getItem: (type ?: any) => {
    return JSON.parse(secureStorage.getItem(type));
  },
  setItem: (type ?: any, data ?: any) => {
    return secureStorage.setItem(type, JSON.stringify(data));  
  },
  removeItem: (type ?: any) => {
    return secureStorage.removeItem(type);
  }
});


export default secureStorage;

