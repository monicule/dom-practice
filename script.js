const word = document.querySelector('.inputText');
const btn = document.querySelector('.btn');
const result = document.querySelector('.results');

btn.addEventListener('click', countVowel)

function countVowel() {
    let wordVal = word.value.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i];

        if (letter.match(/([a,e,o,u,i])/)) {
            vowelCount++;
        }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
}


/* 2 var 
const inputDOM = document.querySelector('.inputText');
const buttonDOM = document.querySelector('.btn');
const resultDOM = document.querySelector('.results');

buttonDOM.addEventListener('click', () => {
    const countVowels = inputDOM.value.split('').filter(letter => 'aeyuioAEYUIO'.includes(letter)).length;
    resultDOM.textContent = `${inputDOM.value.toUpperCase()} has ${countVowels} vowel${countVowels !== 1 ? 's' : ""}.`;
    inputDOM.value = '';
})*/


/* 3 var 
const inputDOM = document.querySelector('input');
const btnDOM = document.querySelector('button');
const rezDOM = document.querySelector('.rezults');
 
btnDOM.addEventListener('click', () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const low = inputDOM.value.toLocaleLowerCase();
    let count = 0;
    for (const char of low) {
        if (vowels.includes(char)) {
            count++
 
        }
        rezDOM.textContent = `Number of vowels is ${count}`
    }
});
*/