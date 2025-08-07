/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Heart, Star, ChefHat, Leaf, Award, DollarSign } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import axios from "axios"

interface RecipeDetailProps {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    healthScore: number;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    extendedIngredients: Array<{
      id: number
      name: string
      original: string
      image: string
    }>;
    analyzedInstructions: Array<{
      steps: Array<{
        number: number
        step: string
      }>
    }>;
    aggregateLikes: number;
    pricePerServing: number;
}

export default function FullRecipe() {
    const location = useLocation();
    const {id} = location.state;
    const [recipeDetails , setRecipeDetails] = useState<RecipeDetailProps | null>(null);
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        (async()=>{
            console.log("id is ", id)
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information/?apiKey=14361166bc424879a33c750484d78d17`);
            console.log(response.data);
            setRecipeDetails(response.data);
            setLoading(false);
        })();
    }, [])

  const [isFavorited, setIsFavorited] = useState(false)



  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
  }



  const getDietBadges = () => {
    const badges = []
    if (recipeDetails?.vegetarian) badges.push({ label: 'Vegetarian', color: 'bg-green-100 text-green-700' })
    if (recipeDetails?.vegan) badges.push({ label: 'Vegan', color: 'bg-green-100 text-green-700' })
    if (recipeDetails?.glutenFree) badges.push({ label: 'Gluten Free', color: 'bg-blue-100 text-blue-700' })
    if (recipeDetails?.dairyFree) badges.push({ label: 'Dairy Free', color: 'bg-purple-100 text-purple-700' })
    if (recipeDetails?.veryHealthy) badges.push({ label: 'Very Healthy', color: 'bg-emerald-100 text-emerald-700' })
    return badges
  }

  const cleanSummary = (summary: string) => {
    return summary.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  }

  if(loading){
    return <div>loading..</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
     
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
       
        <div className="relative">
          <img
            src={recipeDetails?.image || "/placeholder.svg"}
            alt={recipeDetails?.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <button
            onClick={handleFavorite}
            className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <Heart 
              className={`w-6 h-6 ${
                isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
              }`} 
            />
          </button>
        </div>

       
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipeDetails?.title}</h1>
            
           
            <div className="flex flex-wrap gap-2 mb-4">
              {getDietBadges().map((badge, index) => (
                <Badge key={index} className={badge.color}>
                  {badge.label}
                </Badge>
              ))}
            </div>

           
            {(recipeDetails?.cuisines?.length ?? 0) > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{recipeDetails?.cuisines.join(', ')} Cuisine</span>
              </div>
            )}
          </div>

        
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{recipeDetails?.readyInMinutes}</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="flex items-center justify-center gap-2">
                 
                  <div className="text-2xl font-bold text-gray-900 min-w-[3rem]">{recipeDetails?.servings}</div>
                  
                </div>
                <div className="text-sm text-gray-600">Servings</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Award className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{Math.round(recipeDetails?.healthScore ?? 0)}</div>
                <div className="text-sm text-gray-600">Health Score</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Heart className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{recipeDetails?.aggregateLikes}</div>
                <div className="text-sm text-gray-600">Likes</div>
              </CardContent>
            </Card>
          </div>

        
          <div className="flex gap-4">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              Start Cooking
            </Button>
            <Button variant="outline" className="flex-1">
              Save Recipe
            </Button>
          </div>
        </div>
      </div>

      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About This Recipe</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            {cleanSummary(recipeDetails?.summary ?? "")}
          </p>
        </CardContent>
      </Card>

      
      <div className="grid lg:grid-cols-2 gap-8">
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-600" />
              Ingredients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recipeDetails?.extendedIngredients.map((ingredient, index) => (
                <div key={ingredient.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                    alt={ingredient.name}
                    className="w-12 h-12 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/single-ingredient.png'
                    }}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 capitalize">{ingredient.name}</div>
                    <div className="text-sm text-gray-600">{ingredient.original}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

       
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-blue-600" />
              Instructions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recipeDetails?.analyzedInstructions[0]?.steps.map((step, index) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{step.step}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-semibold text-gray-900">
              ${(recipeDetails?.pricePerServing ?? 0/ 100).toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">Per Serving</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <div className="text-lg font-semibold text-gray-900">
              {Math.round(recipeDetails?.healthScore ?? 0)}%
            </div>
            <div className="text-sm text-gray-600">Health Score</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-lg font-semibold text-gray-900">
              {recipeDetails?.dishTypes[0] || 'Main Dish'}
            </div>
            <div className="text-sm text-gray-600">Dish Type</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
