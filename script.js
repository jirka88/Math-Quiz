const problem = document.querySelector('.problem')
var optionDivs = document.querySelectorAll('.option')
const options = document.querySelectorAll('.option-value')
const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");

class GameService { 
    CorrectCount = 0;
    IncorrectCount = 0;
    newProblem() {
        let signs = ["+", "-"]
        let sign = signs[Math.floor(Math.random() * 2)]
        let number1 = Math.floor(Math.random() * 100) + 1
        let number2 = Math.floor(Math.random() * 100) + 1
        if (number1 < number2 && sign == "-") 
            sign = signs[0]
            
        problem.innerHTML = `${number1} ${sign} ${number2} = ?`
        
        if(sign === "+")
            this.result = number1 + number2
        else
            this.result = number1 - number2

        this.getOptions()
    }
    getOptions() {
        let randomRight = Math.floor(Math.random() * 3) // 0 - 2 (3 možnosti)
        let count = 0 
        options.forEach(option => {
            if(count === randomRight) {
                option.innerHTML = this.result
                optionDivs[count].setAttribute("value","true") //nastavení value
            }             
            else {
                option.innerHTML = Math.floor(Math.random() * 100) + 1
                optionDivs[count].setAttribute("value","false") 
            }     
            count++
        })
    }
    compareResultWithOption(option) {
        if(option == "true") {      //vyhodnocuje pomocí value v tlačítku 
            this.CorrectCount++;
            correct.innerHTML = "Correct answers: " + this.CorrectCount;
        }
        else {
            this.IncorrectCount++;
            incorrect.innerHTML = "Incorrect answers: " + this.IncorrectCount;
        }
        this.newProblem() //vytvoří se nový příklad i při špatném výpočtu = zaznamená se v proměnné "IncorrectCount"
    }
}

const gameService = new GameService()

window.onload = function () {
    optionDivs.forEach(option => {
        option.addEventListener('click', event => {
            gameService.compareResultWithOption(option.getAttribute("value")) //získá value 
        })
    })
   gameService.newProblem()
}