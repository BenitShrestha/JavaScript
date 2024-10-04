console.log("Scissor Paper Rock")

let arr = ['Scissor', 'Paper', 'Rock']
let toPlay = true
let round_no = 0
let user_wins = 0
let bot_wins = 0
let draws = 0
do{
    round_no++
    let user = Number.parseInt(prompt('Scissor: 0\tPaper: 1\tRock: 2\nEnter your choice: '))
    user_choice = arr[user]

    let bot = Math.floor(Math.random() * arr.length)
    bot_choice = arr[bot]

    console.log(round_no + '. User Choice: ' + user_choice)
    console.log(round_no + ". Bot Choice: " + bot_choice + '\n\n')

    if (user_choice == bot_choice) {
        alert('Draw')
        draws++
    }
    else if ((user_choice == 'Scissor' && bot_choice == 'Paper') || (user_choice == 'Paper' && bot_choice == 'Rock') || (user_choice == 'Rock' && bot_choice == 'Scissor')) {
        alert('User Wins')
        user_wins++
    }
    else if ((bot_choice == 'Scissor' && user_choice == 'Paper') || (bot_choice == 'Paper' && user_choice == 'Rock') || (bot_choice == 'Rock' && user_choice == 'Scissor')) {
        alert('Bot Wins')
        bot_wins++
    }
    else {
        alert("Not Sure, Try Again")
    }

    toPlay = confirm('Rounds played: ' + round_no + '\nDo you want to play again?')
} while (toPlay)

console.log('\n\nAfter playing', round_no  + ' rounds', '\nUser Wins: ', user_wins, '\nBot Wins: ', bot_wins, '\nDraws: ', draws)

if (user_wins > bot_wins) {
    console.log('User is the Winner')
}
else if (bot_wins > user_wins) {
    console.log('Bot is the Winner')
}
else {
    console.log('Draw')
}