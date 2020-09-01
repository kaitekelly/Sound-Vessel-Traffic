module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true, 
        },

        subId: {
            type: DataTypes.STRING,
            allowNull: false
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    console.log(User === sequelize.models.User);
    return User;
}