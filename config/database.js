const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myapp', 'admin', '12345678', {
    host: 'aws-db.cnagg6qoa4bc.ap-south-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;
