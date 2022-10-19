let min = 10000;
let max = 90000;
let num = Math.floor(Math.random() * min) + max;

//MAKE RANDOM NUM TWEEN 10K TO 90K

document.getElementById('ticketNum').innerText = num;
//LOOK FOR ELEMENT WITH SPECIFIED HTML ID ATTRIBUTE omds this is just like android studio


function maybeAlert() {
    alert('Amazing! :D'); //google pop up looking thing
}

function definetelyPopUp() {
    alert('See you then!');
}

function signUpPrompt() {
    let name = prompt('Great! Please provide your name: '); //can type in the alert and assign it to variable
    prompt('Please provide your email: '); // does nothing btw xx

    document.getElementById('userMsg').innerText = `See you then, ${name}!`
}
