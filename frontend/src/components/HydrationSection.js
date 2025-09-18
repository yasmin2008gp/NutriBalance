import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Droplets, Timer, RefreshCw } from "lucide-react";
import { hydrationTips } from "../data/mockData";

const HydrationSection = () => {
  return (
    <section id="hidratacao" className="py-16">
      <div className="container">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <Droplets className="w-16 h-16 text-brand-primary" />
          </div>
          <h2 className="display-medium mb-4">
            Hidratação: O Quarto Pilar
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            A água é essencial para todas as funções corporais. Descubra como manter 
            uma hidratação adequada para potencializar seus resultados na nutrição e nos treinos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {hydrationTips.map((tip, index) => (
            <Card 
              key={tip.id} 
              className="network-card text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{tip.icon}</div>
                <CardTitle className="network-card-title">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="network-card-content">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hydration Calculator Section */}
        <div className="bg-bg-card rounded-3xl p-8 mb-12" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="heading-2 mb-4">Calculadora de Hidratação</h3>
            <p className="body-large">
              Descubra sua necessidade diária de água baseada no seu peso corporal
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="body-medium font-semibold mb-2 block">Seu peso (kg):</label>
              <input 
                type="number" 
                placeholder="Ex: 70"
                className="w-full p-4 border-2 border-border-light rounded-2xl focus:border-brand-primary focus:outline-none"
                id="weight-input"
                onChange={(e) => {
                  const weight = parseFloat(e.target.value);
                  const waterNeeded = Math.round(weight * 35);
                  const result = document.getElementById('water-result');
                  if (result && !isNaN(waterNeeded)) {
                    result.textContent = `${waterNeeded}ml por dia`;
                    result.className = 'heading-2 text-brand-dark mt-4';
                  }
                }}
              />
            </div>
            
            <div className="text-center">
              <p className="body-medium mb-2">Sua necessidade diária:</p>
              <p id="water-result" className="body-medium text-gray-500">
                Digite seu peso para calcular
              </p>
            </div>
          </div>
        </div>

        {/* Daily Hydration Schedule */}
        <div className="bg-bg-subtle rounded-3xl p-8" data-aos="fade-up" data-aos-delay="200">
          <h3 className="heading-2 text-center mb-8">Cronograma Ideal de Hidratação</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 mb-4">
                <Timer className="w-8 h-8 text-brand-dark mx-auto mb-2" />
                <h4 className="heading-3 mb-2">Ao Acordar</h4>
                <p className="body-medium text-brand-primary font-semibold">500ml</p>
              </div>
              <p className="body-small">Reidrata após o sono</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 mb-4">
                <Droplets className="w-8 h-8 text-brand-dark mx-auto mb-2" />
                <h4 className="heading-3 mb-2">Manhã/Tarde</h4>
                <p className="body-medium text-brand-primary font-semibold">200ml/hora</p>
              </div>
              <p className="body-small">Hidratação constante</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 mb-4">
                <RefreshCw className="w-8 h-8 text-brand-dark mx-auto mb-2" />
                <h4 className="heading-3 mb-2">Pré-Treino</h4>
                <p className="body-medium text-brand-primary font-semibold">500ml</p>
              </div>
              <p className="body-small">2h antes do exercício</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 mb-4">
                <Droplets className="w-8 h-8 text-brand-dark mx-auto mb-2" />
                <h4 className="heading-3 mb-2">Pós-Treino</h4>
                <p className="body-medium text-brand-primary font-semibold">150%</p>
              </div>
              <p className="body-small">Do peso perdido em suor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydrationSection;