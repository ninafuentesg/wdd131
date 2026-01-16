// Get the current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get the last modified date
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;
