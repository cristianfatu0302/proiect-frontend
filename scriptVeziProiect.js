import { createProiectRow } from "myFormsModule";

const proiecteTable = document.querySelector("#proiecteTable");

console.log(proiecteTable);

fetch("http://localhost:8080/proiect/all", {method: "GET"})
    .then( response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Requestul de tip GET a esuat.");
        }
    })
    .then(data =>{
        data.forEach( proiect => {
            const row = createProiectRow(proiect);
            proiecteTable.appendChild(row);
        });
    })
    .catch( error => {
        console.log("Eroare la metoda GET: ", error);
    })