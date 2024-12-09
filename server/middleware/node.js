const sql = require('mssql');

const config = {
    user: 'username',
    password: 'password',
    server: 'localhost',
    database: 'YourDatabaseName'
};

sql.connect(config).then(pool => {
    return pool.request().query('SELECT * FROM YourTable');
}).then(result => {
    console.dir(result);
}).catch(err => {
    console.error('SQL error', err);
});
