const express = require("express");
const path= require("path");
const app=express();

app.set("port", process.env.PORT||3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res)=>{res.render("pages/home")});

app.listen(app.get("port"), ()=>{console.log(`Server listen on http://localhost:${app.get("port")}`)});

