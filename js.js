// Elements
// Display element
const counterDisplay = document.getElementById('CounterDisplay')
// Increment button
const incrementButton = document.getElementById('IncrementBtn')
// Decrement button
const decreementButton = document.getElementById('DecrementBtn')

// State
let count = 0

// Increment: add 1 and update display
incrementButton.addEventListener('click', () => {
     count = count + 1;
     counterDisplay.textContent = count;
})


// Decrement: subtract 1 and update display
decreementButton.addEventListener('click', () => {
     count = count - 1;
     counterDisplay.textContent = count
})