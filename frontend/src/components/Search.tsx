/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, X, Clock, Utensils, Leaf, Globe } from 'lucide-react'


interface FilterOption {
  id: string
  label: string
  icon?: React.ReactNode
}

interface FilterCategory {
  id: string
  label: string
  icon: React.ReactNode
  options: FilterOption[]
}

const filterCategories: FilterCategory[] = [
  {
    id: 'category',
    label: 'Category',
    icon: <Utensils className="w-4 h-4" />,
    options: [
      { id: 'breakfast', label: 'Breakfast' },
      { id: 'lunch', label: 'Lunch' },
      { id: 'dinner', label: 'Dinner' },
      { id: 'dessert', label: 'Dessert' },
      { id: 'snack', label: 'Snack' },
      { id: 'appetizer', label: 'Appetizer' }
    ]
  },
  {
    id: 'diet',
    label: 'Dietary',
    icon: <Leaf className="w-4 h-4" />,
    options: [
      { id: 'vegetarian', label: 'Vegetarian' },
      { id: 'vegan', label: 'Vegan' },
      { id: 'gluten-free', label: 'Gluten Free' },
      { id: 'dairy-free', label: 'Dairy Free' },
      { id: 'keto', label: 'Keto' },
      { id: 'paleo', label: 'Paleo' }
    ]
  },
  {
    id: 'time',
    label: 'Cook Time',
    icon: <Clock className="w-4 h-4" />,
    options: [
      { id: 'under-15', label: 'Under 15 min' },
      { id: '15-30', label: '15-30 min' },
      { id: '30-60', label: '30-60 min' },
      { id: 'over-60', label: 'Over 60 min' }
    ]
  },
  {
    id: 'cuisine',
    label: 'Cuisine',
    icon: <Globe className="w-4 h-4" />,
    options: [
      { id: 'italian', label: 'Italian' },
      { id: 'asian', label: 'Asian' },
      { id: 'mexican', label: 'Mexican' },
      { id: 'indian', label: 'Indian' },
      { id: 'mediterranean', label: 'Mediterranean' },
      { id: 'american', label: 'American' }
    ]
  }
]

export default function SearchAndFilters() {

  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const handleSearch = async(e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    console.log("filters applied" , activeFilters);
    // const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=14361166bc424879a33c750484d78d17&query=pasta&maxFat=25&number=2`)
  }

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  const clearAllFilters = () => {
    setActiveFilters([])
  }

  const getFilterLabel = (filterId: string) => {
    for (const category of filterCategories) {
      const option = category.options.find(opt => opt.id === filterId)
      if (option) return option.label
    }
    return filterId
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Search Bar */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for recipes, ingredients, or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <Button 
              type="button"
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6"
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFilters.length > 0 && (
                <Badge variant="secondary" className="ml-1 bg-green-100 text-green-700">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700 px-8">
              Search
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-gray-700">Active filters:</span>
            {activeFilters.map(filterId => (
              <Badge 
                key={filterId} 
                variant="secondary" 
                className="bg-green-100 text-green-700 flex items-center gap-1"
              >
                {getFilterLabel(filterId)}
                <button
                  onClick={() => toggleFilter(filterId)}
                  className="ml-1 hover:bg-green-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear all
            </Button>
          </div>
        </div>
      )}

      {/* Filter Panel */}
      {showFilters && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterCategories.map(category => (
                <div key={category.id} className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    {category.icon}
                    {category.label}
                  </div>
                  <div className="space-y-2">
                    {category.options.map(option => (
                      <label 
                        key={option.id}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={activeFilters.includes(option.id)}
                          onChange={() => toggleFilter(option.id)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Filter Actions */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <Button 
                variant="ghost" 
                onClick={clearAllFilters}
                className="text-gray-500"
              >
                Clear All Filters
              </Button>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    setShowFilters(false)
                    console.log('Applying filters:', activeFilters)
                  }}
                >
                  Apply Filters ({activeFilters.length})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Results Summary */}
      {(searchQuery || activeFilters.length > 0) && (
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="text-gray-600">
              {searchQuery && (
                <span>Showing results for <strong>"{searchQuery}"</strong></span>
              )}
              {searchQuery && activeFilters.length > 0 && <span> with </span>}
              {activeFilters.length > 0 && (
                <span><strong>{activeFilters.length}</strong> filter{activeFilters.length !== 1 ? 's' : ''} applied</span>
              )}
            </div>
            <div className="text-sm text-gray-500">
              Found 24 recipes
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
