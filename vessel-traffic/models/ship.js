module.exports = function (sequelize, DataTypes) {
  var Ship = sequelize.define("Ship", {

    main_id: {
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
      type: DataTypes.DATE
    },
    ship_length: {
      type: DataTypes.INTEGER
    },
    ship_width: {
      type: DataTypes.INTEGER
    },
    ship_image: {
      type: DataTypes.STRING
    }

  });

  // Ship.associate = function (models) {
  //   Ship.belongsTo(models.Trip, {
  //     as: "leader",
  //     onDelete: 'NO ACTION',
  //     onUpdate: 'CASCADE',
  //     allowNull: true
  //   }
  //   );
  // }

  return Ship;
}

