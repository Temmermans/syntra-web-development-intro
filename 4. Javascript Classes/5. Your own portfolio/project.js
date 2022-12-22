let projectData = [
  {
    image: "images/project-1.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "images/project-2.png",
    name: "project two",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript, #css",
  },
  {
    image: "images/project-3.png",
    name: "project three",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript",
  },
  {
    image: "images/project-4.png",
    name: "project four",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#fullstack, #css",
  },
  {
    image: "images/project-5.png",
    name: "project five",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#fullstack",
  },
  {
    image: "images/project-6.png",
    name: "project six",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#css",
  },
  {
    image: "images/project-7.png",
    name: "project seven",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript",
  },
  {
    image: "images/project-8.png",
    name: "project eight",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#css",
  },
];

// creating project cards in frontend

const createProjectCards = (data) => {
  let projectContainer = document.querySelector(".project-container");

  projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="images/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn">github</a>
                        <a href="${data.live}" class="btn">see live</a>
                    </div>
                </div>
            </div>
    `;
};

projectData.forEach((data) => createProjectCards(data));

// project cards open and close functions

let projects = document.querySelectorAll(".project-card");

projects.forEach((card, index) => {
  let closeBtn = card.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    projects.forEach((item, i) => {
      item.classList.remove("blur");
    });
    card.classList.remove("active");
  });

  card.addEventListener("click", (e) => {
    if (e.target != closeBtn) {
      projects.forEach((item, i) => {
        if (i != index) {
          item.classList.add("blur");
        }
      });
      card.classList.add("active");
    }
  });
});

// project filter function

const tags = document.querySelectorAll(".filter-btn");

tags.forEach((btn) => {
  btn.addEventListener("click", () => {
    projects.forEach((project) => {
      if (btn.innerHTML.toLowerCase() == "all") {
        project.style.display = "block";
      } else {
        if (project.getAttribute("data-tags").includes(btn.innerHTML.toLowerCase())) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      }
    });

    tags.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
  });
});
