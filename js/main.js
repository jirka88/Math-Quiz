const levels = document.querySelector('.levels-container');
var cards = []
const url = new URL("http://127.0.0.1:5500/level.html");

window.onload = () => {
    for (let i = 0; i < 10; i++) {
        getCard(i + 1)
    }
    addEvents()
}

function getCard(i) {
    const card = document.createElement('div')
    card.className = "level-card"
    const content = document.createElement('p')
    content.className = "level-content"
    content.innerHTML = i
    card.appendChild(content)
    levels.appendChild(card)
    cards.push(card)
}

function onLevelClick(lvl) {
    url.searchParams.set('lvl', lvl);
    window.location.href = url;
}

function addEvents() {
    for (const card of cards) {
        card.addEventListener('click', () => {
          onLevelClick(card.innerText)
        })
      }
}