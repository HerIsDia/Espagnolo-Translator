"use strict";
const copy = document.querySelector('.copy');
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(result.innerText).then(() => {
        copy.innerText = 'Copié avec succès !';
        setTimeout(() => {
            copy.innerText = 'Copier le résultat';
        }, 2000);
    });
});
const translator = document.querySelector('#translator');
const result = document.querySelector('.result');
translator.addEventListener('keyup', () => {
    result.textContent = '';
    const words = translator.value.split(/[^A-zÀ-ú]/g);
    const nonWords = translator.value.replace(/[A-zÀ-ú]/g, '').split('');
    let resText = '';
    words.forEach((word, i) => {
        if (word !== '') {
            switch (word.charAt(word.length - 1)) {
                case 'o':
                    break;
                case 'e':
                    if (word.charAt(word.length - 2).match(/[^aeiou]/g)) {
                        word = word.slice(0, -1) + 'o';
                    }
                    else {
                        word += 'o';
                    }
                    break;
                case 's':
                    if (word.charAt(word.length - 2) == 'e' &&
                        word.charAt(word.length - 3).match(/[^aeiou]/g)) {
                        word = word.slice(0, -2) + 'os';
                    }
                    else {
                        word += 'o';
                    }
                    break;
                default:
                    word += 'o';
                    break;
            }
            resText += word + (nonWords[i] !== undefined ? nonWords[i] : ' ');
        }
        else {
            resText += nonWords[i] !== undefined ? nonWords[i] : ' ';
        }
        result.innerText = resText;
    });
});
