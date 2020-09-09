module.exports = function (sequelize, DataTypes) {
  let Trip = sequelize.define("Trip");
  var Ship = sequelize.define("Ship", {

    main_id: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
      foreignKey: true
      // primaryKey: true
    },
    ship_id: {
      type: DataTypes.INTEGER
    },
    imo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mmsi: {
      type: DataTypes.INTEGER
    },
    ship_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    callsign: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ship_type_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING
    },
    eta: {
      type: DataTypes.DATE
    },
    ship_length: {
      type: DataTypes.INTEGER
    },
    ship_width: {
      type: DataTypes.INTEGER
    },

  });

  Ship.associate = function (models) {
    Ship.belongsTo(models.Trip, {
      foreignKey: "main_id"
    }
    );
  }

  return Ship;
}

