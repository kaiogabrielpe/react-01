# react-01 — Mini Bio

Projeto React + Next.js seguindo o layout do exercício:

```
app/
  page.js          -> monta a página, renderiza <Profile />
components/
  Profile.js       -> card externo "Mini Bio" (renderiza <MiniBio />)
  MiniBio.js       -> card interno: foto, nome e frase sobre você
```

Edite `components/Profile.js` para trocar o nome e a frase que são passados
como props para `MiniBio`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```
