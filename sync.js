const { sequelize, user } = require("./models")
async function connect(){
    await sequelize.sync({force: true})
    console.log(user.toString())
    return 'sequelize_db';
}
console.log("Hi before sync")
connect().then(res => console.log(res)).catch(err => console.log(err))
console.log("Hi after sync")

