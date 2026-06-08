# Proyecto Arte 2026

Landing page estática para Proyecto Arte 2026.

## Apify

Para usar scripts que llaman a Apify, copiá tu token localmente en `.env`:

```env
APIFY_TOKEN=tu_token_de_apify
```

No subas `.env` al repositorio. El archivo `.env.example` muestra el formato esperado.

## Cloudflare Pages

Usá estos settings:

```txt
Build command: npm run build
Output directory: dist
```

El build copia solo los archivos estáticos necesarios a `dist/`, evitando subir `node_modules`.
