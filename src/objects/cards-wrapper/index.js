function createCardsWrapper(){

const $cardsWrapper = document.createElement('section');
$cardsWrapper.classList.add('cards-wrapper');


const $head = document.querySelector('head');
const $style = document.createElement("style");
$style.textContent = `
.cards-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  width: 100vw;
  perspective: 800px;
}`

$head.insertBefore($style, null);

return $cardsWrapper;
}