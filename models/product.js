const { DataTypes } = require('sequelize');
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

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

sequelize.sync().then(() => {
    console.log('Product table created successfully!');
}).catch((error) => {
    console.error('Unable to create table:', error);
});

module.exports = Product;
