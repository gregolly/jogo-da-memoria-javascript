const createMemoryCard = () => `
  <article class="memory-card">
      <img 
        src='img/icon-collabcode.png' 
        alt='gueio mascote da collabcode' 
        class='icon'
        />
      </img>
  </article>
`;



const createMemoryCardFront = () => `
  <article class="memory-card -front">
      <img 
        src='img/icon-js.png' 
        alt='gueio mascote da collabcode' 
        class='icon'
        />
      </img>
  </article>
`;


//onClick="handleClick()"
//função que captura o click de varios itens
function clicarCard(){

  const cards = document.querySelectorAll('.memory-card');


  function handleCard(event){
    const target = event.currentTarget;
    target.classList.toggle('teste');
  }

  cards.forEach((card) =>{
    card.addEventListener('click', handleCard);
  }); 

}