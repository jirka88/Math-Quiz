"use strict";

const levels = document.querySelector('.levels-container');
var cards = []

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

function onLevelClick(i) {
    console.log(i)
}

function addEvents() {
    for (const card of cards) {
        card.addEventListener('click', () => {
          console.log(card.innerText);
        })
      }
}