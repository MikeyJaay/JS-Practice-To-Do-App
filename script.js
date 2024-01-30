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
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Adds cross 'x' icon
    li.appendChild(span);
  }
  inputBox.value = "";
}

//  For click crosses out or uncrosses out task & changes check png 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);


