const display = document.querySelector(".display");
const input = document.querySelector("#upload");
let img = document.querySelector("img");
var img_src = "";

input.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  console.log(reader.result);
  //   reader.addEventListener("load", () => {
  // img_src = reader.result;

  display.innerHTML = `<img src=${reader.result} alt=''/>`;
  //   });

  console.log(img_src);
});
