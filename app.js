let toastBox = document.getElementById("toast-box");

const successFull =
  "<i class='fa-solid fa-circle-check'></i> Successfully Submitted";
const errorMsg =
  "<i class='fa-solid fa-circle-xmark'></i> Error! Please fix this error";
const invalidInput =
  "<i class='fa-solid fa-circle-exclamation'></i>  Invalid! Please give valid input";

function showToast(massage) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = massage;
  toastBox.appendChild(toast);

  if (massage.includes("error")) {
    toast.classList.add("error");
  }
  if (massage.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  if (massage.includes("Success")) {
    toast.classList.add("success");
  }

  setTimeout(() => {
    toast.remove(); /**after 6 second toast div will be removed */
  }, 6000);
}
