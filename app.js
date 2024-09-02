let toastBox = document.getElementById("toast-box");

const successFull = "Successfully Submitted";
const errorMsg = "Error! Please fix this error";
const invalidInput = "Invalid! Please give valid input";

function showToast(massage) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = massage;
  toastBox.appendChild(toast);
}
