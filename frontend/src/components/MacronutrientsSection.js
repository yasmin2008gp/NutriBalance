import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { macronutrients } from "../data/mockData";

const MacronutrientsSection = () => {
  return (
    <section id="macronutrientes" className="py-16 bg-bg-subtle">
      <div className="container">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="display-medium mb-4">
            Os Três Pilares da Nutrição
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Entenda como cada macronutriente contribui para seu desempenho, 
            recuperação e saúde geral. Uma abordagem equilibrada é a chave para resultados duradouros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {macronutrients.map((macro, index) => (
            <Card 
              key={macro.id} 
              className="network-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <CardHeader>
                <div className="text-4xl mb-4 text-center">{macro.icon}</div>
                <CardTitle className="network-card-title text-center">
                  {macro.name}
                </CardTitle>
                <p className="network-card-content text-center">
                  {macro.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="heading-3 mb-3">Benefícios:</h4>
                  <ul className="space-y-2">
                    {macro.benefits.map((benefit, idx) => (
                      <li key={idx} className="body-medium flex items-center">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="heading-3 mb-3">Fontes Alimentares:</h4>
                  <div className="flex flex-wrap gap-2">
                    {macro.foods.map((food, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-bg-card">
                        {food}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-bg-card rounded-lg">
                  <h4 className="heading-3 mb-2">Recomendação Diária:</h4>
                  <p className="body-medium font-semibold text-brand-dark">
                    {macro.dailyAmount}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MacronutrientsSection;