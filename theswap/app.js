gsap.registerPlugin(ScrollTrigger);
let n = 0;

const data = [
  {
    id: 1,
    slug: "giant-panda",
    category: "Mammalia",
    name: "The Panda.",
    description:
      "Quiet giants. Endless forests. Discover the fascinating world of one of nature's most recognizable animals.",
    image:
      "https://i.pinimg.com/1200x/45/39/0f/45390f17dbd7314e660727208e584e7e.jpg",
    alt: "Giant panda portrait",
    commonName: "Giant Panda",
    scientificName: "Ailuropoda melanoleuca",
    story: {
      kicker: "FIELD NOTES / 001",
      title: "Life in\nthe green.",
      intro:
        "Hidden among the mountain forests of central China, the giant panda leads a remarkably specialized life. Its unmistakable markings are only the beginning of its story. Step closer and discover the world it calls home.",
      image:
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1800&auto=format&fit=crop&q=85",
      imageAlt: "Giant panda in its natural environment",
      imageLabel: "HABITAT / BAMBOO FORESTS",
      details: [
        {
          number: "01.",
          title: "A mountain home",
          text: "Giant pandas inhabit temperate mountain forests in parts of central China, where dense bamboo provides both food and shelter."
        },
        {
          number: "02.",
          title: "An unusual appetite",
          text: "Although classified as a bear, the giant panda eats mostly bamboo and spends much of its day feeding to meet its energy needs."
        },
        {
          number: "03.",
          title: "A future to protect",
          text: "Protected habitats and conservation efforts remain essential to keeping wild panda populations healthy for generations to come."
        }
      ]
    }
  },
  {
    id: 2,
    slug: "bengal-tiger",
    category: "Mammalia",
    name: "The Tiger.",
    description:
      "Silent hunters. Striped shadows. Enter the world of one of the wild's most powerful and elusive predators.",
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&auto=format&fit=crop&q=85",
    alt: "Tiger in its natural habitat",
    commonName: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    story: {
      kicker: "FIELD NOTES / 002",
      title: "Born to\nrule.",
      intro:
        "From dense tropical forests to grassy floodplains, the Bengal tiger moves through its territory with remarkable stealth. Every stripe helps tell the story of a solitary hunter.",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1800&auto=format&fit=crop&q=85",
      imageAlt: "Tiger resting in the wild",
      imageLabel: "HABITAT / TROPICAL FORESTS",
      details: [
        {
          number: "01.",
          title: "A vast territory",
          text: "Bengal tigers inhabit parts of the Indian subcontinent, including forests, grasslands and mangrove ecosystems."
        },
        {
          number: "02.",
          title: "Master of stealth",
          text: "Their striped coats help break up their outline among vegetation, making them effective ambush predators."
        },
        {
          number: "03.",
          title: "Keeping the stripes alive",
          text: "Habitat protection, anti-poaching efforts and connected wildlife corridors are vital to tiger conservation."
        }
      ]
    }
  },
  {
    id: 3,
    slug: "african-elephant",
    category: "Mammalia",
    name: "The Elephant.",
    description:
      "Ancient memories. Gentle giants. Explore the lives of remarkable animals that shape the landscapes they inhabit.",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1200&auto=format&fit=crop&q=85",
    alt: "African elephant in the wild",
    commonName: "African Savanna Elephant",
    scientificName: "Loxodonta africana",
    story: {
      kicker: "FIELD NOTES / 003",
      title: "Giants of\nthe earth.",
      intro:
        "Across the African savanna, elephants leave a lasting mark on the land. Their social bonds, intelligence and enormous presence make them essential members of their ecosystems.",
      image:
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1800&auto=format&fit=crop&q=85",
      imageAlt: "Elephant walking across the African landscape",
      imageLabel: "HABITAT / AFRICAN SAVANNA",
      details: [
        {
          number: "01.",
          title: "Landscape architects",
          text: "Elephants disperse seeds, open paths through vegetation and help create habitats used by other species."
        },
        {
          number: "02.",
          title: "Strong family bonds",
          text: "Elephants live in complex social groups, often led by experienced females who help guide the herd."
        },
        {
          number: "03.",
          title: "A shrinking home",
          text: "Habitat fragmentation, human-wildlife conflict and poaching threaten elephant populations across parts of Africa."
        }
      ]
    }
  },
  {
    id: 4,
    slug: "red-fox",
    category: "Mammalia",
    name: "The Fox.",
    description:
      "Sharp instincts. Amber eyes. Discover the adaptable survivor that thrives across forests, fields and even cities.",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1200&auto=format&fit=crop&q=85",
    alt: "Red fox in its natural habitat",
    commonName: "Red Fox",
    scientificName: "Vulpes vulpes",
    story: {
      kicker: "FIELD NOTES / 004",
      title: "Wild by\ninstinct.",
      intro:
        "Clever, observant and remarkably adaptable, the red fox occupies a wide range of landscapes. Its life is a study in survival, shaped by curiosity and an ability to make the most of its surroundings.",
      image:
        "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=1800&auto=format&fit=crop&q=85",
      imageAlt: "Red fox exploring a woodland",
      imageLabel: "HABITAT / WOODLANDS",
      details: [
        {
          number: "01.",
          title: "Almost everywhere",
          text: "Red foxes occupy diverse environments, including woodlands, grasslands, mountains and urban areas."
        },
        {
          number: "02.",
          title: "An opportunistic diet",
          text: "Their varied diet can include small mammals, insects, birds, fruit and other available food."
        },
        {
          number: "03.",
          title: "Adaptation is survival",
          text: "Their flexibility allows them to live alongside people, though roads, persecution and habitat changes can still pose risks."
        }
      ]
    }
  },
  {
    id: 5,
    slug: "snow-leopard",
    category: "Mammalia",
    name: "The Ghost.",
    description:
      "Frozen peaks. Silent footsteps. Meet the elusive snow leopard, a master of survival in the world's high mountains.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&auto=format&fit=crop&q=85",
    alt: "Snowy mountain landscape",
    commonName: "Snow Leopard",
    scientificName: "Panthera uncia",
    story: {
      kicker: "FIELD NOTES / 005",
      title: "Above the\nclouds.",
      intro:
        "In the rugged mountains of Central and South Asia, the snow leopard moves through steep, cold terrain almost unseen. Its thick coat and powerful build are perfectly suited to life at altitude.",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?w=1800&auto=format&fit=crop&q=85",
      imageAlt: "Remote high mountain landscape",
      imageLabel: "HABITAT / ALPINE MOUNTAINS",
      details: [
        {
          number: "01.",
          title: "Life at altitude",
          text: "Snow leopards inhabit rugged alpine and subalpine landscapes across the mountains of Asia."
        },
        {
          number: "02.",
          title: "Built for the cold",
          text: "Their thick fur, broad paws and long tails help them navigate and survive in harsh mountain conditions."
        },
        {
          number: "03.",
          title: "Protecting the highlands",
          text: "Prey decline, habitat pressures and conflict with livestock owners remain important conservation challenges."
        }
      ]
    }
  },
  {
    id: 6,
    slug: "gray-wolf",
    category: "Mammalia",
    name: "The Wolf.",
    description:
      "Winter forests. Distant calls. Discover the social intelligence and extraordinary survival instincts of the gray wolf.",
    image:
      "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=1200&auto=format&fit=crop&q=85",
    alt: "Gray wolf in the wilderness",
    commonName: "Gray Wolf",
    scientificName: "Canis lupus",
    story: {
      kicker: "FIELD NOTES / 006",
      title: "Voices of\nthe wild.",
      intro:
        "Across forests, tundra and open wilderness, wolves rely on cooperation and communication. Their lives reveal how family, territory and ecological balance intertwine.",
      image:
        "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=1800&auto=format&fit=crop&q=85",
      imageAlt: "Gray wolf in its natural environment",
      imageLabel: "HABITAT / NORTHERN WILDERNESS",
      details: [
        {
          number: "01.",
          title: "Life in a pack",
          text: "Wolf packs are generally family groups whose members cooperate in raising young and navigating their territory."
        },
        {
          number: "02.",
          title: "Communication matters",
          text: "Wolves use scent marking, body language, vocalizations and other signals to communicate."
        },
        {
          number: "03.",
          title: "Finding coexistence",
          text: "Habitat connectivity and thoughtful management of conflict with livestock are important for wolf conservation."
        }
      ]
    }
  },
  {
    id: 7,
    slug: "red-panda",
    category: "Mammalia",
    name: "The Ember.",
    description:
      "Misty canopies. Rust-red fur. Venture into the Himalayan forests and discover a small mammal with a remarkable story.",
    image:
      "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=1200&auto=format&fit=crop&q=85",
    alt: "Red panda in a forest",
    commonName: "Red Panda",
    scientificName: "Ailurus fulgens",
    story: {
      kicker: "FIELD NOTES / 007",
      title: "Among the\ncanopies.",
      intro:
        "High in the temperate forests of the Himalayas and surrounding regions, the red panda spends much of its life among trees. Its distinctive coat conceals a species increasingly dependent on protected forest habitat.",
      image:
        "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=1800&auto=format&fit=crop&q=85",
      imageAlt: "Forest habitat of the red panda",
      imageLabel: "HABITAT / HIMALAYAN FORESTS",
      details: [
        {
          number: "01.",
          title: "A life in the trees",
          text: "Red pandas use temperate forests with bamboo understories and plenty of trees for shelter and movement."
        },
        {
          number: "02.",
          title: "Small but specialized",
          text: "Bamboo makes up much of their diet, supplemented by fruit, insects and other foods when available."
        },
        {
          number: "03.",
          title: "A forest worth saving",
          text: "Deforestation, habitat fragmentation and other human pressures threaten wild red panda populations."
        }
      ]
    }
  }
];
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
prevBtn.addEventListener("click", () => {
  if (n === 0) {
    runProfile(data.length - 1);
    n = data.length - 1;
  } else {
    runProfile(n - 1);
    n = n - 1;
  }
});
nextBtn.addEventListener("click", () => {
  if (n === data.length - 1) {
    runProfile(0);
    n = data.length - 1;
  } else {
    runProfile(n + 1);
    n = n + 1;
  }
});

function swap() {
  const swapTimeline = gsap.timeline();
  swapTimeline.from(".hero-background", {
    clipPath: "inset(0 0% 0 100%)",
    opacity: 1,
    duration: 1,
    transformOrigin: "right center",
    ease: "sine.out"
  });
  swapTimeline.from(
    ".hero-profile",
    {
      x: 500,
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "circ.out"
    },
    "-=0.5"
  );
  swapTimeline.from(
    ".hero-text",
    {
      y: 500,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power3.out"
    },
    "-=0.9"
  );
}
function runProfile(n) {
  let curr = data[n];
  console.log(curr);
  document.getElementById("hero-content").innerHTML = `
  <h1 class="hero-text">${curr.commonName}</h1>
  <h4 class="hero-text">${curr.name}</h4>
  `;
  document.querySelector(".hero-background").style.backgroundImage =
    `url("${curr.story.image}")`;
  document.getElementById("hero-profile").style.backgroundImage =
    `url(${curr.image})`;
  swap();
  console.log(n);
}
runProfile(0)