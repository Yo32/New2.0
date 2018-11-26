function showSkillsPage() {
  document.getElementById("sd2").style.display = "none";
  document.getElementById("sd1").style.display = "block";
  document.getElementById("btn").style.display = "none";
}

function showLanguagesPage() {
  document.getElementById("sd1").style.display = "none";
  document.getElementById("sd2").style.display = "block";
  document.getElementById("btn").style.display = "none";
}

function showHomePage() {
  document.getElementById("sd1").style.display = "none";
  document.getElementById("sd2").style.display = "none";
  document.getElementById("btn").style.display = "none";
}
function showContact() {
  document.getElementById("btn").style.display = "block";
  document.getElementById("sd1").style.display = "none";
  document.getElementById("sd2").style.display = "none";
}

document.getElementById("home-menu").onclick = showHomePage;
document.getElementById("languages-menu").onclick = showLanguagesPage;
document.getElementById("skills-menu").onclick = showSkillsPage;
document.getElementById("contact-menu").onclick = showContact;
