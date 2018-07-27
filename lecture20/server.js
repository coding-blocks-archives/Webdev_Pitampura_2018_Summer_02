/**
 * Created by rishabhkhanna on 27/07/18.
 */
const express = require('express');
const app = express();
const model = require("./model");
const passport = require('passport');
const LocalStratergy = require('passport-local');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

app.set("view engine","hbs");

passport.use(new LocalStratergy(async function (username, password, done) {
    var thisUser = await model.user.findAll({where : {username : username}})
    if(!thisUser) return done(null, false);

    if(thisUser[0].dataValues.password !== password){
        return done(null, false);
    }

    return done(null, thisUser[0])
}))

app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(bodyParser());
app.use(session({
    secret: "cat",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (user, done) {
    done(null, user.dataValues.id )
})

passport.deserializeUser(async function (id, done) {
    // console.log("deserialize user");
    var thisUser = await model.user.findAll({where: {id: id}})

    done(null, thisUser[0]);
})

app.get("/", (req,res)=>{
    res.send("Welcome Guest");
})

app.get("/signin", (req,res)=>{
    res.render("signin");
})

app.get("/signup", (req,res)=>{
    res.render("signup");
})

app.post("/signin", passport.authenticate('local', {
                                                        successRedirect: "/user",
                                                        failureRedirect: "/signin"
}))
function checkAuth(req,res,next) {
    if(req.isAuthenticated()){
        next();
    }else{
        res.send("Login to see this page");
    }

}
app.get("/user", checkAuth ,(req,res)=>{
    console.log(req.sessionID)
    console.log(req.user);
    res.send("Welcome " + req.user.dataValues.username);
})


app.post("/signup", (req,res)=>{
    console.log(req.body)

    // users.push({username: req.body.username, password: req.body.password})
    model.user.create({
        username: req.body.username,
        password: req.body.password
    })

    res.send("signup");
})

model.db.sync().then(()=>{
    app.listen(9099, ()=>{
        console.log("server started at 9099");
    })
}).catch(console.log);
