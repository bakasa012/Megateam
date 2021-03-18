const { verifyToken } = require("../middlewares/authJwt");
const db = require("../models");
const Question = db.question;

const Op = db.Sequelize.Op;

exports.get = async (req, res) => {
    await Question.findAll()
        .then(question => {
            if (question) {
                return res.status(200).send({
                    message: "Successfully",
                    data: question
                });
            }
            return res.status(200).send({
                message: "data null",
                data: null
            });
        })
        .catch(err => console.log(err));
};
function maxOrder() {

}
exports.create = async (req, res) => {
    const content = req.body.content;
    const order = maxOrder();
    const Account = verifyToken(req, res);
    await Question.create({
        content: content,
        order: order,
        createBy: Account
    }).then(data => {
        if (data)
            return res.status(200).send({
                message: "Successfully",
                data: data
            });
        return res.status(400).send({
            message: "Bad Request",
        });
    }).catch(err => console.log(err));
}

exports.edit = async (req, res) => {
    const id = req.body.id;
    await Question.findOne({
        attributes: ["id", "content", "order"],
        where: {
            id: id
        }
    }).then(question => {
        if (question) {
            return res.status(200).send({
                message: "Successfully",
                data: question
            });
        }
        return res.status(200).send({
            message: "no data",
            data: question
        })
    })
}

exports.update = (req, res) => {
    const Account = verifyToken(req, res);
    const id = req.body.questionId;
    const content = req.body.content;
    const order = req.body.order;

    await Question.update({
        content: content,
        order: order,
        updateBy: Account,
    },
        {
            where: { id: id }
        }
    ).then(data => {
        if (data)
            return res.status(200).send({
                message: "Successfully",
                data: data
            });
        return res.status(400).send({
            message: "Bad Request",
        });
    }).catch(err => console.log(err));
};

exports.destroy = async (req, res) => {
    const id = req.body.id;
    await Question.delete({ where: { id: id } })
        .then(data => { return res.status(200).send({ message: "Successfully" }) })
        .catch(err => console.log(err));
};

exports.destroyArray = async (req, res) => {
    const arrayId = req.body.arrayId;

    await Question.delete({
        where: {
            id: { [op.in]: arrayId }
        }
    }).then(data => { return res.status(200).send({ message: "Successfully" }) })
        .catch(err => console.log(err));
};