/* Script to generate dialogue for kitty */

var kittyWords = [
    "Meow.",
    "I'm hungry.",
    "Let me outside.",
    "Clean my box.",
    "Pet me.",
    "Nice human.",
    "Feed me.",
    "No.",
    "I'd like some quiet, please.",
    "Who am I?",
    "I like you human.",
    "Someday, I'll get that red dot.",
    "Is it a belly rub or a belly trap?",
    "If I fits, I sits.",
    "Can I bite you?",
    "Pay attention to me!!!",
    "It wasn't me.",
    "A little privacy please?",
    "Uh oh. I've been caught.",
    "You're my favorite human. Don't tell April.",
    "Wake up. Wake up. Wake up.",
    "I've left a dead mouse on your doorstep. You're welcome.",
    "Time for a bath? No!!!",
    "Hi. Would you like to see my butt?",
    "You are in the way of my nap time.",
    "I just woke up. Time to sleep again.",
    "Oh, you got me an expensive new toy? No, I want to play with the bottle cap.",
    "Hi. How was your day? Oh yeah? Can you feed me now?",
    "Please sir. I'd like another box.",
    "Send help. I'm stuck in the closet again.",
    "Are you calling me fat?",
    "Emergency! Emergency! My food bowl is empty!", 
    "Excuse me. Can you tell the dog to move out of my spot?",
    "Play with me.",
    "Why does she get mad when I wake her up with my paw on her face?",
    "Where does she keep taking my poop?",
    "Are you my new servant?",
    "You want some catnip? I know a girl...",
    "The dog did it!"
]

function kittyTalk() {
    var randomNumber = Math.floor(Math.random() * (kittyWords.length));
    document.getElementById("kittyTalk").innerHTML = kittyWords[randomNumber];
}

object.getElementById("kitty").addEventListener("onclick", kittyTalk);