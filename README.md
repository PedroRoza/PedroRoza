<div align="center">

<img src="public/logo-without-bg.png" width="90" alt="Pedro Rosa logo" />

# Pedro Rosa — Portfólio

**Desenvolvedor Full Stack · Curitiba, BR**

[![Site](https://img.shields.io/badge/pedro--rosa.dev.br-7c0021?style=for-the-badge&logo=globe&logoColor=white)](https://pedro-rosa.dev.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-rosa-21061a202/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PedroRoza)
[![E-mail](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pedrosilva.rosa@hotmail.com)

</div>

---

## 👋 Sobre

Desenvolvedor full-stack com **7+ anos de experiência** em projetos de diferentes escalas — de sites institucionais a plataformas SaaS complexas. Já trabalhei em agências digitais e de forma independente para clientes de diversas áreas.

Atento a cada detalhe: desde a arquitetura do backend até a micro-animação que torna a interface mais fluida. Acredito que bom software é aquele que resolve problemas reais com elegância.

---

## 🛠️ Stack & Ferramentas

| Camada | Tecnologias |
|--------|-------------|
| **Frontend** | React · Next.js · Vue.js · Nuxt · Angular · WordPress |
| **Linguagens** | TypeScript · JavaScript · PHP · Java · Python |
| **Backend / BD** | Node.js · PL/pgSQL · MongoDB · MySQL |
| **DevOps** | Docker · AWS · Azure · CI/CD · Jenkins · IaC |
| **Design** | UI/UX · Figma · SCSS · Tailwind CSS |

---

## 🚀 Projetos em destaque

### [Sindfaz](https://sindfaz.org.br)
> Site institucional do Sindicato dos Trabalhadores do Ministério da Fazenda — área de notícias, comunicados e serviços para servidores.  
`React` `TS` `CSS` `UI/UX`

### [Calcula Civil](https://www.calculacivil.com.br)
> Plataforma de cálculo estrutural para engenheiros civis — dimensionamento, verificação de estruturas e relatórios técnicos.  
`Vue.js` `Node.js` `Firebase`

### [J8 Imobiliária](https://www.j8.com.br) · *Coopers Digital*
> Site completo para imobiliária com listagem de imóveis, busca avançada, integração de CRM e apresentação de empreendimentos.  
`Next.js` `TypeScript` `UI/UX`

### [MED-EL HearBetter](https://hearbetter.medel.com) · *Coopers Digital*
> Portal institucional da MED-EL para os mercados austríaco e alemão — líder global em implantes cocleares.  
`Wordpress` `Tailwindcss` `UI/UX`

---

## 📦 Este repositório

Código-fonte do meu portfólio pessoal, construído com:

- **React 19 + TypeScript** — tipagem estrita, componentes funcionais
- **Vite 8** — build ultra-rápido com HMR
- **Tailwind CSS v4** — tokens de design customizados
- **react-i18next + react-router-dom** — internacionalização PT-BR · EN · ES com roteamento por URL
- **Animações CSS** — `IntersectionObserver` + keyframes `fade-up`, `float`, `glow`
- **SEO completo** — JSON-LD (Person + WebSite), Open Graph, Twitter Card, hreflang, sitemap.xml

### Como rodar localmente

```bash
npm install
npm run dev
# http://localhost:5173
```

### Build de produção

```bash
npm run build
npm run preview
```

---

## 📬 Contato

Aberto a projetos freelance, oportunidades de trabalho e conversas sobre tecnologia.

- **E-mail:** [pedrosilva.rosa@hotmail.com](mailto:pedrosilva.rosa@hotmail.com)
- **WhatsApp:** [(41) 99782-4506](https://wa.me/5541997824506)
- **LinkedIn:** [pedro-rosa-21061a202](https://www.linkedin.com/in/pedro-rosa-21061a202/)

---

<div align="center">

Feito com React & Tailwind CSS — [pedro-rosa.dev.br](https://pedro-rosa.dev.br)

</div>


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
