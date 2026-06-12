let updateNameBtn = document.getElementById("updateNameBtn");
let profileName = document.getElementById("profileName");
let updateRoleBtn = document.getElementById("updateRoleBtn");
let profileRole = document.getElementById("profileRole");
updateNameBtn.addEventListener("click", function () {
  let username = prompt("Enter your username:");
  if (username) profileName.textContent = username;
});
updateRoleBtn.addEventListener("click", function () {
  let update = prompt("Enter your role:");
  if (update) profileRole.textContent = update;
});
let toggleStatus = document.getElementById("toggleStatusBtn");
let profileCard = document.getElementById("profileCard");
toggleStatus.addEventListener("click", function () {
  profileCard.classList.toggle("active-status");
});
let changeImage = document.getElementById("changeImageBtn");
let profileImage = document.getElementById("profileImage");
changeImage.addEventListener("click", function () {
  let newImage = prompt(
    "Paste the new url of your image,make no space before or after you pasted",
  );
  if (newImage) {
    profileImage.src = newImage.trim();
  }
});
