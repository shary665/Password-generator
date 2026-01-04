const passwordChars = [
  // lowercase
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",

  // uppercase
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",

  // numbers
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",

  // symbols
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "[",
  "]",
  "{",
  "}",
  "|",
  ":",
  ";",
  '"',
  "<",
  ">",
  "?",
  "/",
];

const smallAlphabets = 
[  
"a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]

const largeAlphabetts = [
      "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

const numbers = [
    "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]

const symbols = [
    "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "[",
  "]",
  "{",
  "}",
  "|",
  ":",
  ";",
  '"',
  "<",
  ">",
  "?",
  "/"
]

let passwordCharObj = {
 smallAlphabets : smallAlphabets,
 largeAlphabetts : largeAlphabetts,
 numbers : numbers,
 symbols : symbols 
}

let PassGenButton = document.getElementById("pass-Gen-btn");
let FirstField = document.getElementById("first-field");
let SecondField = document.getElementById("second-field");
let isGenrated = false;

PassGenButton.addEventListener("click", function () {
  let firstPass = "";
  let secPass = "";
  for (let i = 0; i < 15; i++) {
    firstPass +=
      passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }
  for (let i = 0; i < 15; i++) {
    secPass += passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }
  FirstField.innerText = firstPass;
  SecondField.innerText = secPass;
  isGenrated = true;
});


function CopyToClipboardFirst() {
  if (!isGenrated) {
    return;
  }
  let copyText = FirstField.innerText;
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      // Optional: Provide user feedback (e.g., an alert or tooltip)
      alert("Copied the text: " + copyText);
    })
    .catch((err) => {
      // Handle potential errors
      console.error("Could not copy text: ", err);
    });
}

function CopyToClipboardSec() {
  if (!isGenrated) {
    return;
  }
  let copyText = SecondField.innerText;
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      // Optional: Provide user feedback (e.g., an alert or tooltip)
      alert("Copied the text: " + copyText);
    })
    .catch((err) => {
      // Handle potential errors
      console.error("Could not copy text: ", err);
    });
}
