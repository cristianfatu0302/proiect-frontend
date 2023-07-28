import { createAngajatRow } from "myFormsModule";

const angajatiTable = document.querySelector("#angajatiTable tbody");

console.log(angajatiTable);

fetch("http://"+adresa+":8080/angajati/all", { method: "GET" })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Requestul de tip GET a esuat.");
    }
  })
  .then((data) => {
    //console.log(data);
    data.forEach((angajat) => {
      const row = createAngajatRow(angajat);
      angajatiTable.appendChild(row);
    });
  })
  .catch((error) => {
    console.log("Eroare la metoda GET", error);
  });
