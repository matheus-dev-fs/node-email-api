# Node Email API

API simples para envio de e-mails (ex.: formulário de contato) usando **Node.js + TypeScript** e **Nodemailer**.

Projeto desenvolvido durante o curso de Node.js da **B7Web** e posteriormente **aprimorado** com melhorias como: tratamento de erros mais robusto, tipagem mais forte, funções utilitárias e separação de responsabilidades.

## O que faz

- Endpoint de teste: `GET /ping`
- Endpoint para envio de e-mail: `POST /contact`

## Tecnologias

- Node.js + **TypeScript**
- **Express**
- **Nodemailer**
- **dotenv**
- **tsx** (dev com watch)

## Estrutura (resumo)

- `src/server.ts` – bootstrap do servidor
- `src/router/main.router.ts` – rotas (`/ping`, `/contact`)
- `src/controllers/email.controller.ts` – controller do endpoint de contato
- `src/utils/mail.util.ts` – validação/extração dos dados do e-mail (campos obrigatórios)
- `src/types` / `src/interfaces` – tipagem e contratos

## Variáveis de ambiente

Crie um `.env`:

```env
PORT=3000

SMTP_HOST=smtp.seuprovedor.com
SMTP_PORT=587
SMTP_USER=seu_usuario
SMTP_PASSWORD=sua_senha
```

## Como rodar

```bash
npm install
npm run dev
```

Servidor em: `http://localhost:${PORT}`

## Exemplo de request

### Enviar e-mail
```http
POST /contact
Content-Type: application/json

{
  "from": "seu_email@dominio.com",
  "to": "destino@dominio.com",
  "subject": "Contato via API",
  "text": "Mensagem em texto",
  "html": "<p>Mensagem em HTML</p>"
}
```

## Melhorias em relação ao projeto do curso

- Funções utilitárias para validação e extração do body
- Respostas de erro mais claras (ex.: corpo vazio, campo obrigatório faltando)
- Tipagem mais rigorosa (types/interfaces)
- Separação de responsabilidades (router/controller/utils)

## Créditos

Projeto base feito no curso de Node.js da [B7Web](https://b7web.com.br/). 