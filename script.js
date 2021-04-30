const toggleBtn = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".cross");

toggleBtn.addEventListener("click", toggle);
close.addEventListener("click", toggle);

function toggle() {
 sidebar.classList.toggle("hide");
}
