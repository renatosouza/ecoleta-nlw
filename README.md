![Ilustração Ecoleta](https://user-images.githubusercontent.com/38081852/83580830-6f63e200-a513-11ea-9a27-0a109ec1e4d0.png)
<br>
<br>

Ecoleta foi uma aplicação criada durante o evento Next Level Week da [Rocketseat](https://rocketseat.com.br/). Trata-se de uma aplicação para cadastrar estabelecimentos como pontos de coleta de resíduos para estabelecimentos.


# Setup

Primeiro, faça o clone do repositório:

    $ git clone https://github.com/renatosouza/ecoleta-nlw.git

Vá até o backend:

    $ cd ecoleta-nlw/server

Instale as dependências:

    $ npm install

Depois gere o banco de dados com o knex:

    $ npx knex migrate:latest --knexfile knexfile.ts

Ou, como alternativa:

    $ npm run knex:migrate

Alguns itens para prepopular o banco de dados estão presentes no repositório, para fazer isso:

    $ npx knex seed:run --knexfile knexfile.ts

Ou, como alternativa:

    $ npm run knex:seed

Então inicie o backend:

    $ ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts

Ou, como alternativa:

    $ npm run dev


Agora, em outro terminal, vá até o frontend:

    $ cd ../web

Então, instale as dependências e inicie o frontend:

    $ npm install
    $ npm start