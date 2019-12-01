const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();


const $memoryCardC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "Icone livro de C"
});

const $memoryCardJS = createMemoryCard({
  src:"img/icon-js.png",
  alt:"Icone de livro de javascript",
});

const $memoryCardJava = createMemoryCard({
  src:"img/icon-java.png",
  alt:"Icone do livro da linguagem java"
});

const $memoryCardWoman = createMemoryCard({
  src:"img/icon-woman.png",
  alt:"Icone de uma mulher programando"
});


$root.insertAdjacentElement('beforeend', $cardsWrapper);


$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJS);

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJava);

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardWoman);

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJava);

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardJS);

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardWoman);

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardC);

clicarCard();