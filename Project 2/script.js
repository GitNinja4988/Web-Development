function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText.replace('%', '/100').replace('×', '*').replace('÷', '/'));
    } catch {
        display.innerText = 'Error';
    }
}

function invertSign() {
    const display = document.getElementById('display');
    if (display.innerText[0] === '-') {
        display.innerText = display.innerText.substring(1);
    } else {
        display.innerText = '-' + display.innerText;
    }
}