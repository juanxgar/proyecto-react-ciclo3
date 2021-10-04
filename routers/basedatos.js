const { Client } = require('pg');
const Router = require('express-promise-router');
var keys = require('../confi/keys')


const client = new Client({
  connectionString: keys.postgresurl,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.get('/consultaUser', async (req, res) => {
  //const { email } = req.body
  const { rows } = await client.query(`SELECT * FROM usuario`);
  res.send(rows);
});

router.delete('/eliminarUsuario', async (req, res) => {
  const { email } = req.body;
  const { rows }=await client.query(
  `DELETE FROM usuario WHERE email='${email}'`);
  res.send('ELIMINADO');
  res.send(rows)
});