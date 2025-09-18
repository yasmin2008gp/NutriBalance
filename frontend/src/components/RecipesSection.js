import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, Flame } from "lucide-react";
import { recipes } from "../data/mockData";

const RecipesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const categories = ["Todos", "Carboidratos", "Proteínas", "Gorduras"];

  const filteredRecipes = selectedCategory === "Todos" 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const RecipeModal = ({ recipe, onClose }) => {
    if (!recipe) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="heading-2">{recipe.name}</h3>
              <Button variant="ghost" onClick={onClose} className="text-2xl">×</Button>
            </div>
            
            <img 
              src={recipe.image} 
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-brand-dark" />
                <p className="body-small">{recipe.prepTime}</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-brand-dark" />
                <p className="body-small">{recipe.servings} porções</p>
              </div>
              <div className="text-center">
                <Flame className="w-6 h-6 mx-auto mb-2 text-brand-dark" />
                <p className="body-small">{recipe.calories} kcal</p>
              </div>
              <div className="text-center">
                <div className="w-6 h-6 mx-auto mb-2 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">M</span>
                </div>
                <p className="body-small">C{recipe.macros.carbs}g P{recipe.macros.protein}g G{recipe.macros.fat}g</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="heading-3 mb-3">Ingredientes:</h4>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="body-medium flex items-center">
                    <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="heading-3 mb-3">Modo de Preparo:</h4>
              <ol className="space-y-3">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx} className="body-medium flex">
                    <span className="bg-brand-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="receitas" className="py-16">
      <div className="container">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="display-medium mb-4">
            Receitas Balanceadas
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Descubra receitas deliciosas e nutritivas, organizadas por macronutrientes. 
            Cada receita inclui informações detalhadas sobre calorias e composição nutricional.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "btn-primary" : "btn-secondary"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <Card 
              key={recipe.id} 
              className="network-card cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                <Badge className="absolute top-4 left-4 bg-brand-primary text-white">
                  {recipe.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="network-card-title">
                  {recipe.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-dark" />
                    <span className="body-small">{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-brand-dark" />
                    <span className="body-small">{recipe.calories} kcal</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  <div>
                    <p className="caption">Carb</p>
                    <p className="body-small font-semibold">{recipe.macros.carbs}g</p>
                  </div>
                  <div>
                    <p className="caption">Prot</p>
                    <p className="body-small font-semibold">{recipe.macros.protein}g</p>
                  </div>
                  <div>
                    <p className="caption">Gord</p>
                    <p className="body-small font-semibold">{recipe.macros.fat}g</p>
                  </div>
                </div>

                <Button className="btn-secondary w-full">
                  Ver Receita Completa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </section>
  );
};

export default RecipesSection;