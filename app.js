let counterValue = document.getElementById('countervalue');

function onIncrease() {
    let previousvalue = counterValue.textContent;
    let updatedvalue = parseInt(previousvalue) + 1;
    counterValue.textContent = updatedvalue;
    if (updatedvalue > 0) {
        counterValue.style.color = "green";
    }

}

function onDecrease() {
    let previousvalue = counterValue.textContent;
    let updatedvalue = parseInt(previousvalue) - 1;
    counterValue.textContent = updatedvalue;
    if (updatedvalue < 0) {
        counterValue.style.color = "red";
    }

}

function onReset() {
    let updatedvalue = 0;
    counterValue.textContent = updatedvalue;
    counterValue.style.color = "black";


}