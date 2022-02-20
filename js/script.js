import GameService from "./gameService.js";
import getExpires from "./cas";

const gameService = new GameService()

window.onload = function () {
    gameService.optionDivs.forEach(option => {
        option.addEventListener('click', event => {
            gameService.compareResultWithOption(option.getAttribute("value"), getExpires())
        })
    })
    gameService.newProblem()
}