import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './IngredientPage.css';

const IngredientPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category') || ''; 
  const [inputIngredients, setInputIngredients] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleInputChange = (e) => {
    setInputIngredients(e.target.value);
  };

  const handleRecipeSearch = async () => {
    setHasSearched(true);
    try {
      const response = await fetch(
        `http://localhost:5000/recipes?category=${category}&ingredients=${inputIngredients}`
      );
      const matchingRecipes = await response.json();
      setFilteredRecipes(matchingRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setFilteredRecipes([]);
    }
  };

  return (
    <div className="ingredient-page">
      <div className="ingredient-container">
        <h1>Enter Available Ingredients</h1>
        <p>You selected: {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'No category'} Recipes</p>
        <input 
          type="text" 
          placeholder="Enter ingredients (comma-separated)" 
          value={inputIngredients}
          onChange={handleInputChange}
        />
        <button onClick={handleRecipeSearch}>Get Recipe</button>

        {hasSearched && (
          <div>
            {filteredRecipes.length > 0 ? (
              <div>
                <h2>Matching Recipes</h2>
                <ul>
                  {filteredRecipes.map((recipe, index) => (
                    <li key={index}>
                      <h3>{recipe.name}</h3>
                      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                      <p><strong>Preparation:</strong></p>
                      <ul>
                        {recipe.preparation.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No recipes match the entered ingredients.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientPage;
