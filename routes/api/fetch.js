var router = require("express").Router()
// fetch controllers
var fetchController = require("../../controllers/fetch.js")
// use the routes.. anything with /api goes into api folder - its my choice to write differnt parts
// where its going to scrape
router.get("/", fetchController.scrape.headlines)

module.exports = router
