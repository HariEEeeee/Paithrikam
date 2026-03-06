// =======================
// PRODUCT DATA
// =======================

const products = {
  1: {
    name: "Blush Pink Everyday Dress",
    original: "₹1199",
    discount: "₹899",
    desc: "A soft blush pink dress stitched for everyday comfort with a graceful fall.",
    images: ["cloths/aaa.jpg"]
  },

  2: {
    name: "Ivory Kurti",
    original: "₹999",
    discount: "₹699",
    desc: "A lightweight ivory kurti with subtle prints, perfect for daily wear.",
    images: ["Assets/Assets/dresssss/11.jpg"]
  },

  3: {
    name: "Royal Rose Dress ",
    original: "₹1299",
    discount: "₹999",
    desc: "A breathable linen dress designed for relaxed elegance and all-day ease.",
    images: ["cloths/emm.jpg","cloths/Gemini_Generated_Image_y0ddxqy0ddxqy0dd.png","cloths/Gemini_Generated_Image_ddzcn0ddzcn0ddzc.png","cloths/image.png"]
  },

  4: {
    name: "Dotted Bluey",
    original: "₹1399",
    discount: "₹1099",
    desc: "A timeless beige churidar set tailored for festive and traditional looks.",
    images: ["cloths/churidar.jpg"]
  },

  5: {
    name: "Royal Purple Straight Dress",
    original: "₹1499",
    discount: "₹1199",
    desc: "A rich purple straight-fit dress that balances elegance and comfort.",
    images: ["cloths/purple.jpg"]
  },

  6: {
    name: "Soft Floral Kurti",
    original: "₹1099",
    discount: "₹799",
    desc: "A floral kurti with a soft fabric feel, ideal for casual and semi-formal wear.",
    images: ["Assets/Assets/dresssss/WhatsApp Image 2025-06-05 at 20.39.21_9d633e71 - Copy.jpg"]
  },

  7: {
    name: "Minimal Beige Cotton Dress",
    original: "₹999",
    discount: "₹749",
    desc: "A minimal cotton dress crafted for comfort, simplicity, and everyday style.",
    images: ["cloths/aaaaaaaaa.jpg"]
  },

  8: {
    name: "Deep Maroon Festive Kurti",
    original: "₹1599",
    discount: "₹1299",
    desc: "A deep maroon kurti stitched for festive occasions with a premium finish.",
    images: ["Assets/Assets/dresssss/WhatsApp Image 2025-07-14 at 20.32.18_ec9589f4.jpg"]
  },

  9: {
    name: "Olive Green Casual Wear",
    original: "₹1199",
    discount: "₹899",
    desc: "An olive green casual outfit designed for effortless everyday styling.",
    images: ["cloths/Screenshot 2025-12-07 160222.png"]
  },

  10: {
    name: "Soft Peach Ethnic Dress",
    original: "₹1699",
    discount: "₹1399",
    desc: "A soft peach ethnic dress with elegant stitching and a festive vibe.",
    images: ["Assets/Assets/dresssss/WhatsApp Image 2025-07-14 at 20.33.41_127a199c.jpg"]
  },
    11: {
    name: "Lime Whisper",
    original: "₹1099",
    discount: "₹799",
    desc: "A refreshing lime-green dress with elegant embroidery, perfect for day and evening wear.",
    images: ["Designs_/green.jpg"] // Add your image URLs here manually
  },
  12: {
    name: "Garden Muse",
    original: "₹999",
    discount: "₹749",
    desc: "A charming garden-inspired kurti, light and comfortable for casual outings.",
    images: ["Assets/Assets/newone.jpg"] // Add your image URLs here manually
  },
  13: {
    name: "Sunpetal Charm",
    original: "₹1099",
    discount: "₹799",
    desc: "A radiant dress with sunpetal motifs, ideal for festive occasions and celebrations.",
    images: ["Assets/Assets/dresssss/updatedone.jpg"]
  },
  14: {
    name: "Midnight Dream",
    original: "₹699",
    discount: "₹449",
    desc: "A sleek and elegant churidar set in deep midnight tones, perfect for evening events.",
    images: ["Assets/Assets/cloths/neela.jpg"]
  },
  15: {
    name: "BloodRed Dress",
    original: "₹1499",
    discount: "₹1099",
    desc: "Luxurious red velvet dress with sumptuous drape, flattering silhouette, rich texture, perfect for elegant evenings.",
    images: ["Assets/Assets/dresssss/red.jpg"]
  },
  16: {
    name: "Snowy Sunset",
    original: "₹999",
    discount: "₹649",
    desc: "Luxurious white and purple dress with sumptuous drape, flattering silhouette, rich texture, perfect for elegant evenings.",
    images: ["Assets/Assets/dresssss/pink.jpg"]
  },
};


// =======================
// LOAD PRODUCT
// =======================

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || 1;
const product = products[id];

document.getElementById("productName").textContent = product.name;
document.getElementById("originalPrice").textContent = product.original;
document.getElementById("discountPrice").textContent = product.discount;
document.getElementById("productDesc").textContent = product.desc;

const mainImg = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumbs img");

mainImg.src = product.images[0];

thumbs.forEach((img, index) => {
  img.src = product.images[index] || product.images[0];
});

// =======================
// IMAGE CHANGE
// =======================

function changeImage(src) {
  mainImg.src = src;
}

// =======================
// SIZE SELECTION
// =======================

const sizeButtons = document.querySelectorAll(".size-buttons button");
let selectedSize = null;

sizeButtons.forEach(button => {
  button.addEventListener("click", () => {
    sizeButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedSize = button.innerText;
  });
});

// =======================
// REVIEW SYSTEM
// =======================

const reviewName = document.querySelector(".review-form input");
const reviewText = document.querySelector(".review-form textarea");
const submitBtn = document.getElementById("button-common");
const reviewSection = document.querySelector(".reviews");

const starContainer = document.createElement("div");
starContainer.classList.add("star-input");
starContainer.innerHTML = `
  <p>Rate this product:</p>
  <span class="star" data-value="1">⭐</span>
  <span class="star" data-value="2">⭐</span>
  <span class="star" data-value="3">⭐</span>
  <span class="star" data-value="4">⭐</span>
  <span class="star" data-value="5">⭐</span>
`;

document.querySelector(".review-form").insertBefore(starContainer, reviewText);

let selectedRating = 0;
const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    selectedRating = index + 1;
    stars.forEach(s => s.classList.remove("active"));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add("active");
    }
  });
});

window.addEventListener("load", loadReviews);

submitBtn.addEventListener("click", () => {
  if (!reviewName.value || !reviewText.value || selectedRating === 0) {
    alert("Please fill all fields and select a rating");
    return;
  }

  const review = {
    id: Date.now(),
    name: reviewName.value,
    text: reviewText.value,
    rating: selectedRating
  };

  saveReview(review);
  displayReview(review);

  reviewName.value = "";
  reviewText.value = "";
  selectedRating = 0;
  stars.forEach(s => s.classList.remove("active"));
});

function saveReview(review) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.forEach(displayReview);
}

function displayReview(review) {
  const box = document.createElement("div");
  box.classList.add("review-box");
  box.innerHTML = `
    <p><b>${review.name}</b> ${"⭐".repeat(review.rating)}</p>
    <p>${review.text}</p>
    <button class="delete-btn">Delete</button>
  `;

  box.querySelector(".delete-btn").onclick = () => {
    deleteReview(review.id);
    box.remove();
  };

  reviewSection.insertBefore(box, document.querySelector(".review-form"));
}

function deleteReview(id) {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews = reviews.filter(r => r.id !== id);
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

// =======================
// ADD TO CART
// =======================

function addToCart() {
  if (!selectedSize) {
    alert("Please select a size");
    return;
  }

  const cartProduct = {
    id: "cs001",
    name: product.name,
    price: product.discount.replace("₹", ""),
    image: mainImg.src,
    size: selectedSize,
    quantity: 1
  };

  localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  window.location.href = "paymentpage.html";
}
