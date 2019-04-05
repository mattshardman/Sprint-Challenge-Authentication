const axios = require("axios");

const { hashSync } = require("bcryptjs");

const Users = require("../database/helpers/userModel");
const { authenticate, createToken } = require("../auth/authenticate");

const register = async (req, res) => {
    const { username, password } = req.body;

    const hash = hashSync(password, 10);

    try {
        const user = await Users.add({ username, password: hash });
        const token = createToken({ id: user.id, user: user.username });
        res.status(201).json(token);
    } catch (e) {
        res.status(401).json({ message: "Failed to add user" });
    }
};

function getJokes(req, res) {
    const requestOptions = {
        headers: { accept: "application/json" },
    };

    axios
        .get("https://icanhazdadjoke.com/search", requestOptions)
        .then(response => {
            res.status(200).json(response.data.results);
        })
        .catch(err => {
            res.status(500).json({ message: "Error Fetching Jokes", error: err });
        });
}

module.exports = server => {
    server.post("/api/register", register);
    server.post("/api/login", login);
    server.get("/api/jokes", authenticate, getJokes);
};
