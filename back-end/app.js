// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const flash = require("express-flash");
const passport = require("passport");
const { createUser } = require("./queries/user");

const birdsController = require("./controllers/birdsController");
require("dotenv").config();

const initializePassport = require("./passportConfig");
initializePassport(passport);

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use(
    session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: false,
    })
);
// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());
app.use(flash());

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to my Bird Collection Store!");
});

app.use(
    "/birds",
    // passport.authenticate("local", {
    //     failureFlash: true,
    // }),
    // checkNotAuthenticated,
    birdsController
);

app.get("/signup", checkAuthenticated, (req, res) => {
    res.status(200);
});

// app.get("/login", checkAuthenticated, (req, res) => {
//     res.send("Login");
// });

app.post("/signup", async (req, res) => {
    try {
        let hashedPass = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPass;
        const user = await createUser(req.body);

        req.flash("sucess_msg", "You are now registered. Please login");
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: "error" });
    }
});

app.post(
    "/login",
    passport.authenticate("local", {
        // successRedirect: "/birds",
        // failureRedirect: "/login",
        failureFlash: true,
    }),
    (req, res, done) => {
        console.log(req.isAuthenticated());
        res.json({
            message: "success",
            data: req.user,
            sessionID: req.sessionID,
        });
    }
);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("404 Page Not Found!");
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/birds");
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({ message: false });
}

// EXPORT
module.exports = app;
