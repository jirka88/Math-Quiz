
export default class GameService {
    problem = document.querySelector('.problem')
    optionDivs = document.querySelectorAll('.option')
    options = document.querySelectorAll('.option-value')
    correct = document.querySelector(".correct");
    incorrect = document.querySelector(".incorrect");
    levelHeading = document.querySelector(".TextLevl");
    correctCount = 0;
    incorrectCount = 0;
    currentProblem

    newProblem(problem) {
        this.levelHeading.innerHTML = "Level " + problem;
        this.currentProblem = problem
        let number1
        let number2
        let signs = ["+", "-", "×", ":"]
        let sign
        let maxNum

        switch (problem) {
            case '1':
                maxNum = 10
                sign = '+'
                break

            case '2':
                maxNum = 50
                sign = '-'
                break

            case '3':
                maxNum = 100
                sign = signs[Math.floor(Math.random() * 2)]
                break
        }

        number1 = Math.floor(Math.random() * maxNum) + 1
        number2 = Math.floor(Math.random() * maxNum) + 1

        if (number1 < number2 && sign == "-")
            sign = signs[0]

        this.problem.innerHTML = `${number1} ${sign} ${number2} = ?`

        if (sign === "+")
            this.result = number1 + number2
        else
            this.result = number1 - number2

        this.getOptions(maxNum)
    }

    getOptions(maxNum) {
        let randomRight = Math.floor(Math.random() * 3)  // 0 - 2 (3 možnosti)
        let count = 0
        this.options.forEach(option => {
            if (count === randomRight) {
                option.innerHTML = this.result
                this.optionDivs[count].setAttribute("value", "Correct")
            }
            else {
                option.innerHTML = Math.floor(Math.random() * maxNum) + 1
                this.optionDivs[count].setAttribute("value", "Incorrect")
            }
            count++
        })
    }

    compareResultWithOption(optionValue) {
        if (optionValue == "Correct") {
            this.correctCount++
            this.correct.innerHTML = `${optionValue}: ${this.correctCount}`

            if (this.correctCount == 5)
                this.nextLevel()
        }
        else {
            this.incorrectCount++;
            this.incorrect.innerHTML = `${optionValue}: ${this.incorrectCount}`
        }

        this.newProblem(this.currentProblem) // Vytvoří se nový příklad i při špatném výpočtu = zaznamená se v proměnné "incorrectCount"
    }

    nextLevel() {
        this.currentProblem = (Number(this.currentProblem) + 1).toString()
        window.location.search = window.location.search.slice(0, -1) + this.currentProblem
    }
}