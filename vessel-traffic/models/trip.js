

module.exports = function(seqelize, DataTypes) {
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
        PRIMAR_KEY: {
            type = sail_date_id
        }
    
    });
    return Trip;
}

// CREATE TABLE sailDate (
//     sail_date_id INT NULL,
//     start_destination VARCHAR(255) NOT NULL,
//     end_destination VARCHAR(255) NOT NULL,
//     start_sail_date INT NULL,
//     end_sail_date INT NULL,
//     PRIMARY KEY (sail_date_id)  
//   );