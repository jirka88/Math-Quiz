const problem = document.querySelector('.problem')
const optionDivs = document.querySelectorAll('.option')
const options = document.querySelectorAll('.option-value')

class GameService { 
    newProblem() {
        let signs = ["+", "-"]
        let sign = signs[Math.floor(Math.random() * 2)]
        let number1 = Math.floor(Math.random() * 11) + 1
        let number2 = Math.floor(Math.random() * 11) + 1
        if (number1 < number2) {
            if (sign == "-")
                sign = signs[0]
        }
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
            if(count === randomRight)
                option.innerHTML = this.result
            else
                option.innerHTML = Math.floor(Math.random() * 11) + 1

            count++
        })
    }
    compareResultWithOption(option) {
        if(this.result == option.innerHTML) {
            this.newProblem()
        }
    }
}

const gameService = new GameService()

window.onload = function () {
    optionDivs.forEach(option => {
        option.addEventListener('click', event => {
            gameService.compareResultWithOption(event.target)
        })
    })
   gameService.newProblem()
}