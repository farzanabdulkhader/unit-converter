let inputNum = 0
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function calcAll() {
    let inputNum = inputEl.value
    lengthCalc(inputNum)
    volumeCalc(inputNum)
    massCalc(inputNum)
}

function lengthCalc(num) {
    const meterToFeet = (num * 3.28084).toFixed(2)
    const feetToMeter = (num / 3.28).toFixed(2)
    lengthEl.textContent = `${num} meters = ${meterToFeet} feet | ${num} feet = ${feetToMeter} meters`

}

function volumeCalc(num) {
    const literToGallon = (num * 0.264172).toFixed(2)
    const gallonToLiter = (num / 0.264172).toFixed(2)
    volumeEl.textContent = `${num} liters = ${literToGallon} gallons | ${num} gallons = ${gallonToLiter} liters`
}

function massCalc(num) {
    const kiloToPound = (num * 2.20462).toFixed(2)
    const poundToKilo = (num / 2.20462).toFixed(2)
    massEl.textContent = `${num} kilos = ${kiloToPound} pounds | ${num} pounds = ${poundToKilo} kilos`
}