var router = require("express").Router()
// importing api routes
var apiRoutes = require("./api")
// use the routes.. anything with /api goes into api folder
router.use("/api", apiRoutes)

module.exports = router
