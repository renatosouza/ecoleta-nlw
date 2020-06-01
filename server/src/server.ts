import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Renato',
        'Felipe',
        'Valeska',
        'Junin'
    ]);
});

app.listen(3333);