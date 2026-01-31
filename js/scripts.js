// Static values for now
const temp = 45; // Fahrenheit
const windSpeed = 8; // mph

function calculateWindChill(tempF, windMph) {
    if(tempF <= 50 && windMph > 3){
        return Math.round(35.74 + 0.6215*tempF - 35.75*Math.pow(windMph,0.16) + 0.4275*tempF*Math.pow(windMph,0.16)) + "°F";
    } else {
        return "N/A";
    }
}

// Display weather values
document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = windSpeed;
document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed);

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastmod").textContent = document.lastModified;
