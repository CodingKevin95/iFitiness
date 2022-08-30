require('dotenv').config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

mongoose.connect(process.env.MONGO_URI).catch((err) => console.log(err));

// mongoose.connect("mongodb://localhost:27017/myDB")
// .catch ((err) => console.log(err));

//DB Schema and model
const postSchema = mongoose.Schema({
    exercise: String,
    date: String,
    reps: Number,
    sets: Number,
    weights: Number,
    notes: String,
})

const Post = mongoose.model("Post", postSchema);

// app.get("/", (req, res) => {
//     res.send("Express is here")
// });

//This is CREATE
app.post("/create", (req, res) => {
    Post.create({
        exercise: req.body.exercise,
        date: req.body.date,
        sets: req.body.sets,
        reps: req.body.reps,
        weights: req.body.weights,
        notes: req.body.notes,
    })
    .then(doc => console.log(doc))
    .catch((err) => console.log(err))
});

//This GET or READ
app.get("/posts", (req, res) => {
    Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err))
});

//This is Update
app.put("/create/:id", (req, res) => {
    Post.findByIdAndUpdate(
        { _id: req.params.id },
        {
            exercise: req.body.exercise,
            date: req.body.date,
            sets: req.body.sets,
            reps: req.body.reps,
            weights: req.body.weights,
            notes: req.body.notes,
        }
    )
    .then(doc => console.log(doc))
    .catch((err) => console.log(err))
})

//This is Delete
app.delete("/delete/:id", (req, res) => {
    Post.findByIdAndDelete({ _id: req.params.id })
    .then(doc => console.log(doc))
    .catch((err) => console.log(err))
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen(process.env.PORT || 3001, function () {
    console.log("Server is running")
});