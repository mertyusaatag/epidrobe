const express = require("express");
const router = express.Router();
const axios = require("axios");

//get latest tv series
router.get("/", (req,res, next) => {
    axios.get(`https://api.themoviedb.org/3/tv/latest?api_key=8ef1582bce336c778e54d74f414322a7&language=en-US
    `).then(response => {
        //console.log(response.data)
        res.send(response.data)
    })
        .catch(err => next(err))
})

router.get("/:pagenumber", (req, res, next) => {
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=8ef1582bce336c778e54d74f414322a7&language=en-US&page=${req.params.pagenumber}
    `).then(response => {
        
        let takenData = response.data.results
        //console.log(takenData)
        //console.log(takenData.name)
        let result = Object.keys(takenData).map(item => {
            console.log(takenData[item].name);
            return {
                diziadı: takenData[item].name,
                dizipop: takenData[item].popularity
            }
        })
        res.send(result)
    })
        .catch(err => next(err))
})

module.exports = router;