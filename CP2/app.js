let CRUD_Input = document.getElementById("CRUD_Input");
let chooseBtn = document.getElementById("chooseBtn");

let getListFoodFromLocal = JSON.parse(localStorage.getItem("listFood"));
if (getListFoodFromLocal == null) {
  localStorage.setItem("listFood", JSON.stringify([]));
  window.location.reload();
}

chooseBtn.addEventListener("click", function () {
  // Create
  if (CRUD_Input.value == "C") {
    let inputNewFood = prompt("Enter new food ?");
    getListFoodFromLocal.push(inputNewFood);
    localStorage.setItem("listFood", JSON.stringify(getListFoodFromLocal));
    // Read
  } else if (CRUD_Input.value == "R") {
    let output = getListFoodFromLocal.join(", ");
    alert("Những thức ăn có trong localStorage: " + output);
    // Update
  } else if (CRUD_Input.value == "U") {
    let enterFoodUpdate = prompt("Enter food name you want to update");
    let enterNewFood = prompt("Enter new food name ?");
    getListFoodFromLocal[getListFoodFromLocal.indexOf(enterFoodUpdate)] =
      enterNewFood;

    localStorage.setItem("listFood", JSON.stringify(getListFoodFromLocal));
    // Delete
  } else if (CRUD_Input.value == "D") {
    let enterFoodUpdate = prompt("Enter food name you want to delete");
    let indexDelete = getListFoodFromLocal.indexOf(enterFoodUpdate);
    getListFoodFromLocal.splice(indexDelete, 1);
    let output = getListFoodFromLocal.join(", ");
    alert("Những thức ăn có trong localStorage: " + output);
    localStorage.setItem("listFood", JSON.stringify(getListFoodFromLocal));
  }
});
