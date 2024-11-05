document.getElementById("resume-form")?.addEventListener("submit", function (event: Event) {
    event.preventDefault();
  
    // Fetch input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
  
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;
  
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',');
  
    // Populate preview
    (document.getElementById("preview-name") as HTMLElement).textContent = name;
    (document.getElementById("preview-email") as HTMLElement).textContent = email;
    (document.getElementById("preview-phone") as HTMLElement).textContent = phone;
    (document.getElementById("preview-address") as HTMLElement).textContent = address;
  
    (document.getElementById("preview-education") as HTMLElement).textContent = education;
    (document.getElementById("preview-degree") as HTMLElement).textContent = degree;
    (document.getElementById("preview-year") as HTMLElement).textContent = year;
  
    const skillsList = document.getElementById("preview-skills") as HTMLUListElement;
    skillsList.innerHTML = ""; // Clear previous skills
    skills.forEach(skill => {
      const listItem = document.createElement("li");
      listItem.textContent = skill.trim();
      skillsList.appendChild(listItem);
    });
  });
  