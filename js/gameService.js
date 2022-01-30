export default class GameService {

    problem = document.querySelector('.problem')
    optionDivs = document.querySelectorAll('.option')
    options = document.querySelectorAll('.option-value')
    correct = document.querySelector(".correct");
    incorrect = document.querySelector(".incorrect");

    correctCount = 0;
    incorrectCount = 0;

    newProblem(problem) {
        let signs = ["+", "-"]
        let sign = signs[Math.floor(Math.random() * 2)]
        let number1 = Math.floor(Math.random() * 100) + 1
        let number2 = Math.floor(Math.random() * 100) + 1
        if (number1 < number2 && sign == "-")
            sign = signs[0]

        this.problem.innerHTML = `${number1} ${sign} ${number2} = ?`

        if (sign === "+")
            this.result = number1 + number2
        else
            this.result = number1 - number2

        this.getOptions()
    }

    getOptions() {
        let randomRight = Math.floor(Math.random() * 3)  // 0 - 2 (3 možnosti)
        let count = 0
        this.options.forEach(option => {
            if (count === randomRight) {
                option.innerHTML = this.result
                this.optionDivs[count].setAttribute("value", "Correct")
            }
            else {
                option.innerHTML = Math.floor(Math.random() * 100) + 1
                this.optionDivs[count].setAttribute("value", "Incorrect")
            }
            count++
        })
    }

    compareResultWithOption(optionValue) {
        if (optionValue == "Correct") {
            this.correctCount++
            this.correct.innerHTML = `${optionValue}: ${this.correctCount}`
        }
        else {
            this.incorrectCount++;
            this.incorrect.innerHTML = `${optionValue}: ${this.incorrectCount}`
        }

        this.newProblem() // Vytvoří se nový příklad i při špatném výpočtu = zaznamená se v proměnné "incorrectCount"
    }
}