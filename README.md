# Vidros Pro - Vidraçaria Premium em Porto Alegre

Este projeto é um website institucional de alta performance e alto padrão desenvolvido para a **Vidros Pro**, uma vidraçaria especializada em projetos sob medida na região metropolitana de Porto Alegre, RS.

O site foi estruturado com foco em **conversão premium (CRO)**, **SEO Local avançado** e **performance de carregamento (Core Web Vitals)**.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Astro (v4)](https://astro.build/) - Geração estática e híbrida de altíssimo desempenho.
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) - Design responsivo e utilitários modernos.
- **Deploy:** Habilitado para SSR na [Vercel](https://vercel.com/) via `@astrojs/vercel`.
- **Processamento de Imagens:** [Sharp](https://sharp.pixelplumbing.com/) - Compressão avançada e conversão para formatos web eficientes.
- **Formulários:** Integração AJAX com [FormSubmit.co](https://formsubmit.co/) para captação de leads.

---

## 📈 Recursos e Otimização SEO

### ⚡ 1. Performance Ultra-Rápida (PageSpeed)
- **Otimização de Imagens:** Todas as fotos do site (serviços, portfólio e logotipo) foram re-comprimidas usando o processador gráfico *sharp*, reduzindo o peso original das mídias em mais de **83% a 89%** (sem perda visual perceptível).
- **Logotipo Principal:** Otimizado de **1.02 MB** para apenas **113 KB**.
- **Astro Assets & Static Output:** Carregamento de HTML leve, limpo de códigos bloqueantes, garantindo pontuações excelentes no Google PageSpeed Insights.

### 📍 2. SEO Local & Presença Digital ("Vidraçaria em Porto Alegre")
- **Palavras-Chave Foco:** Estruturação semântica de conteúdo com repetição e densidade ideal para a palavra-chave *"Vidraçaria em Porto Alegre"* e termos relacionados (*"vidros em Porto alegre"*, *"telefone de vidraçaria"*, *"vidraçaria perto de mim"*).
- **Hierarquia H1-H3:** Título principal H1 único na Home focado no termo exato, seguido por cabeçalhos H2 estruturais e de cauda longa.
- **Dados Estruturados (JSON-LD):** Configuração completa do esquema `LocalBusiness` com endereço comercial físico real em Porto Alegre, horário de funcionamento semanal/sábado e coordenadas geográficas precisas (`-30.043513, -51.226871`) para impulsionar a indexação no Google Maps (Local Pack).
- **Indexabilidade:** Configuração automática de `robots.txt` e geração dinâmica de `sitemap-index.xml` a cada build do Astro.

### 💼 3. Páginas e Conteúdo
- **15 Páginas Dinâmicas de Serviços:** Subpáginas exclusivas para cada categoria (Box, Coberturas, Espelhos, etc.) ampliando a captação de buscas específicas de cauda longa.
- **Formulário de Contato Assíncrono:** Envio instantâneo via AJAX sem redirecionamentos chatos, com animações de feedback (*spinner* de carregamento, mensagens de sucesso/erro e scroll suave).

---

## 🚀 Como Executar o Projeto Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse o servidor em [http://localhost:4321/](http://localhost:4321/).

3. **Construa para produção:**
   ```bash
   npm run build
   ```

---

## 🌐 Deploy em Produção

O projeto está configurado para deploy automático na **Vercel** no modo Serverless (SSR).
Para efetuar o deploy local manual:
1. Certifique-se de ter a Vercel CLI instalada (`npm install -g vercel`).
2. Execute o comando `vercel` no terminal para autenticar e publicar.

---

**Status do Projeto:** Pronto para Produção (Ready for Production) 🚀
