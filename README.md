# DBM_project

This is a project for the DBM course at the University of Santander (UDES).

## Authors

* **Santiago Alexander Ospina Pabón** - [sgarciaramos](https://github.com/SneatX)

## Folder structure

```
├── README.md
├── .env
├── .gitignore
├── server
│   ├── app.js
│   ├── package.json
│   ├── application
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── services
│   │   ├── validators
│   ├── domain
│   │   ├── models
│   │   ├── repositories
│   ├── infrastructure
│   │   ├── database
│   │   ├── middlewares
│   │   ├── server
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── main.jsx
│   │   ├── Router.jsx
│   ├── eslint.config.js
│   ├── package.json
│   ├── public
│   ├── tailwind.config.js
│   ├── vite.config.js
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/SneatX/DBM_project
```

2. Install the dependencies

```bash
cd client
npm install
```

```bash
cd server
npm install
```

3. Create a `.env` file in the root directory with the following content:

```bash
VITE_PORT=4000

EXPRESS_PORT=3000
EXPRESS_HOST="localhost"
EXPRESS_EXPIRE=10000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:3000/login/auth/google/calback

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_CALLBACK_URL=http://localhost:3000/login/auth/discord/calback

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_CALLBACK_URL=http://localhost:3000/login/auth/github/calback

MONGO_ACCESS="mongodb://"
MONGO_USER="admin"
MONGO_PWD="1878"
MONGO_HOST="localhost"
MONGO_PORT=27017
MONGO_DB_NAME="gestores"

KEY_SECRET=ClaveSecreta
```

En caso de necesitar los client_Id y client_secret de Google, Discord o Github, puedes encontrar las credenciales en la documentación de cada plataforma o solicitarlas a mi persona.

4. Run the server

```bash
cd server
npm run dev
```

5. Run the client

```bash
cd client
npm run dev
```



