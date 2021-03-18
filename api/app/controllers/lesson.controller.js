const { verifyToken } = require("../middlewares/authJwt");
const db = require("../models");
const Lesson = db.lesson;

const Op = db.Sequelize.Op;

exports.get = async (req, res) => {
    await Lesson.findAll()
        .then(lesson => {
            if (lesson) {
                return res.status(200).send({
                    status: res.status(200),
                    message: "Successfully",
                    data: lesson
                });
            }
            return res.status(200).send({
                status: res.status(200),
                message: "data null",
                data: null
            });
        })
        .catch(err => console.log(err));
};

exports.create = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const Account = verifyToken(req, res);
    await Lesson.create({
        name: name,
        description: description,
        createBy: Account
    }).then(data => {
        if (data)
            return res.status(201).status({
                message: "Successfully",
                data: data,
            });
        return res.status(400).send({
            message: "Bad Request",
        });
    })
        .catch(err => console.log(err));
}

exports.update = async (req, res) => {
    const Account = verifyToken(req, res);
    const id = req.body.lessonId;
    const name = req.body.name;
    const description = req.body.description;
    await Lesson.update({
        name: name,
        description: description,
        updateBy: Account
    },
        {
            where: { id: id }
        })
        .then(data => {
            if (data)
                return res.status(200).send({
                    message: "Successfully ",
                    data: data
                });
            return res.status(400).send({ message: "Bad Request" });
        })
        .catch(err => console.log(err));
}

exports.destroy = async (req, res) => {
    const id = req.body.id;
    await Lesson.delete({ where: { id: id } })
    .then(data=>{return res.status(200).send({message:"Successfully"})})
    .catch(err=>console.log(err));
}

exports.destroyArray = async (req, res)=>{
    const arrayId = req.body.arrayId;
    await Lesson.delete({
        where:{
            id:{[Op.in]:arrayId}
        }
    }).then(data=>{return res.status(200).send({message:"Successfully"})})
    .catch(err=>console.log(err));
}