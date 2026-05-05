Como otimizar imagens localmente

1) Instale dependências (na pasta `paginas-web/cury`):

```bash
npm install sharp glob
```

2) Execute o script de otimização:

```bash
node tools/optimize-images.js
```

Isso irá gerar versões otimizadas em `paginas-web/cury/optimized/` (JPEG redimensionado + WEBP). Ajuste as larguras e qualidade no script conforme necessário.
