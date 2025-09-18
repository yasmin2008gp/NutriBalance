import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <a href="#" className="network-logo">
          NutriBalance
        </a>
        
        <nav className="network-nav hidden md:flex">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="network-nav-link"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('macronutrientes')}
            className="network-nav-link"
          >
            Macronutrientes
          </button>
          <button 
            onClick={() => scrollToSection('receitas')}
            className="network-nav-link"
          >
            Receitas
          </button>
          <button 
            onClick={() => scrollToSection('treinos')}
            className="network-nav-link"
          >
            Treinos
          </button>
          <button 
            onClick={() => scrollToSection('hidratacao')}
            className="network-nav-link"
          >
            Hidratação
          </button>
        </nav>

        <Button 
          className="btn-primary md:inline-flex hidden"
          onClick={() => scrollToSection('receitas')}
        >
          Ver Receitas
        </Button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden">
          <nav className="flex flex-col gap-4 p-6">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="network-nav-link text-left"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('macronutrientes')}
              className="network-nav-link text-left"
            >
              Macronutrientes
            </button>
            <button 
              onClick={() => scrollToSection('receitas')}
              className="network-nav-link text-left"
            >
              Receitas
            </button>
            <button 
              onClick={() => scrollToSection('treinos')}
              className="network-nav-link text-left"
            >
              Treinos
            </button>
            <button 
              onClick={() => scrollToSection('hidratacao')}
              className="network-nav-link text-left"
            >
              Hidratação
            </button>
            <Button 
              className="btn-primary mt-4"
              onClick={() => scrollToSection('receitas')}
            >
              Ver Receitas
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;