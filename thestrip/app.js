
const progress = document.getElementById("progress");
const profileCard = document.querySelector(".profile-image");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                runProfile(entry.target.dataset.id);
            }
        });
    },
    {
        threshold: 0.5
    }
);

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    observer.observe(card);
});

const profileData = [
    {
        id: 1,
        color: "#b36b45",
        image:
            "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        color: "#647c91",
        image:
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        color: "#c8a84e",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        color: "#47745b",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
    }
];

function runProfile(idx) {
    const profile = profileData[idx - 1];

    if (!profile) return;

    const progressBar = 25 * idx;

    progress.style.width = `${progressBar}%`;
    progress.style.backgroundColor = profile.color;

    profileCard.src = profile.image;
}
