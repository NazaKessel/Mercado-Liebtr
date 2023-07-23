const express = require("express");
const app = express();

app.listen(3030, ()=> {
    console.log("servidor levantado");
})
app.get("/index", function(req, res){
    res.send("bienvenidos al sitio");
});