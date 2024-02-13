import CustomImg from "./CustomImg";
import React, { useState } from 'react';

export default function RecipeCard({ recipe }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleViewRecipe = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="recipe-card">
            <CustomImg imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="author-img" src={process.env.PUBLIC_URL + recipe.authorimg} alt="Author" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <a onClick={handleViewRecipe} className="view-btn">View Recipe</a>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>{recipe.title} Recipe</h2>
                        <p className="recipe-desc-title">Ingredients:
                            <ul className="recipe-desc">
                                <li>{recipe.ingredients_1}</li>
                                <li>{recipe.ingredients_2}</li>
                                <li>{recipe.ingredients_3}</li>
                                <li>{recipe.ingredients_4}</li>
                                <li>{recipe.ingredients_5}</li>
                                <li>{recipe.ingredients_6}</li>
                                <li>{recipe.ingredients_7}</li>
                                <li>{recipe.ingredients_8}</li>
                                <li>{recipe.ingredients_9}</li>
                            </ul>
                        </p>
                        <p className="recipe-desc-title"> Instructions:
                            <ol className="recipe-desc instruction">
                                <li>{recipe.instruction_1}</li>
                                <li>{recipe.instruction_2}</li>
                                <li>{recipe.instruction_3}</li>
                                <li>{recipe.instruction_4}</li>
                                <li>{recipe.instruction_5}</li>
                                <li>{recipe.instruction_6}</li>
                                <li>{recipe.instruction_7}</li>
                            </ol>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
