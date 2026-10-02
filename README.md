# Noto

Landing page estática com cabeçalho, apresentação e rodapé. Usa a fonte Quicksand hospedada localmente e layout responsivo.

Para visualizar, execute `python3 -m http.server 8080` na raiz e abra `http://localhost:8080`.

Para publicar, sirva `index.html`, `styles.css` e a pasta `assets` na raiz do domínio. Não há dependências nem etapa de build.

## EasyPanel

Configure a origem como `Allansevero/noto-sites-blogs`, branch `main`, contexto de build na raiz e método de build **Dockerfile**, com caminho `Dockerfile`.

O container serve a página com Nginx na **porta 80**. No domínio do serviço, use HTTP e porta interna 80; o EasyPanel gerencia o HTTPS externo.

Depois de salvar, clique em **Implantar**. O log deve mostrar o commit `fix: adiciona Dockerfile para deploy no EasyPanel` ou uma versão mais recente.

Para testar localmente com Docker:

```sh
docker build -t noto-site .
docker run --rm -p 8080:80 noto-site
```

Abra `http://localhost:8080`. O container inclui uma verificação de saúde da página inicial.

O botão **Começar** abre `https://notomed.tech`.

A fonte Quicksand é distribuída sob a SIL Open Font License, incluída em `assets/fonts/OFL.txt`.
