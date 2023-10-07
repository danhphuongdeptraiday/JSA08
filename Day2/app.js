let a = document.querySelector("#myInput");
let button = document.getElementsByTagName("button");
let notification = document.querySelector(".notification");

// alert
button[0].addEventListener("click", function () {
  if (a.value <= 10) {
    // alert("Đúng rồi");
    notification.innerText = "Đúng rồi";
  } else {
    notification.innerText = "Sai rồi";
  }
});

// Notification
button[1].addEventListener("click", function () {
  //   notification.remove();
  //   if (notification.style.display == "none") {
  //     notification.style.display = "flex";
  //   } else {
  //     notification.style.display = "none";
  //   }
});

let count = 1;
// todolist
let container = document.querySelector(".container");
let inputList = document.querySelector("#inputList");
button[2].addEventListener("click", function () {
  let new_item = document.createElement("div");
  new_item.className = "item";

  let new_id_p = document.createElement("p");
  new_id_p.innerHTML = count;
  count = count + 1;

  let new_item_p = document.createElement("p");
  new_item_p.innerText = inputList.value;

  let new_item_divDelete = document.createElement("div");
  new_item_divDelete.innerText = "X";
  //   new_item_divDelete.className = "delete";
  new_item_divDelete.setAttribute("class", "delete");
  new_item_divDelete.setAttribute("onclick", "deleteItem(this)");

  new_item.appendChild(new_id_p);
  new_item.appendChild(new_item_p);
  new_item.appendChild(new_item_divDelete);

  container.appendChild(new_item);
});
function deleteItem(e) {
  e.parentElement.remove();
}
