# Balão Match

Aplicativo protótipo em demonstração para um sistema de relacionamento brasileiro com dinâmica de salas e balões.

## Visão geral

Este projeto foi estruturado como uma aplicação frontend React + Vite, com foco em:

- identidade visual moderna e mobile-first
- cadastro e autenticação em fluxo guiado
- painel inicial com disponibilidade, salas, notificações e matches
- criação de sala e fluxo de avaliação com balões
- chat privado pós-match
- planos gratuito e VIP
- painel administrativo para indicadores e gestão

## Importante

Este repositório implementa a arquitetura funcional do produto em modo de demonstração. Não há integração real com:

- provedor de verificação de identidade
- pagamentos reais
- vídeo em tempo real externo
- anúncios de terceiros
- autenticação segura de produção

Esses pontos aparecem marcados como pendentes e prontos para integração quando houver credenciais e configuração externa.

## Tecnologias

- React
- TypeScript
- Vite

## Como executar

```bash
npm install
npm run dev
```

A aplicação estará disponível em http://localhost:3000.

## Estrutura principal

- `src/App.tsx`: fluxos, telas e lógica de demonstração
- `src/styles.css`: visual completo do app
- `vite.config.ts`: configuração do servidor

## Arquitetura proposta

A estrutura foi organizada para suportar a evolução do produto em fases:

1. onboarding e apresentação
2. cadastro e autenticação
3. perfil e disponibilidade
4. salas, convites e regras de matchmaking
5. balões, rodadas e decisões finais
6. match, chat, vouchers e benefícios
7. planos e pagamentos
8. admin, moderação e relatórios

## Próximos passos reais

- conectar autenticação e banco com Supabase
- implementar backend de salas e regras de negócios
- criar tabela de usuários, perfis, salas, balance e vouchers
- integrar KYC, pagamentos e push notifications
- preparar chamadas de vídeo com provedor externo
- publicar no painel administrativo com permissões por função

## Estado atual

- implementado: fluxos principais em interface funcional
- testado: build do projeto com `npm run build`
- pendente: integrações externas e persistência real no backend

## Observação

Este é um produto demonstrativo e não substitui a configuração real de produção, requisitos legais e integrações com provedores externos.

