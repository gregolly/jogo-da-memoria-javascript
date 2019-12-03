const memoryCard = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = 
  `
  .memory-card{
    width: 155px;
    height: 155px;
    position: relative;
    margin-bottom: 20px;
    perspective: 100px;
    transition: transform 1s;
  }
  .memory-card .card{
    width: 100%;
    height: 100%;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    /* position: relative; */
    margin-bottom: 15px;
    cursor: pointer;
    position: absolute;
    backface-visibility: hidden;
  }

  .-active{
    transform: rotateY( 180deg );
  }
  .memory-card.-active .card{
    display: none;
  }

  .memory-card.-active .card.-front{
    display: flex;
  }

  .memory-card .card.-front{
    background-color: #fff;
  }

  .memory-card .card.-front::before{
    content: '';
    background-color: #d4d4d4;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    position: absolute;
  }

  .memory-card .card > .icon{
    width: 100px;
    height: 100px;
    position: absolute;
    transform: translateY(-12px);
    /* align-self: center; */
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }`
  
  $head.insertBefore($style, null);



  return ({src, alt, nameClass}) => 
  `
  <div class="memory-card">
    <article class="card -front">
      <img 
        src='${src}' 
        alt='${alt}' 
        class='icon'
        />
      </img>
    </article>

    <article class="card">
      <img 
        src='img/icon-collabcode.png' 
        alt='icone mascote gueio collabcode' 
        class='icon'
        />
      </img>
    </article>
  </div>  
  `
}


//onClick="handleClick()"
//função que captura o click de varios itens
let qtdActiveMemoryCard = 0;
function clicarCard(){
  const cards = document.querySelectorAll('.memory-card');

  function handleCard(event){

    const target = event.currentTarget;
    
    if(qtdActiveMemoryCard < 2){
      target.classList.toggle('-active');


      const $memoryCards = document.querySelectorAll('.memory-card.-active');

      // if($memoryCards[0].querySelector('.-front .icon').getAttribute('src') === $memoryCards[1].querySelector('.-front .icon').getAttribute('src')){
      //   console.log('são iguais')
      // }
    }

    setTimeout(() =>{
      target.classList.remove('-active');
    }, 3000);
    
  }

  cards.forEach((card) =>{
    card.addEventListener('click', handleCard);
  }); 

  $cardsWrapper.addEventListener('click', () =>{
    if(!$cardsWrapper.classList.contains('.-active')){
      qtdActiveMemoryCard = $cardsWrapper.querySelectorAll('.memory-card.-active').length;
    }
  });
}

