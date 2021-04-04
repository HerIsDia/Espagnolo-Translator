const translator: HTMLTextAreaElement = document.querySelector(
  '#translator'
) as HTMLTextAreaElement;

const result: HTMLParagraphElement = document.querySelector(
  '.result'
) as HTMLParagraphElement;

translator.addEventListener('keyup', () => {
  result.textContent = '';
  const words = translator.value.split(/[^A-zÀ-ú]/g);
  const nonWords = translator.value.replace(/[A-zÀ-ú]/g, '').split('');

  let resText: string = '';

  words.forEach((word, i) => {
    if (word !== '') {
      if (nonWords[i] != "'") {
        switch (word.charAt(word.length - 1)) {
          case 'o':
            break;

          case 'e':
          case 'é':
          case 'è':
          case 'ê':
            if (word.charAt(word.length - 2).match(/[^aeio]/g)) {
              word = word.slice(0, -1) + 'o';
            } else {
              word += 'o';
            }
            break;

          case 'u':
            if (word.charAt(word.length - 2) == 'q') {
              break;
            } else {
              word += 'o';
              break;
            }
          case 's':
            if (
              word.charAt(word.length - 2) == 'e' &&
              word.charAt(word.length - 3).match(/[^aeiou]/g)
            ) {
              word = word.slice(0, -2) + 'os';
            } else {
              word += 'o';
            }
            break;

          default:
            word += 'o';
            break;
        }
      }
      resText += word + (nonWords[i] !== undefined ? nonWords[i] : ' ');
    } else {
      resText += nonWords[i] !== undefined ? nonWords[i] : ' ';
    }
    result.innerText = resText as string;
  });
});
