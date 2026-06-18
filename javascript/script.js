 import {user} from "./user.js";
    const table = document.getElementById("table");
    const head = document.getElementById("head");
    const tbody = document.getElementById("tbody");
    head.appendChild(tbody);
    user.forEach((user) => {
        console.log(user);
        const row = document.createElement("tr");
        const id = document.createElement("td");
        const name = document.createElement("td");
        const age = document.createElement("td");
        const isStudent = document.createElement("td");
        id.textContent = user.id;
        name.textContent =user.name;
        age.textContent = user.age;
        isStudent.textContent= user.isStudent;

        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(age);
        row.appendChild(isStudent);
        tbody.appendChild(row);        
    });