console.log("Snake Water Gun")

let arr = ['Snake', 'Water', 'Gun']
let toPlay = true
let round_no = 0
let user_wins = 0
let bot_wins = 0
let draws = 0
do{
    round_no++
    let user = Number.parseInt(prompt('Snake: 0\tWater: 1\tGun: 2\nEnter your choice: '))
    user_choice = arr[user]

    let bot = Math.floor(Math.random() * arr.length)
    bot_choice = arr[bot]

    console.log('User Choice: ' + user_choice)
    console.log("Bot Choice: " + bot_choice)

    if (user_choice == bot_choice) {
        alert('Draw')
        draws++
    }
    else if ((user_choice == 'Snake' && bot_choice == 'Water') || (user_choice == 'Water' && bot_choice == 'Gun') || (user_choice == 'Gun' && bot_choice == 'Snake')) {
        alert('User Wins')
        user_wins++
    }
    else if ((bot_choice == 'Snake' && user_choice == 'Water') || (bot_choice == 'Water' && user_choice == 'Gun') || (bot_choice == 'Gun' && user_choice == 'Snake')) {
        alert('Bot Wins')
        bot_wins++
    }
    else {
        alert("Not Sure, Try Again")
    }

    toPlay = confirm('Rounds played: ' + round_no + '\nDo you want to play again?')
} while (toPlay)

console.log('\n\nAfter playing ', round_no, '\nUser Wins: ', user_wins, '\nBot Wins: ', bot_wins, '\nDraws: ', draws)

if (user_wins > bot_wins) {
    console.log('User is the Winner')
}
else if (bot_wins > user_wins) {
    console.log('Bot is the Winner')
}
else {
    console.log('Draw')
}