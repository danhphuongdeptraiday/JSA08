let post_comment = document.getElementById("post_comment");
let list_post_comment = document.querySelector(".list_post_comment");
let username = document.getElementById("username");
let comment = document.getElementById("comment");

// Check xem trong localStorage có tồn tại mảng comment
let getListComment = JSON.parse(localStorage.getItem("listComment"));
if (getListComment == null) {
  localStorage.setItem("listComment", JSON.stringify([]));
  location.reload();
} else {
  post_comment.addEventListener("click", function () {
    // CALL FUNCTION
    // checkExistedUser(getListComment);
    if (checkComment(username.value, comment.value) == true) {
      getListComment.push({
        username: username.value,
        comment: comment.value,
      });

      localStorage.setItem("listComment", JSON.stringify(getListComment));
      location.reload();
    }
    comment.value = "";
    username.value = "";
  });
}

// function checkExistedUser(usernameInput, arrayRegistered) {
//   if (usernameInput == arrayRegistered[i].username) {
//     alert("User da ton tai");
//     return false;
//   }

//   return true;
// }

renderComment(getListComment);

// Render comments
function renderComment(arrayComments) {
  for (let i = 0; i < arrayComments.length; i++) {
    let new_item_comment = document.createElement("div");
    new_item_comment.className = "item_comment";
    new_item_comment.innerHTML = `
    <!-- img_container -->
    <div class="img_container">
    <img src="https://s0.2mdn.net/simgad/1267274692818136823" alt="" />
    </div>
    
    <!-- content_container -->
    <div class="content_container">
    <p class="content_description">
    ${arrayComments[i].comment}
    </p>
    
    <div class="content_info_container">
    <div class="date_userpost">
    <span class="name">${arrayComments[i].username}</span>
    <span class="date">December 4, 2017 at 3:12 pm</span>
    </div>
    <div class="reply">Reply</div>
    </div>
    </div>
    `;
    list_post_comment.appendChild(new_item_comment);
  }
}

// function
function checkComment(username, comment) {
  if (username == "" || comment == "") {
    if (username == "") {
      alert("Username is empty, rewrite this input");
      return false;
    }

    if (comment == "") {
      alert("Comment is empty, rewrite this input");
      return false;
    }
    return false;
  }
  return true;
}

let current_user = {
  username: "",
  ava_img: "./anh1.png",
  course_enrolled: [],
};

// Xóa 1 phẩn tử nào đó ở trong mảng:
