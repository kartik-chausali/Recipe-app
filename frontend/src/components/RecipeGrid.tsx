/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { RecipeCard } from './Recipe'
import axios from 'axios';

export interface SampleRecipeProps{
    id:number,
    title:string,
    image:string,
    readyInMinutes:number,
    servings: number,
    aggregateLikes:number,
    [key:string]: any,
}

interface ChildProps {
  featuredRef: React.RefObject<HTMLDivElement | null>;
}

export const RecipeGrid :  React.FC<ChildProps> = ({featuredRef})=> {

    const [sampleRecipes , setSampleRecipies] = useState<SampleRecipeProps[]>([{
        id:0,
        title:"",
        image:"",
        readyInMinutes:0,
        servings:0,
        aggregateLikes:0
    }])

    useEffect(()=>{
        (async()=>{
            const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=14361166bc424879a33c750484d78d17&number=10`)
            console.log("random" , response.data.recipes);
            setSampleRecipies(response.data.recipes);
        })();
        console.log("is this runnning")
    }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-12" ref={featuredRef}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Recipes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our most popular recipes, carefully curated by our community of home chefs. 
          From quick weeknight dinners to impressive weekend treats.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleRecipes.map((recipe : SampleRecipeProps) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  )
}
