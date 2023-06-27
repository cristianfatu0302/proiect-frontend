import { getFormData } from "myFormsModule";

const formular = document.querySelector("#proiectForm");

formular.addEventListener("submit", async (event) => {
    event.preventDefault();

    const proiect = getFormData(event.currentTarget);

    const data = {};
    for (let [key, value] of Object.entries(proiect)) {
        if (key === "costLunar") {
            data[key] = parseFloat(value, 10);
        } else {
            data[key] = value;
        }
    }
    console.log(JSON.stringify(proiect));
    await fetch("http://localhost:8080/proiect/add", {
        method: "POST",
        body: JSON.stringify(data),
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
