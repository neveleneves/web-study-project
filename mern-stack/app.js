const express = require('express')
const cookieParser = require("cookie-parser");
const config = require('config')

const app = express()

app.use(express.json({extended: true}))

app.use(cookieParser());

//Set the server port value
const PORT = config.get('port') || 5000

//Function to start the app
async function initServer() {
    try {
        app.listen(PORT, () => console.log(`App launched on port ${PORT}...`))
    } catch (e) {
        console.warn("Something wrong with server: ", e.message)
    }
}
initServer()