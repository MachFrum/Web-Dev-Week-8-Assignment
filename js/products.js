// I'm defining the product data that will be used across the site
const products = [
    {
        id: 1,
        name: "Midnight Amber",
        description: "A captivating blend of amber, vanilla, and sandalwood. Perfect for evening occasions with its rich, warm notes that linger elegantly.",
        price: 89.99,
        image: "images/products/perfume1.jpeg"
    },
    {
        id: 2,
        name: "Ocean Breeze",
        description: "Fresh and invigorating with notes of sea salt, bergamot, and white musk. Like a walk along the coastline on a crisp morning.",
        price: 75.50,
        image: "images/products/perfume2.jpeg"
    },
    {
        id: 3,
        name: "Rose Noir",
        description: "A sophisticated twist on the classic rose, intertwined with blackcurrant, patchouli, and a hint of pepper for a modern edge.",
        price: 120.00,
        image: "images/products/perfume3.jpeg"
    },
    {
        id: 4,
        name: "Citrus Bloom",
        description: "Vibrant and energizing with grapefruit, mandarin, and jasmine notes. The perfect daytime fragrance to lift your spirits.",
        price: 65.99,
        image: "images/products/perfume4.jpeg"
    },
    {
        id: 5,
        name: "Velvet Oud",
        description: "An opulent composition featuring rare oud wood, Bulgarian rose, and saffron. A luxurious scent that makes a bold statement.",
        price: 150.00,
        image: "images/products/perfume5.jpeg"
    },
    {
        id: 6,
        name: "Lavender Dreams",
        description: "Soothing lavender blended with vanilla and cedarwood creates a calming, comforting scent perfect for everyday wear.",
        price: 78.50,
        image: "images/products/perfume6.jpeg"
    },
    {
        id: 7,
        name: "Golden Vetiver",
        description: "A sophisticated masculine fragrance with vetiver, leather, and spice notes. Classic yet contemporary elegance in a bottle.",
        price: 95.00,
        image: "images/products/perfume7.jpeg"
    },
    {
        id: 8,
        name: "Peony Silk",
        description: "A delicate floral melody of peony, lily of the valley, and soft musk. Feminine and graceful for the modern woman.",
        price: 85.00,
        image: "images/products/perfume8.jpeg"
    },
    {
        id: 9,
        name: "Mystic Cedar",
        description: "Woody and mysterious with cedarwood, clove, and amber. A grounding fragrance that evokes ancient forests and quiet strength.",
        price: 110.00,
        image: "images/products/perfume9.jpeg"
    }
];

// If running as a module, export the products
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products };
}