const db = require("../models");
const User = db.user;
exports.allAccess = (res, req) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

exports.getUser = (req, res) => {
    User.findAll().then(data => {

        if (data) {
            const results = {
                status: res.status(200),
                message: "Successfully",
                data: data,
            }
            console.log(results);
            return data;
        }
        return {
            message: "null",
        }
    })
}

exports.getListUser =  async (req,res) => {
    const result = {
        status: null,
        message: "",
        data: null
    }
    await User.findAll().then(data => {
        if (data) {
                result.status = 200;
                result.message = "successfully";
                result.data = data;
            return res.status(200).send(result);
        }
        return res.status(200).send(result);
    })
    .catch(err=>{
        console.log(err)
    });
}
