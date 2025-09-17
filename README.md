# Weather & Whisk

Weather & Whisk is a web application that combines accurate, up-to-date weather information with a recipe generator. Instantly check the weather for any city and discover delicious recipes based on your chosen ingredients—all in a responsive, user-friendly interface.

## Features

- **Current Weather Conditions:** Get real-time weather updates for any city.
- **Recipe Generator:** Find recipes by entering ingredients you have on hand.
- **Search by City or Ingredient:** Easily switch between weather and recipe search.
- **Responsive UI:** Optimized for desktop, laptop, and mobile devices.
- **Detailed Recipe View:** See ingredients and instructions for each recipe.
- **Modern Design:** Clean, intuitive, and visually appealing interface.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Shiva-0515/weather-whisk.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd weather-whisk
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

Start the development server:
```bash
npm run dev
```
Open your browser and go to [http://localhost:5173] (or the port shown in your terminal).


## Project Structure

```
src/
  components/
    Index.jsx           # Main landing and navigation
    WeatherSearch.jsx   # Weather search input and logic
    WeatherCard.jsx     # Weather display card
    RecipeSearch.jsx    # Recipe search input and logic
    RecipeList.jsx      # List of recipe cards
    RecipeDetails.jsx   # Detailed recipe modal
  assets/
    hero-background.jpg # Background image
  App.jsx
  main.jsx
  index.css
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.
