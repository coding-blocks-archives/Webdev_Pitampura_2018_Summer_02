/**
 * Created by rishabhkhanna on 27/07/18.
 */
const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: "sqlite",
    storage: "./user.db"
});

const user = db.define("user", {
    username : Sequelize.DataTypes.STRING,
    password: Sequelize.DataTypes.STRING
})



module.exports = {
    db,
    user
}
