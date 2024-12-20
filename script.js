// Function to generate a random letter
function generateRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random uppercase letter
}

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Random number between 0 and 99
}

// Function to encrypt a single character with added complexity
function encryptChar(c) {
    let asciiValue = c.charCodeAt(0);
    let randomMultiplier = Math.floor(Math.random() * 9) + 2; // Random multiplier between 2 and 10
    let randomOffset = Math.floor(Math.random() * 50) + 10; // Random offset between 10 and 59
    let encryptedValue = (asciiValue * randomMultiplier + randomOffset) % 256;
    let randomLetter = generateRandomLetter();
    let randomNumber = generateRandomNumber();
    return `${encryptedValue} ${randomLetter} ${randomNumber} ${randomMultiplier} ${randomOffset} `;
}

// Function to decrypt a single encrypted character with added complexity
function decryptChar(input) {
    let parts = input.split(' ');
    let encryptedValue = parseInt(parts[0]);
    let randomMultiplier = parseInt(parts[3]);
    let randomOffset = parseInt(parts[4]);
    let asciiValue = 0;
    for (let i = 0; i < 256; i++) {
        if ((i * randomMultiplier + randomOffset) % 256 === encryptedValue) {
            asciiValue = i;
            break;
        }
    }
    return String.fromCharCode(asciiValue);
}

// Function to encrypt the entire text
function encryptText(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += encryptChar(input[i]);
    }
    return result;
}

// Function to decrypt the entire text
function decryptText(input) {
    let parts = input.split(' ');
    let result = '';
    for (let i = 0; i < parts.length; i += 5) {
        let encryptedPart = parts[i] + ' ' + parts[i+1] + ' ' + parts[i+2] + ' ' + parts[i+3] + ' ' + parts[i+4];
        result += decryptChar(encryptedPart);
    }
    return result;
}

// Perform encryption
function performEncryption() {
    let text = document.getElementById("inputText").value;
    let encryptedText = encryptText(text);
    document.getElementById("outputText").innerText = encryptedText;
}

// Perform decryption
function performDecryption() {
    let text = document.getElementById("inputText").value;
    let decryptedText = decryptText(text);
    document.getElementById("outputText").innerText = decryptedText;
}

// Reset fields
function resetFields() {
    document.getElementById("inputText").value = '';
    document.getElementById("outputText").innerText = '...';
}
