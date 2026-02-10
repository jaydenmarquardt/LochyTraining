console.log("Lesson 10 loaded!");

const images = [
  {
    url: "https://basiclandart.com/wp-content/uploads/2020/08/ice-374-swamp-shuler.png",
    title: "Ice Age Swamp",
  },
  {
    url: "https://basiclandart.com/wp-content/uploads/2020/08/ice-376-mountain-wanerstrand.jpg",
    title: "Ice Age Mountain",
  },
  {
    url: "https://basiclandart.com/wp-content/uploads/2020/08/ice-370-island-maddocks.jpg",
    title: "Ice Age Island",
  },
  {
    url: "https://basiclandart.com/wp-content/uploads/2020/08/ice-381-forest-morrissey.jpg",
    title: "Ice Age Forest",
  },
  {
    url: "https://basiclandart.com/wp-content/uploads/2020/08/ice-365-plains-rush.jpg",
    title: "Ice Age Plains",
  },
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

images.forEach((image, index) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.innerHTML = `
        <img src="${image.url}" alt="${image.title}">
        <div class="gallery-item-title">${image.title}</div>
    `;

  // Add click event
  item.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = image.url;
    caption.textContent = image.title;
  });

  gallery.appendChild(item);
});

  // Close button
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Click outside image
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});