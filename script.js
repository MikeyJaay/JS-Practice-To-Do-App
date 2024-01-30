const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    // if the input box is empty the alert will pop up
    alert("You Must Write Something!"); // alert prompt with text copy
  } else {
    let li = document.createElement("li"); //creates an HTML element via li
    li.innerHTML = inputBox.value; // the text the users adds
    listContainer.appendChild(li); // displays li text in the listcontainer div
  }
}
