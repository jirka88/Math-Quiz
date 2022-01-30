import GameService from "./gameService.js";

const gameService = new GameService()

window.onload = function () {
    gameService.optionDivs.forEach(option => {
        option.addEventListener('click', event => {
            gameService.compareResultWithOption(option.getAttribute("value"))
        })
    })
    gameService.newProblem()
}