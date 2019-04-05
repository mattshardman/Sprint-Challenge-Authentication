const db = require("../dbConfig");

const add = async user => {
    const id = await db.insert(user).into("users");
    const newUser = await db("users").where({ id: id[0] }).first();
    return newUser;
};

module.exports = { add };