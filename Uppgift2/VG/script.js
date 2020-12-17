/*
    Author:     Marcus Ljungqvist
    Project:    Miniräknare - VG uppgift
    Date:       2020-12-16
*/



class Calculator {
    constructor(förraHändelsenTextElement, nyaHändelsenTextElement)
    {
        this.förraHändelsenTextElement = förraHändelsenTextElement
        this.nyaHändelsenTextElement = nyaHändelsenTextElement
        this.taBortAllt()
    }


taBortAllt() {
    this.nyaHändelsen = ''
    this.förraHändelsen = ''
}


delete() {
    this.nyaHändelsen = this.nyaHändelsen.toString().slice(0, -1)
}

sättVärde(nummer) {
    if (nummer === "." && this.nyaHändelsen.includes(".")) return
    this.nyaHändelsen = this.nyaHändelsen + nummer
}

chooseOperation(action) {
    if (this.nyaHändelsen === "") return
    if (this.förrahändelsen !== "") {
        this.compute()
    }
    this.action = action
    this.förraHändelsen = this.nyaHändelsen
    this.nyaHändelsen = ""
}

compute() {
    let computation
    let föregående = parseFloat(this.förraHändelsen)
    let nuvarande = parseFloat(this.nyaHändelsen)
    if (isNaN(föregående) || isNaN(nuvarande)) return

    switch (this.action) {
        case "+":
            computation = föregående + nuvarande
            break
        case "-":
            computation = föregående - nuvarande
            break
        case "*":
            computation = föregående * nuvarande
            break
        case "/":
            computation = föregående / nuvarande
            break
        default:
            return
    }

this.nyaHändelsen = computation
this.action = undefined
this.förraHändelsen = ""

}

updateDisplay() {
    this.nyaHändelsenTextElement.innerText = this.nyaHändelsen
    this.förraHändelsenTextElement.innerText = this.förraHändelsen
}
}

let numberButtons = document.querySelectorAll('[nummer]')
let operationButtons = document.querySelectorAll('[action]')
let equalsButton = document.querySelector('[resultat]')
let deleteButton = document.querySelector("[delete]")
let taBortAllt = document.querySelector("[taBortAllt]")
let förraHändelsenTextElement = document.querySelector("[förraHändelsen]")
let nyaHändelsenTextElement = document.querySelector("[nyaHändelsen]")

let calculator = new Calculator(förraHändelsenTextElement, nyaHändelsenTextElement)

numberButtons.forEach(knapp => {
    knapp.addEventListener("click", (e) => {
        calculator.sättVärde(knapp.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(knapp => {
    knapp.addEventListener("click", (e) => {
        calculator.chooseOperation(knapp.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", knapp =>{
    calculator.compute()
    calculator.updateDisplay()
})

taBortAllt.addEventListener("click", knapp =>{
    calculator.taBortAllt()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", knapp =>{
    calculator.delete()
    calculator.updateDisplay()
})

    