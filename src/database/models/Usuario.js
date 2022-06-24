const { stringify } = require("nodemon/lib/utils");

module.exports = (sequelize,DataTypes)=>{
    let alias = "Usuario";
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
        apellido: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        constraseña: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        imagenUsuario: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        idCategoria: dataTypes.BIGINT(10), 
    };
    let config = {
        tableName: "ueliculas",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config);

    /* Genre.associate = function(models) {
        Genre.hasMany(models.Movie,{
            as:"movies",
            foreignKey:"genre_id"
        })
    } */
    return Usuario
};