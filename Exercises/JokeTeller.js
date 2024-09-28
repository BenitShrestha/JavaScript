console.log("Tell a Joke")
document.write("Exercise 3: Tell a Joke")

let jokes = [`Why don't skeletons fight each other? They don't have the guts.`, 

    `Why was the math book sad? It had too many problems.`, 
    
    `Why did the scarecrow win an award? He was outstanding in his field.`, 
    
    `Parallel lines have so much in common. It’s a shame they’ll never meet.`, 
    
    `Why did the coffee file a police report? It got mugged.`, 
    
    `What do you call fake spaghetti? An impasta.`, 
    
    `What’s orange and sounds like a parrot? A carrot.`, 
    
    `How do you organize a space party? You planet.`, 
    
    `Why don’t some couples go to the gym? Because some relationships don’t work out.`, 
    
    `Why can’t you give Elsa a balloon? Because she’ll let it go.`, 
    
    `I used to play piano by ear, but now I use my hands.`, 
    
    `Why did the bicycle fall over? It was two-tired.`, 
    
    `Why don’t eggs tell jokes? They’d crack each other up.`, 
    
    `What do you call a factory that makes good products? A satisfactory.`, 
    
    `How do you make holy water? You boil the hell out of it.`, 
    
    `I told my wife she was drawing her eyebrows too high. She looked surprised.`, 
    
    `Why did the golfer bring two pairs of pants? In case he got a hole in one.`, 
    
    `What do you get if you cross a snowman with a vampire? Frostbite.`, 
    
    `Did you hear about the cheese that saved the world? It was legen-dairy.`, 
    
    `I would avoid the sushi if I were you. It’s a little fishy.`, 
    
    `Why don’t skeletons fight each other? They don’t have the guts.`, 
    
    `How does a penguin build its house? Igloos it together.`, 
    
    `What did the grape do when it got stepped on? Nothing, but it let out a little wine.`, 
    
    `Why don’t scientists trust atoms? Because they make up everything.`, 
    
    `Want to hear a construction joke? Oh wait, I’m still working on it.`, 
    
    `Why did the tomato turn red? Because it saw the salad dressing.`, 
    
    `What do you call an alligator in a vest? An investigator.`, 
    
    `What did one ocean say to the other ocean? Nothing, they just waved.`, 
    
    `I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.`, 
    
    `Why don’t oysters donate to charity? Because they’re shellfish.`, 
    
    `Why did the gym close down? It just didn’t work out.`, 
    
    `I’m reading a book on anti-gravity. It’s impossible to put down.`, 
    
    `Did you hear about the guy who invented Lifesavers? He made a mint!`, 
    
    `How do you find Will Smith in the snow? You look for fresh prints.`, 
    
    `I don’t trust stairs. They’re always up to something.`, 
    
    `What’s brown and sticky? A stick.`, 
    
    `Why did the computer go to therapy? It had too many bytes.`, 
    
    `How do you make a tissue dance? You put a little boogie in it.`, 
    
    `What did the zero say to the eight? Nice belt!`, 
    
    `What did one wall say to the other? "I'll meet you at the corner."`, 
    
    `Why did the cow go to space? To see the Milky Way.`, 
    
    `What lights up a soccer stadium? A soccer match.`, 
    
    `Why was the stadium so cool? It was filled with fans.`, 
    
    `Why don’t elephants use computers? They’re afraid of the mouse.`, 
    
    `How do you catch a squirrel? Climb a tree and act like a nut.`, 
    
    `Why do seagulls fly over the sea? Because if they flew over the bay, they’d be bagels.`, 
    
    `What do you call a bear with no teeth? A gummy bear.`, 
    
    `Why don’t crabs give to charity? Because they’re shellfish.`, 
    
    `Why did the chicken join a band? Because it had the drumsticks.`, 
    
    `Why don’t melons get married? Because they cantalou`]

let ask = confirm("Do you want to hear a joke?")
let result = jokes[Math.floor(Math.random() * jokes.length)]

if (ask){
    document.write(`<br>" ${result} " </br>`)
}