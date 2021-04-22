// chama as dependencies
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 

// define a variavel app para o express
const app = express();

//falando para express ir no corpo da req, cconverter o objeto em json
app.use(cors(/*{
    oring :'http://meuapp.com';
}*/));
app.use(express.json());
app.use(routes);

//define a porta para a aplicação
app.listen(3333);




/**
 *Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */
 

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Paramêtros nomeados enviados na rota após o "?" ( Filtros, Paginação)
  * Route Params: Paramêtros utilizados para identificar recursos.
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos.
  */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...  *  
  */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where('')
  */

