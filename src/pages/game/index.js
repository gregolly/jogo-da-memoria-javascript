function createMemoryCard(){

  const $memoryCard = document.createElement("article");
  
  const $iconCollab = `<img 
                    src='img/icon-collabcode.png' 
                    alt='gueio mascote da collabcode' 
                    class='icon'>
                </img>`;
  
  $memoryCard.classList.add('memory-card');
  $wrapCards.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML('afterbegin', $iconCollab);
  
}



function createMemoryCardFront(){

const $memoryCardFront = document.createElement("article");

const $iconJs = `<img 
                  src="img/icon-js.png" 
                  alt="icone livro do livro javascript" 
                  class="icon">`

$memoryCardFront.classList.add('memory-card');
$memoryCardFront.classList.add('-front'); 

$wrapCards.insertBefore($memoryCardFront, null);

$memoryCardFront.insertAdjacentHTML('afterbegin', $iconJs);


}


function clicarCard(){

  const cards = document.querySelectorAll('.memory-card');


  function handleCard(event){
    console.log(event.currentTarget);
  }

  cards.forEach((card) =>{
    card.addEventListener('click', handleCard);
  }); 
}