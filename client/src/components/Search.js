import Data from '../Food.json' 
import { useState } from 'react';
import {FaPlus} from 'react-icons/fa'
import Alert from 'react-bootstrap/Alert'

import AddFoods from './AddFoods.js'
 

 const Search = () => {
    const [query, setQuery] = useState('')

    const [recipe, setRecipe] = useState('')
    
     const addIngredients = (food) => {
         return(  
      setRecipe(food)
     // <Alert variant='success' show='true'><p>Food Add!</p></Alert>
     
         )     
    }
  
    
return (
<div>
    <input className="search"   placeholder="Ingredients" onChange={event => setQuery(event.target.value)}/>
    {
        Data.filter(food => {
            if (query === "") {
               
              return query;
            } else if (food.name.toLowerCase().includes(query.toLowerCase())) {
               
              return food;
            }
        })
          
          .map((food, index) => (

            <div className='box' key={index}>
              <p>{food.name} <FaPlus style ={{fontSize:"medium",color: "green", cursor: 'pointer'}} onClick={() => {addIngredients(food)}}  /> </p>
              
               
            </div>
           ))
           
        
    }
       
       <AddFoods ingredient ={recipe.name}   />
</div>

    )
};

export default Search;
