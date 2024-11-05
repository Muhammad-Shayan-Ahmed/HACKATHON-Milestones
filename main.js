"use strict";
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Fetch input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const degree = document.getElementById("degree").value;
    const year = document.getElementById("year").value;
    const skills = document.getElementById("skills").value.split(',');
    // Populate preview
    document.getElementById("preview-name").textContent = name;
    document.getElementById("preview-email").textContent = email;
    document.getElementById("preview-phone").textContent = phone;
    document.getElementById("preview-address").textContent = address;
    document.getElementById("preview-education").textContent = education;
    document.getElementById("preview-degree").textContent = degree;
    document.getElementById("preview-year").textContent = year;
    const skillsList = document.getElementById("preview-skills");
    skillsList.innerHTML = ""; // Clear previous skills
    skills.forEach(skill => {
        const listItem = document.createElement("li");
        listItem.textContent = skill.trim();
        skillsList.appendChild(listItem);
    });
});
