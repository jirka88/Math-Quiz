{/* <div class="level-card">
<p class="level-content"></p>
</div> */}

const levels = document.querySelector('.levels-container');

window.onload = () => {
    for (let i = 0; i < 10; i++) {
        levels.innerHTML += getCard(i + 1)
    }
}

function getCard(i) {
    return  `<div class="level-card">
                <p class="level-content">${i}</p>
            </div>`
}