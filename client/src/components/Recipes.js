 import { useState, useRef, useEffect } from "react";
 import {Card} from 'react-bootstrap'
 

const Recipes = ({recipe}) => {
  
   
  const [list,setList] = useState('')
  const isFirstRun =useRef(true);

  //Fires API request and sets menu state on every re-render
  useEffect(
    
    () => {
      if (isFirstRun.current){
        isFirstRun.current=false; 
        return;}

    
       
    sendApiRequest() 
     
  }, [recipe]
            )
   
//Recipe API here"
const sendApiRequest = async ()=>{
const apiId= 'feab01b2'
const apiKey = '816e602b93ea221759b2671304cb874e'
const food = recipe
 
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiId}&app_key=${apiKey}&q=${food}`)
console.log(response)
const data = await response.json()
 
//const newData = JSON.stringify(data)
//const parData = JSON.parse(newData)
//const newData = JSON.stringify(data.hits)
setList((data.hits)) 
console.log(list)
}

 
   

 
 

  return( 
   
<div className='box3'> 
     
{   
 
  Object.values(list).map((dahit,i)  => {
   
     
     return(
      
 <div key={i}  > 
    <Card style={{ width: '18rem'}} className='card'>
  <Card.Img variant="top" src={dahit.recipe.image}  />
  <Card.Body>
  
   <Card.Title ><strong><i>  {dahit.recipe.label}</i></strong></Card.Title> 
    <Card.Text>
       <p className="line1"><strong> Meal Type:</strong> {dahit.recipe.mealType}</p>
       <p className="line2"><strong>Calories:</strong> {dahit.recipe.calories}</p>
    </Card.Text>
    <a className='recipe' href={dahit.recipe.url} role="button" target="_blank">Let's Make This Recipe!</a>
  </Card.Body>
</Card>
 </div>
     )
   
})  
  }
</div>
  )
 
};

export default Recipes;

 