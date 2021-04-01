const copy: HTMLLinkElement = document.querySelector(
  '.copy'
) as HTMLLinkElement;

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(result.innerText).then(() => {
    copy.innerText = 'Copié avec succès !';
    setTimeout(() => {
      copy.innerText = 'Copier le résultat';
    }, 2000);
  });
});
