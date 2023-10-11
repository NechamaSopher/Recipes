import { useEffect, useState } from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeList.css";

import { trackPageLoad, trackTimeSpentOnPage } from '../../utils/tracking-events.js'

const RecipeList = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const startTime = new Date();
    getRecipeInfo(); 
    trackPageLoad();
    return () => {
      const timeSpent = (new Date() - startTime) / 1000;
      trackTimeSpentOnPage('RecipeList', timeSpent)
    }
   }, []);

  const getRecipeInfo = async () => {
    const YOUR_APP_ID = `82e453da`;
    const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";
  
    const url = `https://api.edamam.com/search?q=${query || 'cake'}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    var { data } = await Axios.get(url);
    setRecipes(data.hits);
  };

  const handleClick = () => {
    getRecipeInfo();
  };

  const keyPress = (e) => {
    if(e.keyCode === 13) {
      getRecipeInfo();
    }
 }

  return (
    <div className="recipe-list">
      <h1 className="top-title">Food Recipe Plaza 🍔</h1>

      <div className="search">
        <Input id="outlined-search" 
          label="Search" 
          placeholder="Search Food"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => keyPress(e)} />

        <Button className='search-btn' variant="contained" onClick={() => handleClick()}>Search</Button>
      </div>

      <div className="recipes">
        { recipes.map((r, index) => 
            <RecipeCard recipe={r.recipe} key={index} id={index}/>
          )}
      </div>
    </div>
  );
}

export default RecipeList;
