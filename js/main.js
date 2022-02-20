import getExpires from "./cas.js";

let level;

const levels = document.querySelector('.levels-container');
var cards = []
const url = new URL("http://127.0.0.1:5500/level.html");

window.onload = () => {
    let cookie = decodeURIComponent(document.cookie).split("=")[1]; 
    level = cookie;
    for (let i = 0; i < 10; i++) {
        getCard(i + 1)
    }
    addEvents()
    if (cookie === undefined) {
        document.cookie = "level=1;expires=" + getExpires() + ";" + "Secure"; //pokud neexsituje cookies => vytvoří jí
    }      
}

function getCard(i) {
    const card = document.createElement('div')
    card.className = "level-card"
    if(level >= i) {
        card.style.background = "#fe4a49";
    }
    const content = document.createElement('p')
    content.className = "level-content"
    content.innerHTML = i
    card.appendChild(content)
    levels.appendChild(card)
    cards.push(card)
}

function onLevelClick(lvl) {
    if(level >= lvl) {
        url.searchParams.set('lvl', lvl);
        window.location.href = url;
    }
    else {
        alert("Unlocked!")
    }
}

function addEvents() {
    for (const card of cards) {
        card.addEventListener('click', () => {
          onLevelClick(card.innerText)
        })
      }
}