// Product array
const products = [
  { id: "p1", name: "Smartphone" },
  { id: "p2", name: "Laptop" },
  { id: "p3", name: "Headphones" },
  { id: "p4", name: "Smartwatch" },
  { id: "p5", name: "Tablet" }
];

// Populate select
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("product");

  if (select) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }
});
