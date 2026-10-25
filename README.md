# NLW Valoriza

**API educacional de elogios entre usuários, com autenticação, tags e permissões.**

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express)
![TypeORM](https://img.shields.io/badge/TypeORM-0.2-orange)
![SQLite](https://img.shields.io/badge/SQLite-003b57?logo=sqlite&logoColor=white)

## Sobre o projeto

O **NLW Valoriza** é uma API desenvolvida como exercício da [Rocketseat](https://www.rocketseat.com.br/), utilizando Node.js e TypeScript para praticar cadastro de usuários, autenticação e registro de elogios.

Os dados são armazenados em SQLite por meio do TypeORM. A API disponibiliza endpoints HTTP para consumo por clientes externos; o repositório não contém uma interface web.

## Funcionalidades presentes no código

- Cadastro e listagem de usuários.
- Autenticação por e-mail e senha com token JWT.
- Cadastro e listagem de tags.
- Envio de elogios entre usuários.
- Consulta de elogios enviados e recebidos.
- Middleware de autenticação e verificação de privilégios administrativos.

### Rotas principais

| Método | Rota | Função |
| --- | --- | --- |
| `POST` | `/users` | Cadastrar usuário |
| `POST` | `/login` | Autenticar |
| `GET` | `/users` | Listar usuários autenticados |
| `POST` | `/tags` | Criar tag (requer perfil administrador) |
| `GET` | `/tags` | Listar tags |
| `POST` | `/compliments` | Registrar elogio |
| `GET` | `/users/compliments/send` | Consultar elogios enviados |
| `GET` | `/users/compliments/receive` | Consultar elogios recebidos |

Os requisitos de autenticação e os formatos dos corpos das requisições devem ser consultados em [`src/routes.ts`](src/routes.ts) e nos controladores/serviços correspondentes.

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| Node.js e Express 4 | Servidor e rotas HTTP |
| TypeScript | Tipagem |
| TypeORM 0.2 | Mapeamento de entidades e acesso a dados |
| SQLite | Banco de dados local |
| bcryptjs | Verificação de senhas |
| jsonwebtoken | Autenticação JWT |

## Estrutura do repositório

- `src/controllers/` — Controladores HTTP.
- `src/services/` — Regras de aplicação.
- `src/entities/` e `src/repositories/` — Modelos e repositórios do TypeORM.
- `src/middlewares/` — Controle de acesso.
- `src/database/migrations/` — Migrações existentes.
- `src/routes.ts` — Definição dos endpoints.
- `src/server.ts` — Inicialização da API.
- `ormconfig.json` — Configuração do SQLite e TypeORM.

## Executando localmente

**Pré-requisitos:** Node.js, Yarn Classic (o projeto possui `yarn.lock`), e um ambiente compatível com as dependências antigas.

```bash
git clone https://github.com/Daniel-M30/nlw-valoriza.git
cd nlw-valoriza
yarn install --frozen-lockfile
yarn dev
```

Conforme [`src/server.ts`](src/server.ts), o servidor escuta na porta `3000`. O projeto possui um arquivo SQLite versionado e migrações no diretório `src/database/migrations/`; confira o estado do banco de desenvolvimento antes de executá-las.

O comando de desenvolvimento está configurado, mas a instalação e a execução não foram validadas nesta revisão.

## Estado atual e cuidados de segurança

Este repositório é um **projeto de aprendizado**, não uma implementação verificada para produção.

- Há um segredo de assinatura JWT definido diretamente no código; ele precisa ser substituído por uma configuração segura antes de qualquer implantação.
- O arquivo `src/database/database.sqlite` está versionado. Revise seu conteúdo antes de reutilizá-lo ou divulgá-lo com dados reais.
- As dependências são antigas e precisam de revisão antes de expor a API publicamente.
- Não foram encontrados scripts de testes automatizados ou CI no repositório.

## Créditos e licenciamento

Projeto educacional da [Rocketseat](https://www.rocketseat.com.br/). O `package.json` declara a licença MIT, mas não há arquivo `LICENSE` na raiz; a informação de licenciamento deve ser revisada.

## Autor

Desenvolvido por [Daniel Monteiro](https://github.com/Daniel-M30).
