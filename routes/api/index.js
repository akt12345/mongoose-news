var router = require("express").Router()
// importing api routes
var fetchRoutes = require("./fetch.js")
// use the routes.. anything with /api goes into api folder
router.use("/fetch", fetchRoutes)

module.exports = router
