const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const path = require("path");

const RouterAll = require("./app/routers/index");
const db = require("./app/models");
const corsOptions = {
    origin: "http://localhost:8081"
}
const app = express();

//header
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
app.use(helmet());
// app.use(cors());
app.use(express.json());
RouterAll(app);
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db");
});

// db.sequelize.sync({force: true}).then(()=>{
//     console.log("Drop and re-sync db");
//     initial();
// });

//PORT
if (!process.env.PORT) {
    console.log("Error to get port");
}
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    const Role = db.role;
    const User = db.user;
    const bcrypt = require("bcryptjs");
    Role.create({
        name: "user"
    });
    Role.create({
        name: "moderator"
    });
    Role.create({
        name: "admin"
    });
    
    User.create({
        username: "username",
        email: "email@gmail.csacaca",
        password: bcrypt.hashSync("password", 8)
    }).then(userRes =>{
        userRes.setRoles(1);
    });
    User.create({
        username: "username1",
        email: "email1@gmail.csacaca",
        password: bcrypt.hashSync("password", 8)
    }).then(userRes =>{
        userRes.setRoles(1);
    });
    User.create({
        username: "username2",
        email: "email2@gmail.csacaca",
        password: bcrypt.hashSync("password", 8)
    }).then(userRes =>{
        userRes.setRoles(1);
    });
    User.create({
        username: "username3",
        email: "email3@gmail.csacaca",
        password: bcrypt.hashSync("passwordsdf", 8)
    }).then(userRes =>{
        userRes.setRoles([1,2]);
    })
}



// app.use(function (req, res, next) {
//     res.setHeader(
//       'Content-Security-Policy',
//       "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
//     );
//     next();
//   });

// routes
// require("./app/routers/tutorial.routers")(app);
// require("./app/routers/auth.router")(app);
// require("./app/routers/user.router")(app);

// function loadViews() {
//     app.use(express.static(path.join(__dirname, './build')));
//     app.get('/*', function (req, res) {
//         res.sendFile(path.join(__dirname, './build', 'index.html'));
//     });
// }