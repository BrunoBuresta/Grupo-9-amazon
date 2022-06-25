module.exports = (sequelize, dataTypes) => {
    let alias = 'Pelicula';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        idGenero:{
            type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
        },
        idActor: {type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: false
        }
    }
    let config = {
        tableName:'Pelicula',
        timestamps: false
    }
    const Movie = sequelize.define(alias,cols,config);
    return Movie
};