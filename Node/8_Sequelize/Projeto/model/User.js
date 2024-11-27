const { DataTypes } = require('sequelize'); //DataTypes é uma coleção de tipos de dados que o sequelize oferece para definir os campos de modelo.

const db = require('../db/conn');   //Conectando com o banco.


//Criando as colunas do banco de dados
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation : {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.DATE,
        require: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
});

module.exports = User