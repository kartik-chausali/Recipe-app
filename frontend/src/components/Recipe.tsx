/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Star } from 'lucide-react'
import type { SampleRecipeProps } from "./RecipeGrid"
import { useNavigate } from "react-router-dom"

// interface RecipeCardProps {
//   id: string
//   image: string
//   name: string
//   description: string
//   cookTime: string
//   servings: number
//   rating: number
//   difficulty: 'Easy' | 'Medium' | 'Hard'
//   category: string
//   isLiked?: boolean
// }

export function RecipeCard({
  id,
  image,
  title,
  readyInMinutes,
  servings,
  aggregateLikes,
}: SampleRecipeProps) {
  
  // const [liked, setLiked] = useState(isLiked)
  const navigate = useNavigate();
  
 

  function handleReadMore(){
    navigate('/full' , {state: {id}});
  }

  

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay with category and like button */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
          <button
            onClick={handleLike}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                liked ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
              }`} 
            />
          </button>
        </div> */}

        {/* Difficulty badge */}
        {/* <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div> */}
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Recipe name */}
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-1 group-hover:text-green-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        {/* <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {description}
        </p> */}

        {/* Recipe stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{readyInMinutes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{servings} servings</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{aggregateLikes}</span>
          </div>
        </div>

        {/* Read more button */}
        <Button 
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
          onClick={handleReadMore}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  )
}
