
module.exports = function (sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
        sail_date_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        start_destination: {
            type: DataTypes.STRING
        },
        end_destination: {
            type: DataTypes.STRING
        },
        start_sail_date: {
            type: DataTypes.DATE
        },
        end_sail_date: {
            type: DataTypes.DATE
        },
    });

    // Trip.associate = function (models) {
    //     Trip.hasOne(models.Ship)
    // }
    return Trip;
}