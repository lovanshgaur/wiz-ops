fetch("./assets/projects.json")
  .then((res) => res.json())
  .then((data) => {
    runProjects(data.projects);
  });

const projectWrapper = document.getElementById("projects-wrapper");
const projectImage = document.querySelector(".project-image");
const previewImage = document.querySelector(".preview-image");

function runProjects(data) {
  console.log(data);
  data.forEach((project) => {
    const projectRow = document.createElement("div");
    projectRow.classList.add("project-row");
    projectRow.dataset.image = project.image;
    projectRow.innerHTML = `
        <div class="project-col">
            <div class="index">${project.id}</div>
            <div class="title">${project.title}</div>
        </div>
        <div class="category">${project.category}</div>
        <div class="year">${project.year}</div>
        `;
    projectWrapper.appendChild(projectRow);
  });
}
projectWrapper.addEventListener("mouseover", (e) => {
  const row = e.target.closest(".project-row");
  if (row) {
    previewImage.src = row.dataset.image;
    gsap.to(projectImage, {
      opacity: 1,
      duration: 0.1
    });
  }
});
projectWrapper.addEventListener("mouseout", (e) => {
  const row = e.target.closest(".project-row");
  if (row) {
    gsap.to(projectImage, {
      opacity: 0,
      duration: 0.1
    });
  }
});


window.addEventListener("mousemove", (e) => {
gsap.to(projectImage, {
    x: `${e.clientX}px`,
    y: `${e.clientY}px`,
  duration: 0.3
});
});
