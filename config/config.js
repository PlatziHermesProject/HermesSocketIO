let cfg = {
  port: process.env.PORT || 3001,
  db: {
    host: process.env.DB_HOST || '3.237.100.216',
    port: parseInt(`${process.env.DB_PORT}`, 10) || 9432,
    user: process.env.DB_USER || 'hermes',
    database: process.env.DB_NAME || 'hermes',
    password: process.env.DB_PASS || 'Hermes.2020'
  },
};

module.exports.cfg = {...cfg } ;
