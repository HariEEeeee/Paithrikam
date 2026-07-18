 const products = {
    1: {
        id: 1,
        category: "Beds",
        name: "Malabar Royal Teak Bed",
        price: "₹1,49,999",
        image: "https://i.pinimg.com/736x/56/b0/b1/56b0b10034903f070e9fe46de1a1e6e0.jpg",
        gallery: [
            "https://i.pinimg.com/736x/56/b0/b1/56b0b10034903f070e9fe46de1a1e6e0.jpg",
            "https://i.pinimg.com/736x/56/b0/b1/56b0b10034903f070e9fe46de1a1e6e0.jpg",
            "https://i.pinimg.com/736x/56/b0/b1/56b0b10034903f070e9fe46de1a1e6e0.jpg"
        ],
        description: "Handcrafted from premium Kerala teakwood, this royal bed combines timeless elegance with exceptional durability."
    },

    2: {
        id: 2,
        category: "Chairs",
        name: "Heritage Easy Chair",
        price: "₹24,999",
        image: "https://i.pinimg.com/1200x/0d/e0/29/0de029ca9ec62a94470fa53d67a0744d.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/0d/e0/29/0de029ca9ec62a94470fa53d67a0744d.jpg",
            "https://i.pinimg.com/1200x/0d/e0/29/0de029ca9ec62a94470fa53d67a0744d.jpg",
            "https://i.pinimg.com/1200x/0d/e0/29/0de029ca9ec62a94470fa53d67a0744d.jpg"
        ],
        description: "An elegant handcrafted lounge chair offering comfort, luxury and traditional craftsmanship."
    },

    3: {
        id: 3,
        category: "Tables",
        name: "Sovereign Dining Table",
        price: "₹89,999",
        image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80"
        ],
        description: "A spacious solid teak dining table crafted for memorable family gatherings."
    },

    4: {
        id: 4,
        category: "Cabinets",
        name: "Imperial Rosewood Almarah",
        price: "₹1,35,999",
        image: "https://i.pinimg.com/1200x/0a/2f/80/0a2f8035f9e81725991f76e0d37165a6.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/0a/2f/80/0a2f8035f9e81725991f76e0d37165a6.jpg",
            "https://i.pinimg.com/1200x/0a/2f/80/0a2f8035f9e81725991f76e0d37165a6.jpg",
            "https://i.pinimg.com/1200x/0a/2f/80/0a2f8035f9e81725991f76e0d37165a6.jpg"
        ],
        description: "A luxurious handcrafted rosewood almirah featuring intricate detailing and generous storage."
    },

    5: {
        id: 5,
        category: "Sofa Sets",
        name: "Tapered Teak Sofa Set",
        price: "₹69,999",
        image: "https://i.pinimg.com/736x/8a/7d/b6/8a7db6826ee8d9578fd5a33b33992931.jpg",
        gallery: [
            "https://i.pinimg.com/736x/8a/7d/b6/8a7db6826ee8d9578fd5a33b33992931.jpg",
            "https://i.pinimg.com/736x/8a/7d/b6/8a7db6826ee8d9578fd5a33b33992931.jpg",
            "https://i.pinimg.com/736x/8a/7d/b6/8a7db6826ee8d9578fd5a33b33992931.jpg"
        ],
        description: "Modern comfort meets timeless teak craftsmanship in this beautifully designed sofa set."
    },

    6: {
        id: 6,
        category: "Chairs",
        name: "Armchair Oatmeal",
        price: "₹27,999",
        image: "https://i.pinimg.com/1200x/64/e0/5a/64e05af08b4b5cdc7bacf07178349a34.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/64/e0/5a/64e05af08b4b5cdc7bacf07178349a34.jpg",
            "https://i.pinimg.com/1200x/64/e0/5a/64e05af08b4b5cdc7bacf07178349a34.jpg",
            "https://i.pinimg.com/1200x/64/e0/5a/64e05af08b4b5cdc7bacf07178349a34.jpg"
        ],
        description: "A luxurious oatmeal upholstered armchair built for style and everyday comfort."
    },

    7: {
        id: 7,
        category: "Cabinets",
        name: "Ancestral Kitchen Credenza",
        price: "₹74,999",
        image: "https://i.pinimg.com/1200x/fd/04/62/fd0462c710dad3a28db7f7ae972041a1.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/fd/04/62/fd0462c710dad3a28db7f7ae972041a1.jpg",
            "https://i.pinimg.com/1200x/fd/04/62/fd0462c710dad3a28db7f7ae972041a1.jpg",
            "https://i.pinimg.com/1200x/fd/04/62/fd0462c710dad3a28db7f7ae972041a1.jpg"
        ],
        description: "Traditional storage furniture reimagined with elegant finishes and practical organization."
    },

    8: {
        id: 8,
        category: "Tables",
        name: "Elegence Dining Table",
        price: "₹79,999",
        image: "https://i.pinimg.com/1200x/ae/39/bf/ae39bf36ace5d58c523f3d5c23830a51.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/ae/39/bf/ae39bf36ace5d58c523f3d5c23830a51.jpg",
            "https://i.pinimg.com/1200x/ae/39/bf/ae39bf36ace5d58c523f3d5c23830a51.jpg",
            "https://i.pinimg.com/1200x/ae/39/bf/ae39bf36ace5d58c523f3d5c23830a51.jpg"
        ],
        description: "A premium dining table designed to blend modern sophistication with traditional charm."
    },

    9: {
        id: 9,
        category: "Sofa Sets",
        name: "Slatted Sofa Set",
        price: "₹59,999",
        image: "https://i.pinimg.com/736x/1e/86/81/1e8681ae92e2d34c09183598919127a7.jpg",
        gallery: [
            "https://i.pinimg.com/736x/1e/86/81/1e8681ae92e2d34c09183598919127a7.jpg",
            "https://i.pinimg.com/736x/1e/86/81/1e8681ae92e2d34c09183598919127a7.jpg",
            "https://i.pinimg.com/736x/1e/86/81/1e8681ae92e2d34c09183598919127a7.jpg"
        ],
        description: "A beautifully crafted slatted teak sofa offering minimalist elegance and superior comfort."
    },

    10: {
        id: 10,
        category: "Cabinets",
        name: "Bella Cabins",
        price: "₹94,999",
        image: "https://i.pinimg.com/736x/25/4a/83/254a83cb4e84417fcfd2384133859020.jpg",
        gallery: [
            "https://i.pinimg.com/736x/25/4a/83/254a83cb4e84417fcfd2384133859020.jpg",
            "https://i.pinimg.com/736x/25/4a/83/254a83cb4e84417fcfd2384133859020.jpg",
            "https://i.pinimg.com/736x/25/4a/83/254a83cb4e84417fcfd2384133859020.jpg"
        ],
        description: "A premium handcrafted storage cabinet built with exceptional attention to detail and durability."
    }
};


// Get the product ID from the URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Find the selected product
const product = products[productId];

if (!product) {
    document.body.innerHTML = "<h1>Product not found!</h1>";
    throw new Error("Invalid Product ID");
}

document.getElementById("productTitle").textContent = product.name;
document.getElementById("productPrice").textContent = product.price;
document.getElementById("productDescription").textContent = product.description;
document.getElementById("mainProductImage").src = product.image;


 // Gallery Thumbnail Switcher
function changeImage(thumbnail, imageUrl) {
    // Update the main image source
    document.getElementById('mainProductImage').src = imageUrl;
    
    // Remove active class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
}

// Quantity Logic
const decreaseBtn = document.getElementById('decreaseQty');
const increaseBtn = document.getElementById('increaseQty');
const qtyDisplay = document.getElementById('qtyDisplay');
let currentQty = 1;

increaseBtn.addEventListener('click', () => {
    currentQty++;
    qtyDisplay.textContent = currentQty;
});

decreaseBtn.addEventListener('click', () => {
    if (currentQty > 1) {
        currentQty--;
        qtyDisplay.textContent = currentQty;
    }
});

// Simple feedback on Adding to Cart
function addToCart() {

    const phoneNumber = "919400233174"; // Country code +91 for India

    const productLink = window.location.href;

    const message =
`Hello Paithrikam! 👋

I am interested in the following product:

🪑 Product: ${product.name}
💰 Price: ${product.price}

🔗 Product Link:
${productLink}

Quantity: 1 Set

I would like to know more about this product.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}