const express = require("express");
const app = express();
const port = 3600;
const { application } = require("express");
const bodyParser = require("body-parser")
const learnerRouter = require("./routes/learner-route.js")
app.use(bodyParser.json());

app.use("/learners", learnerRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "connected"
    })
})

app.listen(port,()=>{
    console.log("connected");
}
)