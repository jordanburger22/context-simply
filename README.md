# React Recipes with Context

This project demonstrates how to create a multi-page React application for **sharing recipe data** using the **React Context API**. Each page (Breakfast, Lunch, Dinner, Dessert) shows only the relevant recipes, while the **Home** page lists **all** recipes.

## Features
- **React Router** for multi-page navigation
- **React Context** for global state management (no prop drilling)
- **Separate pages** for Breakfast, Lunch, Dinner, Dessert
- **Central “All Recipes”** on the Home page
- **Custom CSS and color schemes** for each category

## Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/jordanburger22/context-simply.git
   cd context-simply
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run the Development Server**  
   ```bash
   npm run dev
   ```
   - Open [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal) to see the app in your browser.

## Project Structure

```
context-simply
├── src
│   ├── App.jsx              // Main App component with routes
│   ├── main.jsx             // Entry point rendering <App />
│   ├── RecipesContext.jsx   // Context Provider for recipes
│   ├── recipes.js           // Array of recipe data
│   ├── components
│   │   ├── Navbar.jsx       // Navigation bar component
│   │   ├── Home.jsx         // Displays all recipes
│   │   ├── Breakfast.jsx    // Filters and displays breakfast recipes
│   │   ├── Lunch.jsx        // Filters and displays lunch recipes
│   │   ├── Dinner.jsx       // Filters and displays dinner recipes
│   │   └── Dessert.jsx      // Filters and displays dessert recipes
│   └── App.css              // CSS including :root variables
├── package.json
└── README.md                // This file
```

## Usage & Tips

1. **RecipesContext**  
   - Stores the entire array of recipes.
   - Wraps the application in `main.jsx`, so all components can access `allRecipes` via `useContext(RecipesContext)`.

2. **Home (All Recipes)**  
   - By default, `Home.jsx` displays _all_ recipes from `allRecipes`.
   - Renders each recipe’s name, ingredients, and instructions.

3. **Category Pages**  
   - **Breakfast**, **Lunch**, **Dinner**, and **Dessert** pages each:
     - Import `useContext` and `RecipesContext`.
     - Filter `allRecipes` by `type` (e.g., `"Breakfast"`) to show only those items.
     - Display name, ingredients, and instructions for each filtered recipe.

4. **Styling**  
   - Check out the **CSS variables** in `App.css` for unique backgrounds (`breakfast`, `lunch`, `dinner`, `dessert`, `home`) and consistent theming (navbar, text color, etc.).

## Learning Objectives

1. **React Context Fundamentals**  
   - How to create a context, wrap the app with a `Provider`, and consume the data using `useContext`.

2. **Routing & Page Structure**  
   - Setting up routes for multiple pages (Home, Breakfast, Lunch, Dinner, Dessert).
   - Understanding how `React Router` allows for simple, declarative navigation.

3. **Filtering Data**  
   - Using `Array.filter()` in each category component to display only the relevant recipes.

4. **Reusable Styling**  
   - Using CSS variables (`:root`) for consistent color schemes.
   - Sharing layout styles (e.g., `.container`) across different pages.

---

**Happy coding and bon appétit!**