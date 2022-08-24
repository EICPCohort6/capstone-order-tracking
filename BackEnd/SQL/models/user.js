const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', 
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,  
        },
        password: DataTypes.STRING,
        // createdAt: {
        //     // type: DataTypes.DATATIME,
        //     type: 'TIMESTAMP',
        //     defaultValue: DataTypes.NOW,
        // },
        // updatedAt: {
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.NOW,
        //     onUpdate : DataTypes.NOW,
        // },
        access_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        csr_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
    },
    {
        freezeTableName: true,
    }
    );
    return user;
}