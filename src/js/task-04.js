let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById("value");

function updateCounterValue() {
    valueSpan.textContent = counterValue;
}

// Слухач події для кнопки "Зменшити"
decrementBtn.addEventListener("click", function() {
    counterValue--;
    updateCounterValue();
});

// Слухач події для кнопки "Збільшити"
incrementBtn.addEventListener("click", function() {
    counterValue++;
    updateCounterValue();
});

updateCounterValue();
