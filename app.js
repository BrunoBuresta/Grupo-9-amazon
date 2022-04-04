const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(4000, () =>{
    console.log('servidor corriendo en http://localhost:4000');
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/detalleDeProducto", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/detalleDeProducto.html"))
});


