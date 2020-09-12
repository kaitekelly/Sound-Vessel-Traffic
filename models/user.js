module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // User.sync()
    //     .then(() => console.log('User table created successfully'))
    //     // .catch(err) => console.log("Nope, no db.")

    // User.prototype.validPassword = function (password) {
    //     return bcrypt.compareSync(password, this.password);
    // };

    // User.addHook("beforeCreate", user => {
    //     user.password = bcrypt.hashSync(
    //         user.password,
    //         bcrypt.genSaltSync(10),
    //         null
    //     );
    // });
    return User;
};

