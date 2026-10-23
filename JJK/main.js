let archiveData = null;

async function loadArchive() {
  const response = await fetch("archive.json")
  const data = await response.json()
  archiveData = data.data
}
(async function init() {
  await loadArchive()

  let data = archiveData
  // variables
  const characterContainer = document.getElementById('character-container')
  let prev = document.getElementById('btn-prev')
  let next = document.getElementById('btn-next')

  let i = 0;
  let isAnimating = false;


  prev.addEventListener('click', () => {
    if (isAnimating) return;
    if (i === 0) {
      i = data.length - 1;
    }
    else {
      i--;
    }
    showCharacter(i);
  });

  next.addEventListener('click', () => {
    if (isAnimating) return;
    if (i === data.length - 1) {
      i = 0
    }
    else {
      i++
    }
    showCharacter(i);
  })


  function showCharacter(n) {

    isAnimating = true

    let characterData = data[n]

    const wrapper = document.createElement("div");
    wrapper.className = "character-wrapper";
    wrapper.style.setProperty("--accent", characterData.color)

    const info = document.createElement("div");
    info.className = "character-info";

    const tagline = document.createElement("div");
    tagline.className = "character-tagline";
    tagline.textContent = characterData.tagline;

    const name = document.createElement("div");
    name.className = "character-name";
    characterName = characterData.name.split(" ")
    if (characterName[1]) {
      name.innerHTML = `<h1>${characterName[0]}<span>${characterName[1]}</span></h1>`;
    }
    else {
      name.innerHTML = `<h1><span>${characterName[0]}</span></h1>`;
    }

    const desc = document.createElement("div");
    desc.className = "character-desc";
    desc.textContent = characterData.description;

    const cta = document.createElement("div");
    cta.className = "character-cta";

    const button = document.createElement("button");
    button.className = "cta-btn";
    button.textContent = 'Domain Expansion';

    cta.appendChild(button);
    info.append(tagline, name, desc);

    const profile = document.createElement("div");
    profile.className = "character-profile";

    const overlay = document.createElement("div");
    overlay.className = "character-overlay";

    const bg = document.createElement("div");
    bg.className = "character-background";
    bg.style.background = characterData.color

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "character-image";

    const img = document.createElement("img");
    img.src = characterData.image;

    imageWrapper.appendChild(img);

    const count = document.createElement("div");
    count.className = "character-count";
    count.innerHTML = `<span>${characterData.count}</span>/${characterData.total}`;

    profile.append(bg, overlay, imageWrapper, count);

    wrapper.append(info, profile);
    characterContainer.innerHTML = ''
    characterContainer.appendChild(wrapper);


    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating = false;
      }
    });

    tl.from(bg, {
      scaleX: 0,
      transformOrigin: "left",
      opacity: 0,
      duration: 1,
      delay: 0.1,
      ease: "power4.out",
    })
      .from(imageWrapper, {
        x: 120,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
      }, "-=0.2")
    gsap.from(name, {
      scale: 0.5,
      transformOrigin: "left",
      duration: 0.35,
      delay: 0.1,
      ease: "power3.inOut",
    })
    gsap.from(tagline, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    })
    gsap.from(desc, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    })

    window.addEventListener('mousemove', (e) => {
      if (!isAnimating) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(imageWrapper, {
          x: x * 30,
          y: y * 30,
          duration: 1
        })
        gsap.to(name, {
          x: x * -20,
          y: y * -20,
          duration: 1
        })
      }
    })

  }
  showCharacter(i)
})()