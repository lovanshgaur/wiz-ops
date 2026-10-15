let n = 0;
let isAnimating = false;

const data = [
  {
    id: 1,
    slug: "giant-panda",
    category: "Mammalia",
    name: "The Panda.",
    description: "Quiet giants. Endless forests. Discover the fascinating world of one of nature's most recognizable animals.",
    image: "https://i.pinimg.com/1200x/45/39/0f/45390f17dbd7314e660727208e584e7e.jpg",
    commonName: "Giant Panda",
    scientificName: "Ailuropoda melanoleuca",
    story: {
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1800&auto=format&fit=crop&q=85"
    }
  },
  {
    id: 2,
    slug: "bengal-tiger",
    category: "Mammalia",
    name: "The Tiger.",
    description: "Silent hunters. Striped shadows. Enter the world of one of the wild's most powerful and elusive predators.",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&auto=format&fit=crop&q=85",
    commonName: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    story: {
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1800&auto=format&fit=crop&q=85"
    }
  },
  {
    id: 3,
    slug: "african-elephant",
    category: "Mammalia",
    name: "The Elephant.",
    description: "Ancient memories. Gentle giants. Explore the lives of remarkable animals that shape the landscapes they inhabit.",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1200&auto=format&fit=crop&q=85",
    commonName: "African Savanna Elephant",
    scientificName: "Loxodonta africana",
    story: {
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1800&auto=format&fit=crop&q=85"
    }
  },
  {
    id: 4,
    slug: "red-fox",
    category: "Mammalia",
    name: "The Fox.",
    description: "Sharp instincts. Amber eyes. Discover the adaptable survivor that thrives across forests, fields and even cities.",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1200&auto=format&fit=crop&q=85",
    commonName: "Red Fox",
    scientificName: "Vulpes vulpes",
    story: {
      image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=1800&auto=format&fit=crop&q=85"
    }
  },
  {
    id: 5,
    slug: "snow-leopard",
    category: "Mammalia",
    name: "The Ghost.",
    description: "Frozen peaks. Silent footsteps. Meet the elusive snow leopard, a master of survival in the world's high mountains.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&auto=format&fit=crop&q=85",
    commonName: "Snow Leopard",
    scientificName: "Panthera uncia",
    story: {
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1800&auto=format&fit=crop&q=85"
    }
  },
  {
    id: 6,
    slug: "gray-wolf",
    category: "Mammalia",
    name: "The Wolf.",
    description: "Winter forests. Distant calls. Discover the social intelligence and extraordinary survival instincts of the gray wolf.",
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=1200&auto=format&fit=crop&q=85",
    commonName: "Gray Wolf",
    scientificName: "Canis lupus",
    story: {
      image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=1800&auto=format&fit=crop&q=85"
    }
  },
  {
    id: 7,
    slug: "red-panda",
    category: "Mammalia",
    name: "The Ember.",
    description: "Misty canopies. Rust-red fur. Venture into the Himalayan forests and discover a small mammal with a remarkable story.",
    image: "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=1200&auto=format&fit=crop&q=85",
    commonName: "Red Panda",
    scientificName: "Ailurus fulgens",
    story: {
      image: "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=1800&auto=format&fit=crop&q=85"
    }
  }
];

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function swap(index) {
  const swapTimeline = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    }
  });

  const clip = index % 2 === 1 
    ? "inset(100% 0% 0% 100%)" 
    : "inset(0% 100% 100% 0%)";

  swapTimeline.fromTo(
    ".hero-background",
    { clipPath: clip, opacity: 0.5 },
    { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1, ease: "sine.out" }
  );

  swapTimeline.to(".profile-backdrop .backdrop", { y: "0%", duration: 0.8, ease: "circ.out" }, "-=0.6");
  swapTimeline.to(".profile-image img", { y: "0%", duration: 0.8, ease: "power3.out" }, "-=0.6");
  swapTimeline.from(".profile-text-child", { y: 60, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.4");
  swapTimeline.from(".profile-tag", { x: -50, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.5");
  swapTimeline.to(".line span", { y: "0%", duration: 0.8, ease: "power4.out", stagger: 0.1 }, "-=0.6");
  swapTimeline.from(".hero-text-child", { y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.5");
}

function runProfile(index) {
  isAnimating = true;
  const curr = data[index];
  
  document.querySelector(".hero-background").style.backgroundImage = `url("${curr.story.image}")`;

  const nameParts = curr.name.split(" ");
  const firstWord = nameParts[0] || "";
  const remainingWords = nameParts.slice(1).join(" ");

  const heroText = document.querySelector(".hero-text");
  heroText.innerHTML = `
    <div class="category hero-text-child">0${curr.id} — ${curr.category}</div>
    <h1 class="name hero-text-heading">
      <span class="line"><span>${firstWord}</span></span> 
      <span class="line"><span><em>${remainingWords}</em></span></span>
    </h1>
    <p class="hero-text-child">${curr.description}</p>
    <div class="cta hero-text-child">
      <button class="cta-btn">
        Explore <span>&rarr;</span>
      </button>
    </div>
  `;

  const heroProfile = document.querySelector(".hero-profile");
  heroProfile.innerHTML = `
    <div class="profile-backdrop"><div class="backdrop"></div></div>
    <div class="profile-image">
      <img src="${curr.image}" alt="${curr.commonName}">
    </div>
    <div class="profile-text-wrapper">
      <div class="profile-text">
        <h3 class="profile-text-child">${curr.commonName}</h3>
        <h5 class="profile-text-child">${curr.scientificName}</h5>
      </div>
    </div>
    <div class="profile-tag">Species / 00${curr.id}</div>
  `;

  swap(index);
}

prevBtn.addEventListener("click", () => {
  if (isAnimating) return;
  n = (n === 0) ? data.length - 1 : n - 1;
  runProfile(n);
});

nextBtn.addEventListener("click", () => {
  if (isAnimating) return;
  n = (n === data.length - 1) ? 0 : n + 1;
  runProfile(n);
});

runProfile(0);