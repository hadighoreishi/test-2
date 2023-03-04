const express = require("express");


const server = express();


console.log("server 333 ----------")
server.listen(3000, () => {
    console.log(`server running`)
})