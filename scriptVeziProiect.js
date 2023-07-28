import { createProiectRow } from "myFormsModule";

const proiecteTable = document.querySelector("#proiecteTable");
const adresa = '3.68.95.217';
console.log(proiecteTable);

fetch("http://"+adresa+":8080/proiect/all", {method: "GET"})
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