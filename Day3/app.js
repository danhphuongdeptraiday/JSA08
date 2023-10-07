localStorage.setItem("name", "Phương");
localStorage.setItem("age", 22);

let nameFromLocalStorage = localStorage.getItem("name");
console.log("Tên của tôi là: " + nameFromLocalStorage);

// const keys = Object.keys(localStorage); // => 1 mảng
// console.log(keys);
const keys = Object.keys(localStorage); // => 1 mảng
console.log(keys.reverse());
function checkContainKey(bien) {
  const keys = Object.keys(localStorage); // => 1 mảng
  console.log(keys.reverse());
  for (let i = 0; i < keys.length; i++) {
    if (bien == keys[i]) {
      return true;
    }
  }
  return false;
}

document.querySelector("button").addEventListener("click", function () {
  let bien = prompt("Enter key");
  //   while (true) {
  if (checkContainKey(bien) == true) {
    localStorage.removeItem(bien);
  } else {
    alert("Key k ton tai");
    bien = prompt("Enter key again");
  }
  //   }
});
