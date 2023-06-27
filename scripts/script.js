import { getFormData } from "myFormsModule";

const formular = document.querySelector("#angajatForm");
const proiectDropdown = document.querySelector("#proiectDropdown");

await fetch("http://localhost:8080/proiect/all", { method: "GET" })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Requestul de tip GET a eșuat.");
    }
  })
  .then((data) => {
    data.forEach((proiect) => {
      const option = document.createElement("option");
      option.value = proiect.proiectID;
      option.textContent = proiect.nume;
      proiectDropdown.appendChild(option);
    });
  })
  .catch((error) => {
    console.log("Eroare la metoda GET", error);
  });

formular.addEventListener("submit", async (event) => {
  event.preventDefault();

  const angajat = getFormData(event.currentTarget);

  const data = {};
  for (let [key, value] of Object.entries(angajat)) {
    if (key === "salariu" || key === "proiectID") {
      data[key] = parseInt(value, 10);
    } else {
      data[key] = value;
    }
  }
  console.log(JSON.stringify(angajat));
  await fetch("http://localhost:8080/angajati/add", {
    method: "POST",
    body: JSON.stringify(angajat),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      console.log("Eroare la requestul de tip POST: ", error);
    });
});


