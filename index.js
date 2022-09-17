import SECRET_KEY from "./env.js";

const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", encryptSave);

const crypt = {
  secret: SECRET_KEY,
  encrypt: function (clear) {
    const cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
    return cipher.toString();
  },
  decrypt: function (cipher) {
    const decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
    return decipher.toString(CryptoJS.enc.Utf8);
  },
};

function encryptSave(e) {
  e.preventDefault();
  const encryptedPassword = crypt.encrypt(password.value);
  localStorage.setItem("password", encryptedPassword);
  const decryptedPassword = crypt.decrypt(encryptedPassword);
  console.log(decryptedPassword);
}
