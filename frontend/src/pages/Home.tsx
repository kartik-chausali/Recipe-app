/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Heart, Search } from 'lucide-react'
import NavBar from "@/components/NavBar"
import { RecipeGrid } from "@/components/RecipeGrid"
import { useRef } from "react"
import SearchAndFilters from "@/components/Search"


export default function Home() {
    const recipeSectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = ()=>{
        recipeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
       <NavBar/>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                🍳 Browse thousands of delicious options
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The recipe app for every home chef!
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Find delicious recipes, cook with confidence, and share your creations—all in one app!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8" onClick={handleScroll}>
               Explore 
              </Button>
            </div>

            {/* Customer Reviews */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white"></div>
              </div>
              <div className="text-sm">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 ml-2">5.0 (2.4k reviews)</span>
                </div>
                <p className="text-gray-500">Our happy customers</p>
              </div>
            </div>
          </div>

          {/* Right Side - App Mockup with SVG Elements */}
          <div className="relative">
            {/* Main Phone Mockup */}
            <div className="relative z-10 mx-auto w-80 h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-200 overflow-hidden">
              {/* Phone Header */}
              <div className="bg-orange-100 px-6 py-4 flex items-center justify-between">
                <span className="text-sm font-medium">09:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-gray-800 rounded-sm"></div>
                  <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                  <div className="w-6 h-3 border border-gray-800 rounded-sm"></div>
                </div>
              </div>

              {/* App Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-pink-600"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Samantha William</h3>
                    <p className="text-gray-600 text-sm">{"What's cooking today?"}</p>
                  </div>
                </div>

                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search here" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-orange-600">🍳</span>
                    </div>
                    <span className="text-xs text-gray-600">Breakfast</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-yellow-600">🍽️</span>
                    </div>
                    <span className="text-xs text-gray-600">Lunch</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600">🍷</span>
                    </div>
                    <span className="text-xs text-gray-600">Dinner</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600">🍿</span>
                    </div>
                    <span className="text-xs text-gray-600">Snack</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Trending Recipes</h4>
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-4 text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <h5 className="font-semibold mb-1">Mediterranean Bowl</h5>
                      <p className="text-sm opacity-90">Fresh & Healthy</p>
                      <div className="flex items-center mt-2 space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">25 min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">4 servings</span>
                        </div>
                      </div>
                    </div>
                    <Heart className="absolute top-4 right-4 w-5 h-5 fill-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🥗</span>
            </div>
            
            <div className="absolute top-20 -right-12 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">🍅</span>
            </div>

            <div className="absolute -bottom-4 -left-12 w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🥑</span>
            </div>

            <div className="absolute bottom-32 -right-8 w-18 h-18 bg-red-100 rounded-full flex items-center justify-center shadow-lg p-4">
              <span className="text-xl">🌶️</span>
            </div>

            {/* Servings Card */}
            <div className="absolute top-32 -right-16 bg-orange-200 rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-800">4</div>
                <div className="text-sm text-orange-700">Servings</div>
                <div className="text-xs text-orange-600">4 peoples</div>
              </div>
            </div>

            {/* Cooking Time Card */}
            <div className="absolute bottom-20 left-8 bg-green-200 rounded-2xl p-4 shadow-lg flex items-center space-x-3">
              <Clock className="w-8 h-8 text-green-700" />
              <div>
                <div className="text-sm text-green-700">Cooking time</div>
                <div className="text-lg font-bold text-green-800">30 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <SearchAndFilters/>
      <RecipeGrid featuredRef={recipeSectionRef}/>
    </div>
  )
}
