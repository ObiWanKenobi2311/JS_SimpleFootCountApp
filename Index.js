//intialize count to 0
let count = 0;
let histStatus = document.getElementById("stat");
let counter = document.getElementById("val1");

histStatus.textContent = "Previous entries: ";
counter.textContent = count;

function saveData() {
    if(count != 0) {
        histStatus.textContent += count + " - ";
        count = 0;
        counter.textContent = count;
    }
}

function increment() {
    count += 1;
    counter.textContent = count;
}