import Recipes from './Recipes'
import { useState,useEffect,useRef} from 'react'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'

const AddFoods = ({ingredient}) => {
    
    const [fridge, setFridge] = useState([])
    const isFirstRun =useRef(true);
    
    
    
    AddFoods.propTypes ={ingredient: PropTypes.string}

//UseEffect to pass props into useState
useEffect(
  () => {
  if (isFirstRun.current){
    isFirstRun.current=false; 
    return;}
      
  setFridge(fridge => [...fridge,(ingredient)])
   
}, [ingredient]
          )


   //Delete Ingredient from Fridge, not allowing repeat ingredient
    
   const deleteIngredient = (ingredient) => {
     
    setFridge( fridge.filter((prevFridge) => prevFridge !== ingredient))
     
     }
    
    //Try putting return tag into the useEffect 
    return  ( 
      
  <div   > 
  { 
  
    //Takes ingredients from the fridge and returns them in the corresponding format, allowing deletion
    fridge.map((ingredient, index) => {
      /* if(fridge.length === 1)
       {
         console.log(fridge.length)
         return <p>The cart is empty</p>
       } */  
      return(
        
    <div key={index} className='box2' >
    <p  > {ingredient}<FaTimes style={{color: 'red', cursor: 'pointer', fontSize:"medium"}} onClick={()=> {deleteIngredient(ingredient)}}/> </p> 
    </div>)
    
  })   

 
 
    
  }  
  <Recipes recipe={fridge}/>  
  </div>
  
  ) 
   
   
}
 

export default AddFoods;


 
 