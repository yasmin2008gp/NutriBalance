# 🥗 NutriBalance - Site de Nutrição Equilibrada

Um site completo focado em nutrição equilibrada e rica em macronutrientes, combinando receitas saudáveis, treinos complementares e guias de hidratação.

![NutriBalance](https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop)

## 🌟 Características Principais

- **Nutrição Equilibrada**: Foco em macronutrientes essenciais (carboidratos complexos, proteínas magras, gorduras saudáveis)
- **Receitas Categorizadas**: Organizadas por tipos de macronutrientes com informações nutricionais completas
- **Treinos Complementares**: Exercícios planejados para maximizar os benefícios nutricionais
- **Calculadora de Hidratação**: Ferramenta personalizada baseada no peso corporal
- **Design Responsivo**: Interface moderna seguindo diretrizes de design profissionais

## 🍎 Alimentos em Destaque

### Carboidratos Complexos
- Aveia, Batata-doce, Quinoa, Arroz integral, Feijão

### Proteínas Magras  
- Frango, Ovos, Peixe, Leguminosas, Tofu

### Gorduras Saudáveis
- Azeite, Abacate, Castanhas, Salmão, Sementes

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Library JavaScript para interfaces de usuário
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/UI** - Componentes de interface modernos e acessíveis
- **Lucide React** - Ícones SVG otimizados
- **React Router Dom** - Roteamento para aplicações React
- **Axios** - Cliente HTTP para requisições API

### Backend
- **FastAPI** - Framework web moderno e rápido para APIs
- **MongoDB** - Banco de dados NoSQL
- **Motor** - Driver assíncrono do MongoDB para Python
- **Pydantic** - Validação de dados e serialização
- **Python-dotenv** - Gerenciamento de variáveis de ambiente

### Ferramentas de Desenvolvimento
- **AOS (Animate On Scroll)** - Biblioteca de animações
- **CRACO** - Configuração customizada do Create React App

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- Python 3.8+
- MongoDB 4.4+
- Yarn ou npm

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/nutribalance.git
cd nutribalance
```

2. **Configurar o Backend**
```bash
cd backend
pip install -r requirements.txt
```

3. **Configurar o Frontend**
```bash
cd frontend
yarn install
# ou
npm install
```

4. **Configurar Variáveis de Ambiente**

Crie um arquivo `.env` no diretório `backend/`:
```env
MONGO_URL=mongodb://localhost:27017/nutribalance
DB_NAME=nutribalance
```

Crie um arquivo `.env` no diretório `frontend/`:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

5. **Executar o projeto**

**Backend (Terminal 1):**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Frontend (Terminal 2):**
```bash
cd frontend
yarn start
# ou
npm start
```

O site estará disponível em `http://localhost:3000`

## 📱 Funcionalidades

### 🏠 Homepage
- Hero section com apresentação da filosofia nutricional
- Três pilares da nutrição (macronutrientes)
- Navegação suave entre seções

### 🍽️ Receitas
- Filtros por categoria de macronutrientes
- Informações nutricionais detalhadas (calorias, macros)
- Modais com instruções completas de preparo
- Tempo de preparo e número de porções

### 💪 Treinos
- Exercícios complementares à nutrição
- Diferentes níveis de dificuldade
- Informações sobre equipamentos e queima calórica
- Instruções detalhadas para cada exercício

### 💧 Hidratação
- Calculadora personalizada baseada no peso
- Cronograma ideal de hidratação
- Dicas e orientações sobre hidratação
- Sinais de desidratação e alternativas saudáveis

## 🎨 Design System

O projeto segue diretrizes profissionais de design com:

- **Paleta de Cores**: Verde natural (#D3FF62), Dark Green (#004534), fundos claros
- **Typography**: Sistema responsivo com clamp() para adaptação automática
- **Componentes**: Botões pill-shaped, cards com hover effects
- **Animações**: Transições suaves e micro-interações
- **Responsividade**: Design mobile-first

## 📄 Estrutura do Projeto

```
nutribalance/
├── frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── data/            # Mock data e constantes
│   │   └── hooks/           # Custom hooks
│   ├── public/              # Arquivos estáticos
│   └── package.json         # Dependências do frontend
├── backend/                 # API FastAPI
│   ├── server.py           # Servidor principal
│   ├── requirements.txt    # Dependências do backend
│   └── .env                # Variáveis de ambiente
├── README.md               # Documentação do projeto
├── LICENSE                 # Licença do projeto
└── .gitignore             # Arquivos ignorados pelo Git
```

## 🤝 Como Contribuir

1. Fork este repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📋 Roadmap

- [ ] Sistema de usuários e autenticação
- [ ] Calculadora de IMC e calorias
- [ ] Planos alimentares personalizados
- [ ] Blog com dicas de nutrição
- [ ] Sistema de favoritos para receitas
- [ ] Acompanhamento de progresso
- [ ] Integração com APIs de nutrição
- [ ] Modo offline com PWA

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para promover uma alimentação saudável e equilibrada.

---

## 🌟 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400/D3FF62/004534?text=NutriBalance+Homepage)

### Receitas
![Receitas](https://via.placeholder.com/800x400/FAFAFF/004534?text=Receitas+Balanceadas)

### Treinos
![Treinos](https://via.placeholder.com/800x400/EDEDFE/004534?text=Treinos+Complementares)

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**