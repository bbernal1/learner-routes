const express = require("express");
const data = require("../data/learnerData");
const learnerRouter = express.Router();


// learnerRouter.get("/", (req, res) => {
//     res.status(200).json({
//         learners: data
//     })
// })
learnerRouter.get("/", (req, res) => {
    res.status(200).json({
        leaner:data
    })
})

learnerRouter.get("/:idx", (req, res) => {
    let idx = Number(req.params.idx);

    if (idx >= data.length || idx < 0){
        res.status(500).json({
            message:"out of index error"
        });
    }

    res.status(200).json({
        learner:data[idx]
    });
})

module.exports = learnerRouter;