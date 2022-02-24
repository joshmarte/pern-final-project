const LocalStrategy = require("passport-local").Strategy;
const { getUser, getUserId } = require("./queries/user");
const bcrypt = require("bcrypt");

function initialize(passport) {
    console.log("Initialized");

    const authenticateUser = async (email, password, done) => {
        // console.log(email, password);
        const user = await getUser(email);
        // console.log(user);
        if (user.password) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.log(err);
                }
                if (isMatch) {
                    // console.log("right password");
                    return done(null, user);
                } else {
                    //password is incorrect
                    // console.log("wrong pass");
                    return done(null, false, {
                        message: "Password is inncorrect",
                    });
                }
            });
        } else {
            // NO USER
            return done(null, false, {
                message: "No User with that email address",
            });
        }
    };

    passport.use(
        new LocalStrategy(
            { usernameField: "email", passwordField: "password" },
            authenticateUser
        )
    );

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(async (id, done) => {
        const results = await getUserId(id);
        return done(null, results);
    });
}

module.exports = initialize;
