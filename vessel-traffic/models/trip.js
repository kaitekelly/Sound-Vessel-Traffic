module.exports = function(sequelize, DataTypes) {
    const Trip = sequelize.define("Trip", {
        sail_date_id: {
            type: DataTypes.DATEONLY
        },
        start_destination: {
            type: DataTypes.STRING
        },
        end_destination: {
            type:  DataTypes.STRING
        },
        start_sail_date: {
            type: DataTypes.DATE
        },
        end_sail_date: {
            type: DataTypes.DATE
        },
        // can i write this like this?
        PRIMARY_KEY: {
            sail_date_id
        }
    });
    return Trip;
}