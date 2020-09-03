module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Ship", {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.STRING
    },
    ship_length: {
      type: DataTypes.INTEGER
    },
    ship_width: {
      type: DataTypes.INTEGER
    },
      
  })
  // return Ship;
}

