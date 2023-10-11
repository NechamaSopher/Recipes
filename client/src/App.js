import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import RecipeList from './components/RecipeList/RecipeList.js';
import RecipeInfo from './components/RecipeInfo/RecipeInfo.js';
import Navigation from './components/Navigation/Navigation.js';
import About from './components/About/About.js';

import Ad from './components/Ad/Ad.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import { trackEvents, trackTimeSpentOnWebsite } from './utils/tracking-events.js'

import './app.css'

const App = () => {

  useEffect(() => {
    const startTime = new Date();
    trackEvents();

    return () => {
      const timeSpent = (new Date() - startTime) / 1000;
      trackTimeSpentOnWebsite(timeSpent)
    }
  }, []);
  
  return (
    <Router>
      <div className="app">
      <Navigation/>
        <div className="app-content">
          <Ad class="top-ad" type="top"></Ad>

          <Routes>
          <Route exact path="/" element={<Navigate replace to="/recipes"/>}/>
            <Route path="/recipes" exact element={<RecipeList/>} />
            <Route path="/recipes/:id" element={<RecipeInfo/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/dashboard" exact element={<Dashboard/>} />
          </Routes>

          <Ad class="side-ad" type="side"></Ad>

          <Ad class="bottom-ad" type="bottom"></Ad>
        </div>
      </div>
    </Router>
  );
}

export default App;
