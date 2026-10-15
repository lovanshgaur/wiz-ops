const progress = document.getElementById("progress");
const profileCard = document.querySelector(".profile-image");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.dataset.id);
        runProfile(entry.target.dataset.id);
      }
    });
  },
  { threshold: 0.5 }
);

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  observer.observe(card);
});

const profileData = [
  {
    id: 1,
    color: "red",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    color: "yellow",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    color: "green",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
  }
];

function runProfile(idx) {
  let progressBar = 25 * idx;
  progress.style.width = `${progressBar}%`;
  progress.style.backgroundColor = `${profileData[idx - 1].color}`;
  profileCard.src = `${profileData[idx - 1].image}`;
}
