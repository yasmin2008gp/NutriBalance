import React from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="heading-3 mb-4 text-white">NutriBalance</h3>
            <p className="body-medium mb-4 text-gray-300">
              Transformando vidas através de uma nutrição equilibrada e consciente. 
              Sua jornada para uma vida mais saudável começa aqui.
            </p>
            <div className="flex items-center gap-2 text-brand-primary">
              <Heart className="w-5 h-5" />
              <span className="body-small">Feito com amor para sua saúde</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="heading-3 mb-4 text-white">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="body-medium text-gray-300 hover:text-brand-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('macronutrientes')}
                  className="body-medium text-gray-300 hover:text-brand-primary transition-colors"
                >
                  Macronutrientes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('receitas')}
                  className="body-medium text-gray-300 hover:text-brand-primary transition-colors"
                >
                  Receitas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('treinos')}
                  className="body-medium text-gray-300 hover:text-brand-primary transition-colors"
                >
                  Treinos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('hidratacao')}
                  className="body-medium text-gray-300 hover:text-brand-primary transition-colors"
                >
                  Hidratação
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="heading-3 mb-4 text-white">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="body-medium text-gray-300 hover:text-brand-primary transition-colors">
                  Calculadora de Calorias
                </a>
              </li>
              <li>
                <a href="#" className="body-medium text-gray-300 hover:text-brand-primary transition-colors">
                  Planos Alimentares
                </a>
              </li>
              <li>
                <a href="#" className="body-medium text-gray-300 hover:text-brand-primary transition-colors">
                  Dicas de Nutrição
                </a>
              </li>
              <li>
                <a href="#" className="body-medium text-gray-300 hover:text-brand-primary transition-colors">
                  Blog de Saúde
                </a>
              </li>
              <li>
                <a href="#" className="body-medium text-gray-300 hover:text-brand-primary transition-colors">
                  Acompanhamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-3 mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary" />
                <span className="body-medium text-gray-300">contato@nutribalance.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary" />
                <span className="body-medium text-gray-300">(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-primary" />
                <span className="body-medium text-gray-300">São Paulo, SP</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="body-medium font-semibold mb-3 text-white">Newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                  className="flex-1 p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none"
                />
                <button className="btn-primary px-4">
                  ✓
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-small text-gray-400">
              © 2024 NutriBalance. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="body-small text-gray-400 hover:text-brand-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="body-small text-gray-400 hover:text-brand-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="body-small text-gray-400 hover:text-brand-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;