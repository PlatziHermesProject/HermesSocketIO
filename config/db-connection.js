const { Client } = require('pg');
const { cfg } = require('./config');

const cnn = new Client({
    host: cfg.db.host,
    port: cfg.db.port,
    user: cfg.db.user,
    database: cfg.db.database,
    password: cfg.db.password
})

function connectDB() {
    cnn.connect(err => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('Connected to BD')
      }
    });
  }

  /**
   * Method return rows from database
   * @param query Query string to execute on database
   */
  async function executeQuery(query, params) {
    return await (await cnn.query(query,params)).rows[0];
  }

  /** 
   * Execute query without params
   * @param query
   */
  async function executeQueryWithoutParams(query) {
    return await (await cnn.query(query)).rows[0];
  }


module.exports = {
    connectDB,
    executeQuery,
    executeQueryWithoutParams,
    cnn
}
