let dark = document.getElementById("dark");
dark.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    dark.src = "media/sun.png";
  } else {
    dark.src = "media/moon.png";
  }
};