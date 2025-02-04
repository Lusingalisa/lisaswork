const readlineSync =require('readline-sync')

function caesarCipher(message, shift) {
    let result = "";
    
    for (let char of message) {
        if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(((char.charCodeAt(0) + shift - 97) % 26 + 26) % 26 + 97);
        } else if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(((char.charCodeAt(0) + shift - 65) % 26 + 26) % 26 + 65);
        } else {
            result += char;
        }
    }
    
    return result;
}

while (true) {
    let action = readlineSync.question("Would you like to (E)ncrypt or (D)ecrypt a message?\n(Q) to quit: ");
    if (action === 'Q') break;
    
    let message = readlineSync.question("Enter your message: ");
    let shift = parseInt(readlineSync.question("Enter shift value from 1-25: "), 10);
    
    if (isNaN(shift) || shift < 1 || shift > 25) {
        console.log("Invalid shift value. Please enter a number between 1 and 25.");
        continue;
    }
    
    if (action === 'E') {
        console.log("The encrypted message is:", caesarCipher(message, shift));
        break;
    } else if (action === 'D') {
        console.log("The decrypted message is:", caesarCipher(message, -shift));
        break;
    } else {
        console.log("Invalid input. Please enter E, D, or Q.");
    }
}
