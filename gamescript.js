function computer() {
    let randomchoice = ["rock" , "pappier" , "cessor"];
    const randomnumber = Math.floor(Math.random() * randomchoice.length);
    const computerchoice = randomchoice[randomnumber]
    return computerchoice
}

function user(choice){
    let pcChoice = computer()
    let resultD = ''

    if (pcChoice === "rock" && choice === "cessor" ){
        resultD = "you lose"
    }else if (pcChoice === "pappier" && choice === "rock" ){
        resultD = "you lose"
    } else if (pcChoice === "cessor" && choice === "pappier" ){
        resultD = "you lose"
    }
    else if (pcChoice === choice){
        resultD = "Draw"
    }
    else {
        resultD = "congratulation you win"
    }

    let pc = document.getElementById("pc")
    let user = document.getElementById("user")
    let result = document.getElementById("result")

    pc.innerHTML = `pc choice: ${pcChoice}`
    user.innerHTML = `your choice: ${choice}`
    result.innerHTML = `${resultD}`


} 

    








