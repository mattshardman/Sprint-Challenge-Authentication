const db = require("../dbConfig");

const add = async user => {
    const id = await db.insert(user).into("users");
    const newUser = await db("users").where({ id: id[0] }).first();
    return newUser;
};

const getByUserName = async username => {
    const user = await db("users").where({ username }).first();
    return user;
};

module.exports = { add, getByUserName };