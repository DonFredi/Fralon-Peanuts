import React from 'react';
import DataContext from './DataContext';
import { useContext, useState } from 'react';


const Recipes = () => {
    const { state } = useContext(DataContext);
    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

    const handleNextRecipe = () => {
        setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % state.recipes.length);
    };

    const handlePreviousRecipe = () => {
        setCurrentRecipeIndex((prevIndex) =>
            prevIndex === 0 ? state.recipes.length - 1 : prevIndex - 1
        );
    };

    const recipe = state.recipes[currentRecipeIndex];

    const isFirstRecipe = currentRecipeIndex === 0;
    const isLastRecipe = currentRecipeIndex === state.recipes.length - 1;

    return (
        <div className="w-full p-4 ">
            <h2 className="text-center text-3xl text-yellow-400 font-bold p-2 mb-9">Experience recipes from Fralon Products</h2>
            <div className="flex w-[100%] flex-col justify-center md:flex-row">
                <div className="w-[100%] md:w-1/2 mb-4 md:mb-0 ">
                    <img src={recipe.image} alt={recipe.name} className="w-full h-fit rounded-lg" />
                </div>
                <div className="w-[100%] md:w-1/2 p-4 bg-white rounded-lg shadow-lg items-center mt-2">
                    <h1 className="text-3xl text-yellow-400 font-semibold mb-6 mt-7">{recipe.name}</h1>
                    <p className="text-lg text-gray-700 mb-6">{recipe.introduction}</p>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
                        <ul className="list-disc ml-6">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="mb-1">{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold my-4">Instructions:</h2>
                        <ol className="list-decimal ml-6">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="mb-1">{step}</li>
                            ))}
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold my-4">Nutritional Information:</h2>
                        <p>Calories: {recipe.nutritionalInfo.calories}</p>
                        <p>Fat: {recipe.nutritionalInfo.fat}g</p>
                        <p>Protein: {recipe.nutritionalInfo.protein}g</p>
                        <p>Carbohydrates: {recipe.nutritionalInfo.carbohydrates}g</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold my-4">Variations and Substitutions:</h2>
                        <ul className="list-disc ml-6">
                            {recipe.variations.map((variation, index) => (
                                <li key={index} className="mb-1">{variation}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold my-4">Tips and Tricks:</h2>
                        <ul className="list-disc ml-6">
                            {recipe.tips.map((tip, index) => (
                                <li key={index} className="mb-1">{tip}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={handlePreviousRecipe} disabled={isFirstRecipe} className={`bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded ${isFirstRecipe ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    Previous Recipe
                </button>
                <button onClick={handleNextRecipe} disabled={isLastRecipe} className={`bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded ${isLastRecipe ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    Next Recipe
                </button>
            </div>
        </div>
    );
};

export default Recipes;