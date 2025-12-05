import React, { useState } from "react";
function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesc, setRecipeDesc] = useState("");
  const handleAddRecipe = (e) => {
    e.preventDefault();
    if (!recipeName || !recipeDesc) {
      alert("Please fill all fields");
      return;
    }
    const newRecipe = {
      id: Date.now(),
      name: recipeName,
      description: recipeDesc
    };
    setRecipes([...recipes, newRecipe]);
    setRecipeName("");
    setRecipeDesc("");
  };
  const handleDelete = (id) => {
    const updated = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updated);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>🍽️ Recipe Book</h1>
      <form onSubmit={handleAddRecipe} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}/>
        <br /><br />
        <textarea
          placeholder="Recipe Description"
          value={recipeDesc}
          onChange={(e) => setRecipeDesc(e.target.value)}/>
        <br /><br />
        <button type="submit">Add Recipe</button>
      </form>
      <h2>📋 All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px"
            }}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleDelete(recipe.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Recipe;
