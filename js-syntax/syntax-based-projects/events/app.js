const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const printColor = function(box) {
    console.log(this);
    console.log(this.style.backgroundColor + " box was clicked!");
};

const changeColor = function(evt) {
    console.log(evt);
    const h1 = document.querySelector("h1");
    h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");

for (const color of colors) {
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.classList.add("box");
    container.appendChild(box);
    // box.addEventListener('click', function() {
    // 	printColor(box)
    // })
    box.addEventListener("click", printColor);
    box.addEventListener("click", changeColor);
}

document.body.addEventListener("keypress", function(event) {
    console.log(event); // KeyboardEvent object's contents are going to be printed out whenever we press any key anywhere on the page
});

// -------------------------------------------------------- //

const input = document.querySelector("#username");

input.addEventListener("keydown", function(event) {
    console.log("KEY DOWN!");
});

input.addEventListener("keyup", function(event) {
    console.log("KEY UP!");
});

input.addEventListener("keypress", function(event) {
    console.log("KEY PRESS!");
});

// -------------------------------------------------------- //

const addItem = (item) => {
    if (!item.value) return;
    const newItemText = item.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    const h1 = document.querySelector("h1");
    newItem.style = `color:${h1.style.color}`;
    itemsUL.appendChild(newItem);
    item.value = "";
    h1.style.color = "";
};

const addItemInput = document.querySelector("#addItem");
const itemsUL = document.querySelector("#items");
addItemInput.addEventListener("keypress", function(e) {
    console.log(`Key pressed: ${e.key}`);
    if (e.key === "Enter") {
        addItem(this);
    }
});

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function(e) {
    console.log("Submit button is pressed");
    if (!addItemInput.value) return;
    addItem(addItemInput);
});
