import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageLoad, trackTimeSpentOnPage } from '../../utils/tracking-events';

import './RecipeInfo.css'

const RecipeInfo = () => {
    const location = useLocation();
    const recipe = location.state

    useEffect(() => {
      const startTime = new Date();
      trackPageLoad();

      return () => {
        const timeSpent = (new Date() - startTime) / 1000;
        trackTimeSpentOnPage('RecipeInfo', timeSpent)
      }
     }, []);
    
    return (
      <div className='recipe-info'>
        <h1>{recipe.label}</h1>
        <div className='recipe-info-content'>
          <img className="recipe-img" src={recipe.image}  alt={recipe.label}/>

          <div className='details'>
            <h2>Ingredients</h2>
            <ul className='ingredients'>
              {recipe.ingredientLines.map((ingredient, i) => {
                return <li key={i}>{ingredient}</li>
              })}
            </ul>

            <h2>Health Labels</h2>
            <div className='recipe-tags'>
              {recipe.healthLabels.map((healthLabel, i) => {
                return <span className='tag' key={i}>{healthLabel}</span>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default RecipeInfo;