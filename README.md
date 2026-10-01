# Noto

Landing page em React + Vite, com os assets locais e a fonte Schibsted Grotesk.

## Desenvolvimento

Execute `npm install` e `npm run dev`. Para gerar a versão de produção, execute `npm run build`.

## EasyPanel

Crie um serviço do tipo App, configure este projeto como fonte e selecione a compilação por Dockerfile. Use a porta interna **80**. Na aba de domínios, adicione seu domínio e ative HTTPS. O Dockerfile compila o React e serve os arquivos com Nginx.

## Layout e carregamento

Layout fluido com ajustes para celulares pequenos, tablets, computadores e orientação horizontal. Menu adaptado até 820 px, alvos de toque de no mínimo 44 px e modal com rolagem interna, bloqueio da página ao fundo e navegação por teclado.

O mascote usa WebP com versões de 320 e 640 px, selecionadas pelo navegador conforme o tamanho e a densidade da tela. A fonte variável foi convertida em WOFF2 com caracteres latinos, incluindo português, e carregada antecipadamente. Os originais permanecem nas pastas assets e fonts.

No EasyPanel, Nginx comprime HTML/CSS/JavaScript e mantém os assets versionados em cache por um ano. O HTML exige revalidação para receber atualizações. Essas configurações entram em vigor ao publicar uma nova imagem Docker.

Validação local: compilação de produção e verificações em navegador nos tamanhos 320×568, 360×800, 390×844, 600×960, 768×1024, 820×1180, 1024×768, 1440×900, 2560×1440 e 844×390. As verificações cobrem largura da página, sobreposição dos cartões, carregamento da fonte, abertura/fechamento do menu e limites do modal. O desempenho real da VPS deve ser medido após a publicação.

## Comportamento do botão

O botão “Conhecer o Noto” abre uma explicação local. Substitua esse comportamento pelo destino comercial quando ele estiver definido. Não há backend, login, formulário ou integração com emissão de notas nesta landing page.
