# Projeto Iniciantes

Este repositório contém um portal web voltado para estagiários iniciantes em tecnologia, com conteúdos sobre fundamentos de programação, lógica, ferramentas essenciais e dicas práticas para quem está começando na área.

## Funcionalidades
- Conteúdos introdutórios sobre lógica de programação
- Materiais e exercícios práticos
- Vídeos explicativos
- Agenda de workshops e eventos
- Depoimentos de outros estagiários

## Estrutura do Projeto

```
projeto_iniciantes/
├── iniciantes-app/          # Aplicação React principal
│   ├── src/                 # Código-fonte (componentes, páginas, utilitários)
│   ├── public/              # Arquivos estáticos
│   ├── package.json         # Dependências e scripts do app
│   └── ...
├── package.json             # Scripts utilitários para o monorepo
└── README.md                # Este arquivo
```

## Como rodar o projeto

1. Instale as dependências do app:
	```bash
	npm run install-app
	```
2. Inicie o servidor de desenvolvimento:
	```bash
	npm start
	```
	O app estará disponível em `http://localhost:3000`.

## Scripts principais

- `npm start` — Inicia o app em modo desenvolvimento
- `npm run build` — Gera a versão de produção
- `npm test` — Executa os testes
- `npm run install-app` — Instala as dependências do app

## Tecnologias utilizadas

- React 18 + TypeScript
- Tailwind CSS
- React Router DOM
- Testes com Testing Library

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com sugestões, correções ou melhorias.

---
Projeto educacional para iniciantes em tecnologia.