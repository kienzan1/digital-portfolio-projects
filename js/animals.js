let animals = [
  { name: "Bingo", species: "Canine", age: 3, color: "Blonde" },
  { name: "Goldy", species: "Feline", age: 2, color: "Yellow and White" },
  { name: "Crackers", species: "Aves", age: 5, color: "Red" },
  { name: "Skinny", species: "Reptilia", age: 1, color: "Black and Yellow" }
];

function renderTable() {
  let table = document.getElementById("animalTable");
  table.innerHTML = "";

  animals.forEach(a => {
    table.innerHTML += `
      <tr>
        <td>${a.name}</td>
        <td>${a.species}</td>
        <td>${a.age}</td>
        <td>${a.color}</td>
      </tr>
    `;
  });
}

function updateDog() {
  let age = document.getElementById("ageInput").value;
  if (!age) return;
  animals[0].age = parseInt(age);
  renderTable();
}

renderTable();