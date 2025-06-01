<h1 align="center">✨ Email Style Adjuster <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e7.png" width="40" style="vertical-align:middle; animation: bounce 1s infinite alternate;" alt="email"/></h1>

<p align="center"><b>
Easily adjust, preview, and export styled HTML emails with a live editor built using React, Tailwind CSS, and Vite. Instantly see your design changes and get production-ready email code!
</b></p>

<p align="center">
  <img src="https://i.ibb.co/8gDHFKCn/preview-1815.jpg" width="320" alt="App Preview" />
</p>

<p align="center">
  <a href="https://kaushall44.github.io/Email-Style-Adjuster/"><strong>🌐 Live Demo &rarr;</strong></a>
</p>

---

## 🚀 Features

- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f680.png" width="20" style="vertical-align:middle;"/> **Live Preview:** Instantly see your email style changes.
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bb.png" width="20" style="vertical-align:middle;"/> **Responsive Design:** Works beautifully on all devices.
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f9d1-200d-1f4bb.png" width="20" style="vertical-align:middle;"/> **Modern Stack:** Built with React, Tailwind CSS, and PostCSS.
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e5.png" width="20" style="vertical-align:middle;"/> **Export HTML:** Download or copy the styled email template.
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f6e0.png" width="20" style="vertical-align:middle;"/> **Customizable Styles:** Easily tweak and experiment with CSS for your emails.
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f310.png" width="20" style="vertical-align:middle;"/> **Deployed on GitHub Pages.**

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### Installation

```sh
# Clone the repository
git clone https://github.com/Kaushall44/Email-Style-Adjuster.git
cd Email-Style-Adjuster

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 🏗️ Build & Deploy

### Build for Production

```sh
npm run build
```

The production-ready files will be generated in the `dist` folder.

### Deploy to GitHub Pages

1. Set the correct base in `vite.config.js`:
    ```js
    base: '/Email-Style-Adjuster/',
    ```
2. Copy the contents of the `dist` folder into a new folder named `docs` at the root of your repo:
    ```sh
    # On Windows (PowerShell)
    xcopy /E /I /Y dist\* docs\
    ```
    Or manually move files.

3. Commit and push your changes:
    ```sh
    git add docs
    git commit -m "Deploy to GitHub Pages"
    git push
    ```

4. In GitHub, go to **Settings > Pages**, and set the source to the `main` branch and `/docs` folder.

5. Your site will be live at:  
   [https://kaushall44.github.io/Email-Style-Adjuster/](https://kaushall44.github.io/Email-Style-Adjuster/)

---

## 📁 Project Structure

```
Email-Style-Adjuster/
├── public/                   # Static assets
├── src/
│   ├── components/           # React components
│   ├── styles/               # Tailwind and custom styles
│   ├── App.jsx               # Main App component
│   └── main.jsx              # App entry point
├── docs/                     # GitHub Pages deploy folder
├── dist/                     # Production build output
├── index.html                # HTML template
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Customization

- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e3.png" width="18" style="vertical-align:middle;"/> **Favicon:** Update the favicon in `index.html` by editing the `<link rel="icon">` tag.
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3a8.png" width="18" style="vertical-align:middle;"/> **Styles:** Modify or add Tailwind CSS classes in your React components for custom styles.
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f527.png" width="18" style="vertical-align:middle;"/> **Email Templates:** Add or edit default templates through the codebase for different starting points.

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> **Made with ❤️ by [Kaushall44](https://github.com/Kaushall44)**