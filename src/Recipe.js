import React from 'react';
import './recipe.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className='recipe'>
            <h1 className='title'>{title}</h1>
            <ul className="list">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p className="calories">Calories: {Math.round(calories)}</p>
            <img className="image" src={image} alt="" 
            />
        </div>
    );
}


export default Recipe;