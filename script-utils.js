export function getFormData(formular) {
  const obj = {};
  for (let element of formular.elements) {
    if (element.name) {
      obj[element.name] = element.value;
    }
  }

  return obj;
}

export function createAngajatRow(angajat) {
  const row = document.createElement("tr");
  const idCell = document.createElement("td");
  idCell.textContent = angajat.angajatID;
  const numeCell = document.createElement("td");
  numeCell.textContent = angajat.nume;
  const prenumeCell = document.createElement("td");
  prenumeCell.textContent = angajat.prenume;
  const functieCell = document.createElement("td");
  functieCell.textContent = angajat.functie;
  const salariuCell = document.createElement("td");
  salariuCell.textContent = angajat.salariu;
  const dataAngajareCell = document.createElement("td");
  dataAngajareCell.textContent = angajat.dataAngajare;
  const emailCell = document.createElement("td");
  const emailLink = document.createElement("a");
  const proiectCell = document.createElement("td");
  emailLink.href = `mailto:${angajat.email}`;
  emailLink.textContent = angajat.email;
  emailCell.appendChild(emailLink);

  fetch(`http://localhost:8080/proiect/${angajat.proiectID}`, { method: "GET" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Requestul de tip GET a esuat.");
      }
    })
    .then((data) => {
      proiectCell.textContent = data.nume;
    })
    .catch((error) => {
      console.log("Eroare la metoda GET", error);
    });

  row.appendChild(idCell);
  row.appendChild(numeCell);
  row.appendChild(prenumeCell);
  row.appendChild(functieCell);
  row.appendChild(salariuCell);
  row.appendChild(dataAngajareCell);
  row.appendChild(emailCell);
  row.appendChild(proiectCell);

  return row;
}

export function createProiectRow(proiect) {
  const row = document.createElement("tr");
  const idCell = document.createElement("td");
  idCell.textContent = proiect.proiectID;
  const numeCell = document.createElement("td");
  numeCell.textContent = proiect.nume;
  const descriereCell = document.createElement("td");
  descriereCell.textContent = proiect.descriere;
  const costLunarCell = document.createElement("td");
  costLunarCell.textContent = proiect.costLunar;

  row.appendChild(idCell);
  row.appendChild(numeCell);
  row.appendChild(descriereCell);
  row.appendChild(costLunarCell);

  return row;
}
