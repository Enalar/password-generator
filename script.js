let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")

function generatePassword() {
    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
    "v","w","x","y","z"]

    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_",
    "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

    let password = ""
    let numberEl = document.getElementById("number-el").checked
    let symbolEl = document.getElementById("symbol-el").checked

    if (numberEl === true) {
        for (let i = 0; i < numbers.length; i++) {
            characters.push(numbers[i])
        }
    }

    if (symbolEl === true) {
        for (let i = 0; i < symbols.length; i++) {
            characters.push(symbols[i])
        }
    }

    let passwordLength = parseInt(document.getElementById("length-el").value)
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function generatePasswords() {
    let firstPassword = generatePassword()
    let secondPassword = generatePassword()
    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
}

function copyPassword(divId) {
    let clickedEl = document.getElementById(divId)
    if (clickedEl.textContent != "") {
        if (divId === "first-password") {
            navigator.clipboard.writeText(firstPasswordEl.textContent)
        } else if (divId === "second-password") {
            navigator.clipboard.writeText(secondPasswordEl.textContent)
        }
        clickedEl.innerText = "Copied"
    } 
}
