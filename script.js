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


let passwordCharArray = [
 smallAlphabets,
 largeAlphabetts,
  numbers,
  symbols 
]

let PassGenButton = document.getElementById("pass-Gen-btn");
let FirstField = document.getElementById("first-field");
let SecondField = document.getElementById("second-field");
let UpperCASE = document.getElementById("uppercase");
let LowerCase = document.getElementById("lowercase");
let Numbers = document.getElementById("numbers");
let Symbols = document.getElementById("symbols");
let MaxCharsField = document.getElementById("max-chars");


let isGenrated = false;

  
  let smallAlphabetsIndex = 0;
  let LargeAlphabetsIndex = 1;
  let NumbersIndex = 2;
  let SymbolsIndex = 3;
 

PassGenButton.addEventListener("click", function () {
  let firstPass = "";
  let secPass = "";
  let Totalchars = MaxCharsField.value;
  
  if(LowerCase.checked === false && passwordCharArray[smallAlphabetsIndex] == smallAlphabets){
     passwordCharArray.splice(smallAlphabetsIndex, 1);  
  }else if(LowerCase.checked === true && passwordCharArray[smallAlphabetsIndex] != smallAlphabets){
    passwordCharArray.splice(smallAlphabetsIndex, 0, smallAlphabets);
  }
 
    if(UpperCASE.checked === false && passwordCharArray[LargeAlphabetsIndex] == largeAlphabetts){
     passwordCharArray.splice(LargeAlphabetsIndex, 1);  
  } else if(UpperCASE.checked === true && passwordCharArray[LargeAlphabetsIndex] != largeAlphabetts){
    passwordCharArray.splice(LargeAlphabetsIndex, 0, largeAlphabetts);
  }

  if(Numbers.checked === false && passwordCharArray[NumbersIndex] == numbers){
     passwordCharArray.splice(NumbersIndex, 1);  
  }else if(Numbers.checked === true && passwordCharArray[NumbersIndex] != numbers){
    passwordCharArray.splice(NumbersIndex, 0, numbers);
  }

  if(Symbols.checked === false && passwordCharArray[SymbolsIndex] == symbols){
     passwordCharArray.splice(SymbolsIndex, 1);  
  }else if(Symbols.checked === true && passwordCharArray[SymbolsIndex] != symbols){
    passwordCharArray.splice(SymbolsIndex, 0, symbols);
  }

  if(Totalchars <= 0 || Totalchars > 15){
    Totalchars = 15
    MaxCharsField.value = 15;
  }
  
  for (let i = 0; i < Totalchars; i++) {
    let orderofchars = Math.floor(Math.random() * passwordCharArray.length);
    firstPass +=   passwordCharArray[orderofchars][Math.floor(Math.random() * passwordCharArray[orderofchars].length)];
      
  }

  for (let i = 0; i < Totalchars; i++) {
    let orderofchars = Math.floor(Math.random() * passwordCharArray.length);
    secPass += passwordCharArray[orderofchars][Math.floor(Math.random() * passwordCharArray[orderofchars].length)];
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
