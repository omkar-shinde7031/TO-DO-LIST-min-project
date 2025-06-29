// First we access elements from the HTML file
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Unicode for ×
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Save the list after adding a task
}

// Event listener for marking or deleting tasks
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save updated state
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save updated state
    }
}, false);

// Save to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show tasks from localStorage
function showTask() {
    const saved = localStorage.getItem("data");
    if (saved) {
        listContainer.innerHTML = saved;
    }
}

showTask();
