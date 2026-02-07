// Temple data array with external image links
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 42100,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg",
  },
  {
    name: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923-08-26",
    area: 88800,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13287-main.jpg",
  },
  {
    name: "Mesa Arizona Temple",
    location: "Mesa, Arizona, USA",
    dedicated: "1927-10-23",
    area: 113916,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg",
  },
  {
    name: "Idaho Falls Idaho Temple",
    location: "Idaho Falls, Idaho, USA",
    dedicated: "1945-09-23",
    area: 92362,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-55801-main.jpg",
  },
  {
    name: "Boston Massachusetts Temple",
    location: "Belmont, Massachusetts, USA",
    dedicated: "2000-10-01",
    area: 69600,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg",
  },
  {
    name: "Palmyra New York Temple",
    location: "Palmyra, New York, USA",
    dedicated: "2000-04-06",
    area: 10700,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/077-Palmyra-New-York-Temple.jpg",
  },
  {
    name: "Draper Utah Temple",
    location: "Draper, Utah, USA",
    dedicated: "2009-03-20",
    area: 58512,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-38937-main.jpg",
  },
  {
    name: "Provo City Center Temple",
    location: "Provo, Utah, USA",
    dedicated: "2016-03-20",
    area: 85084,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg",
  },
  {
    name: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019-12-15",
    area: 26969,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg",
  },
  {
    name: "Lima Peru Temple",
    location: "Lima, Peru",
    dedicated: "1986-01-10",
    area: 9600,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg",
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    image:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
];

// DOM references
const container = document.getElementById("temple-container");
const title = document.getElementById("page-title");

// Function to display temples
function displayTemples(templeList) {
  container.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    name.textContent = temple.name;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.image;
    img.alt = temple.name;
    img.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

// Filters
document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Home";
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Old Temples";
  const old = temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900);
  displayTemples(old);
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "New Temples";
  const newer = temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000);
  displayTemples(newer);
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Large Temples";
  const large = temples.filter((t) => t.area > 90000);
  displayTemples(large);
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Small Temples";
  const small = temples.filter((t) => t.area < 10000);
  displayTemples(small);
});

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial load
displayTemples(temples);
