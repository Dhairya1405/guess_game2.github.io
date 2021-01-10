let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;




console.log(secretNumber)
function check() {

    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);
    if (guess == 0) {
        console.log(guess)
        document.getElementById("guessing").innerHTML = "⛔️ No number!"
    }
    else if (guess == secretNumber) {
        document.getElementById("guessing").innerHTML = "🎉 Correct number!"
        document.querySelector('body').style.backgroundColor = 'green';

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            if (secretNumber < guess) {
                document.querySelector('.message').textContent = '📈 Number is too high !';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = '📈 Number is too low !';
                score--;
                document.querySelector('.score').textContent = score;
            }

        }
        else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    }
    




    //         if(){}

    // else if(){}

    // else if(){}


    // }



}


function again(){
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent=score
    document.querySelector('.guess').value=""
    document.querySelector('body').style.backgroundColor = 'black';


    
}
