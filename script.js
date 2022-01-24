const problem = document.querySelector('.problem')
const options = document.querySelectorAll('.option-value')
const options1 = document.querySelectorAll('.option')

var vysledek;

newProblem = () => {
    let znamenka = ["+","-"];
    let znamenko = znamenka[Math.floor(Math.random() * 2)];
    let number1 = Math.floor(Math.random() * 101);
    let number2 = Math.floor(Math.random() * 101);
    problem.innerHTML = `${number1} ${znamenko} ${number2} = ?`

    if(znamenko === "+") {
        vysledek = number1 + number2;
    }
    else {
        vysledek = number1 - number2;
    }     
    getOptions();
}
getOptions = () => {
    let randomRight = Math.floor(Math.random() * 3) // 0 - 2 (3 možnosti)
    count = 0; 
    options.forEach(option => {
        if(count === randomRight) {
                option.innerHTML = vysledek;
        }
        else {
            option.innerHTML = Math.floor(Math.random() * 101)
        }
        count++;
    });
}
compareResultWithOption = (option) => {
    if(vysledek == option.innerHTML) {
        newProblem();
    }
}

/*class GameService {
    newProblem() {
        problem.innerHTML = `${Math.floor(Math.random() * 101)} + ${Math.floor(Math.random() * 101)} = ?`
        this.getOptions()
    }
    getOptions() {
        let randomRight = Math.floor(Math.random() * 3) // 0 - 2 (3 možnosti)
        let count = 0
        let result = this.getResult()
        for (const option of options) {
            if (randomRight == count) {
                option.innerHTML = result
                count = -1
            }
            else {
                option.innerHTML = Math.floor(Math.random() * 101)
                count++
            }
        }
    }
    getResult() {
        let test = problem.innerHTML.split(' ')
        return Number(test[0]) + Number(test[2])
    }
    compareResultWithOption(option) {
        let result = this.getResult()
        if (option.innerHTML == result) {
            this.newProblem()
        }
    }
}

const gameService = new GameService()
*/
window.onload = function () {
    options1.forEach(option => {
        option.addEventListener('click', event => {
            compareResultWithOption(event.target)
        })
    })
   newProblem()
}

