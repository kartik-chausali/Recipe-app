/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChefHat } from "lucide-react";


export default function NavBar(){

    return <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-gray-900">Recify</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Product</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Recipes</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Categories</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
        


      </nav>

}