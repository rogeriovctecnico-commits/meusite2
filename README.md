# RVC Assessoria - Landing Page

[![Live Preview](https://img.shields.io/badge/Live-Preview-brightgreen)](http://127.0.0.1:8080) _local dev_

**Deploy online:** https://seuusername.github.io/meusite2 _(após push gh-pages)_

## 🚀 Sobre

Landing page moderna e responsiva para **RVC Assessoria** - consultoria especializada em planos de saúde na **Grande Vitória (ES)**.

**Recursos:**

- ✅ Design responsivo (mobile-first)
- ✅ Animações fade-up suaves ao scroll
- ✅ Formulário de cotação → WhatsApp (27) 99527-7207
- ✅ Máscara telefone automática
- ✅ 12 operadoras parceiras
- ✅ Depoimentos reais (Google Reviews)
- ✅ SEO otimizado (meta tags, schema-ready)

## 📱 Demo

```
npx live-server .
```

Abre em http://127.0.0.1:8080

## 🛠️ Tecnologias

```
HTML5 | CSS3 (Custom Properties, Grid, Flexbox) | Vanilla JS (IntersectionObserver)
```

- **Zero frameworks** - 100% vanilla, leve (~15KB total)
- **Google Fonts**: Fraunces + DM Sans
- **Sem dependências**

## 📂 Estrutura

```
├── index.html     # HTML semântico
├── style.css      # CSS modularizado (500+ linhas)
├── script.js      # JS: animações, form, máscara (60 linhas)
├── README.md      # Este arquivo
└── TODO.md        # Progresso desenvolvimento
```

## 🎯 Funcionalidades

### Form Cotação

- Validação HTML5
- Máscara telefone: (27) 99999-9999
- Submit → WhatsApp pré-preenchido
- Feedback visual "Enviando..." → "Enviada ✓"

### Animações

- Fade-up em seções (IntersectionObserver)
- Hover cards/buttons
- Pulse WhatsApp flutuante

### Responsivo

- Mobile, tablet, desktop
- Clamp() para tipografia fluida

## 👥 Público-Alvo

- Pessoa Física/Familiar
- MEI/Autônomo
- Empresarial PME (2-99 vidas)
- Grande Vitória: Vitória, Vila Velha, Serra, Cariacica, Viana, Guarapari, Fundão

## 📊 Operadoras Parceiras

```
Medsenior | Best Senior | Unimed | Amil | SulAmérica
Bradesco Saúde | Porto Seguro | Hapvida | NotreDame
São Bernardo | Bluzz Saúde
```

## 🔧 Deploy

### Vercel/Netlify

```
git init
git add .
git commit -m "Initial landing page"
vercel --prod
```

### GitHub Pages

1. Push para `gh-pages` branch
2. Settings → Pages → Deploy from branch `main`

### Static Hosting

Copie `index.html`, `style.css`, `script.js` para qualquer servidor HTTP.

## 📈 Melhorias Sugeridas

- [ ] Form backend (Netlify Forms, Formspree)
- [ ] Favicon
- [ ] GA4/Google Tag Manager
- [ ] PWA (manifest.json)
- [ ] Lazy loading imagens (se adicionar)

## 📞 Contato

**Rogério Vieira** - Corretor ANS  
WhatsApp: [Cotação Grátis](https://wa.me/5527995277207)  
Grande Vitória - ES

---

**Feito com ❤️ para converter visitantes em leads!**
