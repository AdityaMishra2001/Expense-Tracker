//getting user data input
let expense = document.getElementById("expense");
let descrip = document.getElementById("descrip");
let category = document.getElementById("category");

function addInput(e) {
  e.preventDefault();

  if (expense.value === "" || descrip.value === "" || category.value === "") {
    alert("Please enter all fields");
  } else {
    alert("Details saved to local storage");
    const details = {
      Expense: expense.value,
      Description: descrip.value,
      Category: category.value,
    };

    //saving to local storage
    localStorage.setItem(expense.value, JSON.stringify(details));

    ///display on screen

    //creating
    let div = document.createElement("div");

    //creating text
    div.appendChild(document.createTextNode(expense.value));
    div.appendChild(document.createTextNode("🔶" + descrip.value + "🔶"));
    div.appendChild(document.createTextNode(category.value + " "));

    //styling the text
    div.style.fontWeight = "bold";
    div.style.textAlign = "center";
    div.style.color = "brown";

    //creating an delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", onDelete);

    //style delete button
    deleteButton.style.color = "red";
    deleteButton.style.borderColor = "red";
    div.appendChild(deleteButton);

    //creating an edit button
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", onEdit);

    //style delete button
    editButton.style.color = "green";
    editButton.style.borderColor = "green";
    div.appendChild(editButton);

    form.after(div);
    myform.reset();
  }
}

// DELETE BUTTON FUNCTIONALITY
function onDelete() {
  const div = this.parentNode;
  // console.log(div)
  const name = div.childNodes[0].nodeValue.trim();
  // console.log(name)
  localStorage.removeItem(name);
  div.remove();
}

//Edit Button Functionality

function onEdit() {
  const div = this.parentNode;
  const divName = this.parentNode.childNodes[0].nodeValue.trim();
  const details = JSON.parse(localStorage.getItem(divName));
  expense.value = details.Expense;
  descrip.value = details.Description;
  category.value = details.Category;
  localStorage.removeItem(divName);
  div.remove();
}

const form = document.getElementById("myform");
form.addEventListener("submit", addInput);
