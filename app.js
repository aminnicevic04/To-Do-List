const form = document.getElementById("form");
const item = document.getElementById("item");
const list = document.getElementById("list");
const filters = document.getElementById("filters");
const sorters = document.getElementById("sorters");

// Dodavanje stavki na listu
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (item.value) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox">
      <label>${item.value}</label>
      <i class="delete fas fa-trash-alt"></i>
    `;
    list.appendChild(li);
    item.value = "";
  }
});

// Brisanje stavki sa liste
list.addEventListener("click", (e) => {
  if (e.target.IdName === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// Filtriranje stavki po statusu
filters.addEventListener("click", (e) => {
  const btns = filters.children;
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("selected");
  }
  e.target.classList.add("selected");
  const status = e.target.id;
  const items = list.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (status === "all") {
      item.style.display = "block";
    } else if (status === "completed") {
      if (checkbox.checked) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else {
      if (!checkbox.checked) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  }
});
