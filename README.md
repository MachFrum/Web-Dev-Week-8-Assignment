# Mach's Scent E-commerce Frontend

A polished, responsive e-commerce frontend for a luxury perfume brand. This project demonstrates modern web development practices using only HTML, CSS, and vanilla JavaScript.


## 📋 Contents

- Fully responsive multi-page e-commerce website
- Elegant, luxury-focused design
- Client-side cart functionality using localStorage
- Product catalog with sorting options
- Simulated checkout experience

## 🛠️ Technologies Used

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript (no frameworks)
- LocalStorage API for data persistence

## 🚀 Live Demo

View the live demo: [Mach's Scent on GitHub Pages](https://machfrum.github.io/Web-Dev-Week-8-Assignment/)

## 🗂️ Project Structure

```
mach-scent/
├── index.html (Home page)
├── products.html (Products page)
├── cart.html (Cart page)
├── css/
│   └── styles.css (Main stylesheet)
├── js/
│   └── products.js (Product data and display logic)
├── images/
│   ├── hero.jpg
│   ├── about.jpg
│   └── products/
│       ├── perfume1.jpg
│       ├── perfume2.jpg
│       └── ... (perfume images)
└── README.md
```

## ✨ Features

### Home Page
- Hero section with call-to-action
- Featured products showcase
- Elegant typography and animations
- Brand story section

### Products Page
- Grid display of all perfume products
- Product sorting (by name and price)
- "Add to Cart" functionality
- Responsive layout for all devices

### Cart Page
- Dynamic cart item display
- Quantity adjustment controls
- Product removal functionality
- Order summary with subtotal and shipping
- Simulated checkout form

## 🔧 Setup and Installation

1. Clone this repository:
   ```
   git clone https://github.com/MachFrum/Web-Dev-Week-8-Assignment.git
   ```

2. Open any of the HTML files in your browser:
   ```
   open index.html
   ```

No server or build process is required as this is a static frontend implementation.

## 💾 Data Storage

All data is stored in the browser's localStorage:
- Product data is defined in `js/products.js`
- Cart items are stored in localStorage under the key 'cart'
- No backend server is required

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: Below 768px

## ⚙️ Implementation Notes

- All JavaScript is included inline in the HTML files for simplicity and clarity, rather than as separate .js files (except for the product data)
- The design follows modern e-commerce patterns with a focus on elegance and simplicity

## 🖼️ Adding Your Own Images

For the site to display correctly, you'll need to add the following images:
- A hero image in `images/hero.jpg`
- An about section image in `images/about.jpg`
- Product images in `images/products/perfume1.jpg` through `perfume9.jpg`

## 📄 License

This project is studying purposes.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you'd like to change.

---

Created as a demonstration of frontend development skills using HTML, CSS, and vanilla JavaScript.
