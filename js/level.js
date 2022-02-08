import GameService from "./gameService.js";

const gameService = new GameService()

window.onload = function () {
    gameService.optionDivs.forEach(option => {
        option.addEventListener('click', event => {
            gameService.compareResultWithOption(option.getAttribute("value"))
        })
    })
    let params = new URLSearchParams(window.location.search);
    gameService.newProblem(params.get('lvl'))
}