import React from 'react'
import Ingredient from './Ingredient'
import IngredientSearch from './IngredientSearch'
import WelcomePopup from './WelcomePopup'

function HomePage() {
  return (
    <div id='homepage'>
        <WelcomePopup/>
        <Ingredient/>
        <IngredientSearch/>
    </div>
  )
}

export default HomePage