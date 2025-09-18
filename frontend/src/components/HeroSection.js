import React from "react";
import { Button } from "./ui/button";
import { Heart, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-section pt-32 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="display-large mb-6">
            Nutrição Equilibrada para uma
            <span className="text-brand-primary"> Vida Saudável</span>
          </h1>
          
          <p className="body-large mb-8 max-w-2xl mx-auto">
            Descubra o poder de uma alimentação rica em macronutrientes essenciais. 
            Carboidratos complexos para energia, proteínas magras para recuperação 
            e gorduras saudáveis para o equilíbrio hormonal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="btn-cta"
              onClick={() => scrollToSection('receitas')}
            >
              Explorar Receitas
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => scrollToSection('macronutrientes')}
            >
              Aprender Mais
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="hero-feature" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="heading-3 mb-2">Energia Sustentável</h3>
              <p className="body-medium">
                Carboidratos complexos que fornecem energia duradoura para seus treinos e atividades diárias.
              </p>
            </div>

            <div className="hero-feature" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="heading-3 mb-2">Recuperação Muscular</h3>
              <p className="body-medium">
                Proteínas magras de alta qualidade para reparação e crescimento muscular eficiente.
              </p>
            </div>

            <div className="hero-feature" data-aos="fade-up" data-aos-delay="600">
              <div className="feature-icon">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="heading-3 mb-2">Equilíbrio Hormonal</h3>
              <p className="body-medium">
                Gorduras saudáveis essenciais para a produção de hormônios e absorção de vitaminas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;