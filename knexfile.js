module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///games',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'

  }
};

