 import { useState, useRef, useEffect } from "react";
 import Card from 'react-bootstrap/Card'
 import Button from 'react-bootstrap/Button'

const Recipes = ({recipe}) => {
  
  const [menu, setMenu] = useState(recipe)
  const [list,setList] = useState('')
  const isFirstRun =useRef(true);

  useEffect(
    
    () => {
      if (isFirstRun.current){
        isFirstRun.current=false; 
        return;}
    setMenu((recipe))
       
    sendApiRequest() 
     
  }, [recipe]
            )
   
//Recipe API here"
const sendApiRequest = async ()=>{
const apiId= 'feab01b2'
const apiKey = '816e602b93ea221759b2671304cb874e'
const food = menu
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiId}&app_key=${apiKey}&q=${food}`)
const data = await response.json()
const newData = JSON.stringify(data.hits)
//const newData = JSON.stringify(data)
//const parData = JSON.parse(newData)
//const newData = JSON.stringify(data.hits)
setList((data.hits)) 
console.log(list)
}

 
   

 
 

  return( 
   
<ol>     
{   
 
  Object.values(list).map((dahit,i)  => {
   
     
     return(
      
    console.log('data object is', list),
      console.log('data is here', dahit), 
    <div style={{ width: '18rem' }} key={i}>
  
  
   <p> {dahit.recipe.label}</p> 
    <p>
      {dahit.recipe.ingredientLines} 
    </p>
     
</div>
     )
   
})  
  }
</ol>
  )
 
};

export default Recipes;

/*{
  data.map((food,i) =>(
 <div key={i}>
 <p>{food}</p>
 </div>   
  ))} */