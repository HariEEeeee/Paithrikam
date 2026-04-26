document.addEventListener("DOMContentLoaded", () => {

const products = [
  {
    id: 1,
    name: "Classic Wooden Bed",
    image: "collects/beds/1.jpeg",
    wood: "Teak Wood",
    quality: "Premium Grade",
    finish: "Matte Polish",
    dimensions: "6ft x 5ft"
  },
  {
    id: 2,
    name: "Modern Oak Bed",
    image: "collects/beds/2.jpeg",
    wood: "Oak Wood",
    quality: "High Durability",
    finish: "Gloss Finish",
    dimensions: "6.5ft x 5.5ft"
  },
  {
    id: 3,
    name: "Luxury Rosewood Bed",
    image: "collects/beds/3.jpeg",
    wood: "Rosewood",
    quality: "Luxury Grade",
    finish: "Natural Finish",
    dimensions: "7ft x 6ft"
  },
  {
    id: 4,
    name: "Minimal Pine Bed",
    image: "collects/beds/4.jpeg",
    wood: "Pine Wood",
    quality: "Standard Quality",
    finish: "Smooth Finish",
    dimensions: "6ft x 4.5ft"
  },

  { id: 5, name: "Zen Platform Bed", image: "collects/beds/bed1.jpg", wood: "Teak", quality: "Premium", finish: "Matte", dimensions: "6x5 ft" },
  { id: 6, name: "Floating Oak Bed", image: "collects/beds/bed2.jpg", wood: "Oak", quality: "High", finish: "Glossy", dimensions: "6.5x5.5 ft" },
  { id: 7, name: "Minimal Frame Bed", image: "collects/beds/bed3.jpg", wood: "Pine", quality: "Standard", finish: "Smooth", dimensions: "6x5 ft" },
  { id: 8, name: "Luxury Teak Bed", image: "collects/beds/bed4.jpg", wood: "Teak", quality: "Luxury", finish: "Polished", dimensions: "7x6 ft" },

  { id: 9, name: "Royal Comfort Bed", image: "collects/beds/bed5.jpg", wood: "Rosewood", quality: "Premium", finish: "Glossy", dimensions: "7x6 ft" },
  { id: 10, name: "Urban Sleep Bed", image: "collects/beds/bed10.jpg", wood: "Oak", quality: "High", finish: "Matte", dimensions: "6x5 ft" },
  { id: 11, name: "Soft Edge Bed", image: "collects/beds/bed11.jpg", wood: "Pine", quality: "Standard", finish: "Smooth", dimensions: "6x4.5 ft" },
  { id: 12, name: "Elite Wooden Bed", image: "collects/beds/bed12.jpg", wood: "Teak", quality: "Luxury", finish: "Natural", dimensions: "7x6 ft" },

  { id: 13, name: "Compact Space Bed", image: "collects/beds/bed13.jpeg", wood: "Pine", quality: "Standard", finish: "Matte", dimensions: "5.5x4.5 ft" },
  { id: 14, name: "Premium Sleep Bed", image: "collects/beds/bed14.jpg", wood: "Rosewood", quality: "Premium", finish: "Glossy", dimensions: "6.5x5.5 ft" },
  { id: 15, name: "Modern Comfort Bed", image: "collects/beds/bed15.jpeg", wood: "Oak", quality: "High", finish: "Smooth", dimensions: "6x5 ft" },
  { id: 16, name: "Deluxe Frame Bed", image: "collects/beds/bed16.jpeg", wood: "Teak", quality: "Luxury", finish: "Polished", dimensions: "7x6 ft" },


  { id: 18, name: "Elegant Wood Bed", image: "collects/beds/bed17.jpeg", wood: "Rosewood", quality: "Premium", finish: "Natural", dimensions: "7x6 ft" },
  { id: 19, name: "Urban Frame Bed", image: "collects/beds/bed18.jpeg", wood: "Oak", quality: "High", finish: "Glossy", dimensions: "6.5x5.5 ft" },
  { id: 20, name: "Luxury Comfort Bed", image: "collects/beds/bed19.jpeg", wood: "Teak", quality: "Luxury", finish: "Polished", dimensions: "7x6 ft" },

  { id: 21, name: "Smart Sleep Bed", image: "collects/beds/bed20.jpeg", wood: "Pine", quality: "Standard", finish: "Smooth", dimensions: "6x5 ft" },

  { id: 23, name: "Royal Frame Bed", image: "collects/beds/bed21.jpeg", wood: "Rosewood", quality: "Luxury", finish: "Natural", dimensions: "7x6 ft" },
  { id: 24, name: "Modern Minimal Bed", image: "collects/beds/bed22.jpeg", wood: "Pine", quality: "Standard", finish: "Smooth", dimensions: "6x4.5 ft" },
  { id: 25, name: "Premium Teak Bed", image: "collects/beds/bed23.jpeg", wood: "Teak", quality: "Premium", finish: "Polished", dimensions: "7x6 ft" },
  { id: 26, name: "Ultimate Comfort Bed", image: "collects/beds/bed24.jpeg", wood: "Oak", quality: "Luxury", finish: "Glossy", dimensions: "6.5x5.5 ft" },


  { id: 27, name: "Royal Teak Almira", image: "collects/almira1.jpeg", wood: "Teak", quality: "Premium", finish: "Matte", dimensions: "6x3 ft", price: "₹18,999" },
  { id: 28, name: "Heritage Wood Wardrobe", image: "collects/almira2.jpeg", wood: "Oak", quality: "Luxury", finish: "Glossy", dimensions: "6.2x3 ft", price: "₹21,499" },
  { id: 29, name: "Classic Kerala Almira", image: "collects/almira3.jpeg", wood: "Rosewood", quality: "Premium", finish: "Natural", dimensions: "6x3 ft", price: "₹19,999" },
  { id: 30, name: "Vintage Oak Storage", image: "collects/almira4.jpg", wood: "Oak", quality: "Luxury", finish: "Matte", dimensions: "6.5x3 ft", price: "₹22,999" },

  { id: 31, name: "Royal Teak Almira", image: "collects/almira5.jpeg", wood: "Teak", quality: "Premium", finish: "Glossy", dimensions: "6x3 ft", price: "₹18,999" },
  { id: 32, name: "Heritage Wood Wardrobe", image: "collects/almira6.jpeg", wood: "Oak", quality: "Luxury", finish: "Matte", dimensions: "6.2x3 ft", price: "₹21,499" },
  { id: 33, name: "Classic Kerala Almira", image: "collects/almira7.jpeg", wood: "Rosewood", quality: "Premium", finish: "Natural", dimensions: "6x3 ft", price: "₹19,999" },
  { id: 34, name: "Vintage Oak Storage", image: "collects/almira8.jpeg", wood: "Oak", quality: "Luxury", finish: "Glossy", dimensions: "6.5x3 ft", price: "₹22,999" },
  { id: 35, name: "Minimal Wooden Closet", image: "collects/almira9.jpeg", wood: "Pine", quality: "Standard", finish: "Matte", dimensions: "5.8x3 ft", price: "₹17,999" },
  { id: 36, name: "Grand Palace Almira", image: "collects/almira10.jpeg", wood: "Teak", quality: "Luxury", finish: "Glossy", dimensions: "6.8x3.2 ft", price: "₹25,999" },
  { id: 37, name: "Urban Teak Wardrobe", image: "collects/almira11.jpeg", wood: "Teak", quality: "Premium", finish: "Matte", dimensions: "6x3 ft", price: "₹20,499" },
  { id: 38, name: "Antique Finish Almira", image: "collects/almira12.jpeg", wood: "Rosewood", quality: "Luxury", finish: "Antique", dimensions: "6.3x3 ft", price: "₹23,499" },
  { id: 39, name: "Elegant Storage Unit", image: "collects/almira13.jpeg", wood: "Oak", quality: "Premium", finish: "Glossy", dimensions: "6x3 ft", price: "₹19,499" },
  { id: 40, name: "Modern Wood Closet", image: "collects/almira14.jpeg", wood: "Pine", quality: "Standard", finish: "Matte", dimensions: "6x3 ft", price: "₹21,999" },
  { id: 41, name: "Handcrafted Teak Almira", image: "collects/almira15.jpeg", wood: "Teak", quality: "Luxury", finish: "Natural", dimensions: "6.5x3 ft", price: "₹26,499" },
  { id: 42, name: "Rustic Wooden Wardrobe", image: "collects/almira16.jpeg", wood: "Oak", quality: "Premium", finish: "Rustic", dimensions: "6x3 ft", price: "₹18,499" },
  { id: 43, name: "Premium Oak Almira", image: "collects/almira17.jpeg", wood: "Oak", quality: "Luxury", finish: "Glossy", dimensions: "6.5x3 ft", price: "₹24,999" },
  { id: 44, name: "Designer Wood Closet", image: "collects/almira18.jpeg", wood: "Pine", quality: "Premium", finish: "Matte", dimensions: "6x3 ft", price: "₹22,499" },
  { id: 45, name: "Traditional Kerala Storage", image: "collects/almira19.jpg", wood: "Rosewood", quality: "Premium", finish: "Natural", dimensions: "6.2x3 ft", price: "₹20,999" },
  { id: 46, name: "Luxury Wooden Almira", image: "collects/almira20.jpg", wood: "Teak", quality: "Luxury", finish: "Glossy", dimensions: "6.8x3.2 ft", price: "₹27,999" },



  { id: 46, name: "Solid Wood Dining Table", image: "collects/tables1.jpeg", wood: "Teak", quality: "Premium", finish: "Matte", dimensions: "6x3 ft", price: "₹18,999" },
  { id: 47, name: "Modern Coffee Table", image: "collects/tables2.jpeg", wood: "Oak", quality: "Standard", finish: "Glossy", dimensions: "3x2 ft", price: "₹9,499" },
  { id: 48, name: "Minimal Table", image: "collects/tables3.jpeg", wood: "Pine", quality: "Standard", finish: "Matte", dimensions: "4x2 ft", price: "₹11,000" },
  { id: 49, name: "Dining Table", image: "collects/tables4.jpeg", wood: "Teak", quality: "Premium", finish: "Natural", dimensions: "6x3 ft", price: "₹16,500" },

  { id: 50, name: "Luxury Marble Table", image: "collects/tables/5.jpeg", wood: "Oak", quality: "Luxury", finish: "Glossy", dimensions: "6x3 ft", price: "₹22,000" },
  { id: 51, name: "Compact Side Table", image: "collects/tables6.jpeg", wood: "Pine", quality: "Standard", finish: "Matte", dimensions: "2x2 ft", price: "₹5,500" },
  { id: 52, name: "Modern Work Desk", image: "collects/tables7.jpeg", wood: "Oak", quality: "Premium", finish: "Matte", dimensions: "5x2.5 ft", price: "₹13,000" },
  { id: 53, name: "Premium Dining Table", image: "collects/tables8.jpeg", wood: "Teak", quality: "Luxury", finish: "Glossy", dimensions: "6.5x3 ft", price: "₹20,000" },

  { id: 54, name: "Modern Lounge Chair", image: "collects/chairs1.jpeg", wood: "Teak", quality: "Premium", finish: "Matte", dimensions: "Standard", price: "₹6,999" },
  { id: 55, name: "Wooden Accent Chair", image: "collects/chairs2.jpeg", wood: "Oak", quality: "Premium", finish: "Glossy", dimensions: "Standard", price: "₹7,499" },
  { id: 56, name: "Minimal Dining Chair", image: "collects/chairs3.jpeg", wood: "Pine", quality: "Standard", finish: "Matte", dimensions: "Standard", price: "₹5,999" },
  { id: 57, name: "Luxury Upholstered Chair", image: "collects/chairs4.jpeg", wood: "Teak", quality: "Luxury", finish: "Soft Finish", dimensions: "Standard", price: "₹8,999" },

  { id: 58, name: "Classic Teak Chair", image: "collects/chairs5.jpeg", wood: "Teak", quality: "Premium", finish: "Natural", dimensions: "Standard", price: "₹7,999" },
  { id: 59, name: "Compact Study Chair", image: "collects/chairs6.jpeg", wood: "Pine", quality: "Standard", finish: "Matte", dimensions: "Standard", price: "₹5,499" },
  { id: 60, name: "Premium Lounge Seat", image: "collects/chairs7.jpeg", wood: "Oak", quality: "Luxury", finish: "Glossy", dimensions: "Standard", price: "₹9,999" },
  { id: 61, name: "Minimal Wood Chair", image: "collects/chairs8.jpeg", wood: "Pine", quality: "Standard", finish: "Matte", dimensions: "Standard", price: "₹6,299" },

  { id: 62, name: "Designer Chair", image: "collects/chairs9.jpeg", wood: "Oak", quality: "Premium", finish: "Glossy", dimensions: "Standard", price: "₹8,499" },
  { id: 63, name: "Ergonomic Chair", image: "collects/chairs10.jpeg", wood: "Pine", quality: "Premium", finish: "Matte", dimensions: "Standard", price: "₹7,299" },
  { id: 64, name: "Luxury Office Chair", image: "collects/chairs11.jpeg", wood: "Teak", quality: "Luxury", finish: "Soft Finish", dimensions: "Standard", price: "₹10,999" },
  { id: 65, name: "Classic Wooden Chair", image: "collects/chairs12.jpeg", wood: "Teak", quality: "Premium", finish: "Natural", dimensions: "Standard", price: "₹6,799" },

  { id: 66, name: "Featured Sofa 1", image: "collects/sofa/1.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Matte", dimensions: "Standard", price: "₹18,999" },
  { id: 67, name: "Featured Sofa 2", image: "collects/sofa/2.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Matte", dimensions: "Standard", price: "₹19,499" },
  { id: 68, name: "Featured Sofa 3", image: "collects/sofa/3.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Matte", dimensions: "Standard", price: "₹20,499" },
  { id: 69, name: "Featured Sofa 4", image: "collects/sofa/4.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Matte", dimensions: "Standard", price: "₹21,499" },

  { id: 70, name: "Royal Comfort Sofa", image: "collects/sofa/5.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Polished", dimensions: "6x3 ft", price: "₹18,999" },
  { id: 71, name: "Heritage Lounge Sofa", image: "collects/sofa/6.jpeg", wood: "Rosewood", quality: "Luxury", finish: "Glossy", dimensions: "6.5x3 ft", price: "₹21,499" },
  { id: 72, name: "Classic Kerala Sofa", image: "collects/sofa/7.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Matte", dimensions: "6x3 ft", price: "₹19,999" },
  { id: 73, name: "Vintage Oak Sofa", image: "collects/sofa/8.jpeg", wood: "Oak Wood", quality: "Luxury", finish: "Glossy", dimensions: "6.2x3.1 ft", price: "₹22,999" },
  { id: 74, name: "Minimal Comfort Couch", image: "collects/sofa/9.jpeg", wood: "Teak Wood", quality: "Standard", finish: "Matte", dimensions: "5.8x3 ft", price: "₹17,999" },
  { id: 75, name: "Grand Palace Sofa", image: "collects/sofa/10.jpeg", wood: "Rosewood", quality: "Luxury", finish: "Polished", dimensions: "7x3.5 ft", price: "₹25,999" },
  { id: 76, name: "Urban Teak Sofa", image: "collects/sofa/11.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Matte", dimensions: "6x3 ft", price: "₹20,499" },
  { id: 77, name: "Antique Finish Couch", image: "collects/sofa/12.jpg", wood: "Sheesham", quality: "Luxury", finish: "Antique", dimensions: "6.3x3.2 ft", price: "₹23,499" },
  { id: 78, name: "Elegant Living Sofa", image: "collects/sofa/13.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Polished", dimensions: "6x3 ft", price: "₹19,499" },
  { id: 79, name: "Modern Relax Sofa", image: "collects/sofa/14.jpeg", wood: "Engineered Wood", quality: "Standard", finish: "Matte", dimensions: "5.9x3 ft", price: "₹21,999" },
  { id: 80, name: "Handcrafted Luxury Sofa", image: "collects/sofa/15.jpeg", wood: "Rosewood", quality: "Luxury", finish: "Glossy", dimensions: "7x3.5 ft", price: "₹26,499" },
  { id: 81, name: "Rustic Wooden Sofa", image: "collects/sofa/16.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Rustic", dimensions: "6.1x3 ft", price: "₹18,499" },
  { id: 82, name: "Premium Oak Couch", image: "collects/sofa/17.jpeg", wood: "Oak Wood", quality: "Luxury", finish: "Glossy", dimensions: "6.5x3.2 ft", price: "₹24,999" },
  { id: 83, name: "Designer Lounge Sofa", image: "collects/sofa/18.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Polished", dimensions: "6.2x3 ft", price: "₹22,499" },
  { id: 84, name: "Traditional Kerala Couch", image: "collects/sofa/19.jpeg", wood: "Teak Wood", quality: "Premium", finish: "Matte", dimensions: "6x3 ft", price: "₹20,999" },
  { id: 85, name: "Luxury Comfort Sofa", image: "collects/sofa/20.jpeg", wood: "Rosewood", quality: "Luxury", finish: "Glossy", dimensions: "7x3.5 ft", price: "₹27,999" }
];


// GET ID
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// FIND PRODUCT
const product = products.find(p => p.id === productId);

console.log("ID:", productId);
console.log("PRODUCT:", product);

// DISPLAY
if (product) {
  document.getElementById("productImg").src = product.image;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("woodType").textContent = product.wood;
  document.getElementById("quality").textContent = product.quality;
  document.getElementById("finish").textContent = product.finish;
  document.getElementById("dimensions").textContent = product.dimensions;
}


// THUMBNAILS
document.querySelectorAll(".thumbnails img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("productImg").src = img.src;
  });
});

});


// WOOD SELECT
function selectWood(btn) {
  document.querySelectorAll(".options button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}