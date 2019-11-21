const $root = document.querySelector('#root');
const $memoryCard = document.createElement("article");
const $icon = `<img 
                  src='img/icon-collabcode.png' 
                  alt='gueio mascote da collabcode' 
                  class='icon'>
              </img>`;

$memoryCard.classList.add('memory-card');
//$memoryCard.innerHTML = $icon;  
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML('afterbegin', $icon);

//icone aleatorio

const $sortCard = document.createElement("article");
const $iconSort = `<img 
                      src="img/icon-js.png" 
                      alt="" 
                      class="icon-sort">
                  </img>`

$sortCard.classList.add('sort-card');
$root.insertBefore($sortCard, null);
$sortCard.insertAdjacentHTML('afterbegin', $iconSort);


