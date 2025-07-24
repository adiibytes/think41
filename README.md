# URL Logger – React App

A simple and interactive React application that allows users to:

- Enter and visit URLs.
- Track recently visited URLs (up to 50).
- Control how many recent visits are displayed.
- Clear visit history.
- Revisit or delete individual entries.

---

##  Features

-  **Input field** to type a URL and log it.
-  **User-defined display limit** for recent visit history.
-  **Smart history logic**:
  - Avoids duplicates.
  - Shows most recent entries at the top.
  - Caps history to 50 items.
-  **Clear History** button to reset all visits.
-  Timestamps shown for each visit in local time format.
-  URLs are displayed in clickable format (optional enhancement).
-  Tailwind CSS classes for basic styling.

---

##  Tech Stack

- **React** (with `useState`)
- **JavaScript (ES6+)**
- **Tailwind CSS** (for styling)

---

##  Folder Structure

```
src/
│
├── UrlLogger.js         # Main component with all logic and UI
├── App.js               # Entry point that renders <UrlLogger />
└── index.js             # React DOM render setup
```

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/url-logger-react.git
cd url-logger-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

The app will open at `http://localhost:3000`.

---

## 🧪 How to Use

1. Enter any URL (e.g., `https://openai.com`).
2. Click **"Isit Page"** to visit and log it.
3. Use the input below to control how many recent URLs you want to see.
4. View the timestamped list of your recent visits.
5. Use **"Clear History"** to reset.

---



> *(Add a screenshot of the UI here if submitting visually or uploading to GitHub)*

---

## 📄 License

This project is submitted as part of an assignment. You may reuse the logic and components for learning and personal projects.
