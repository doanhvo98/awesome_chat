import express from "express";
import ConnectDB from "./config/connectDB";
//import ContactModel from "./model/contact.model";
import configViewEngine from "./config/viewEngine";

//Init app
let app = express();

ConnectDB();

//config view engine
configViewEngine(app);

app.get("/", (req, res) => {
  return  res.render("main/master");
});

app.get("/login-register", (req, res) => {
  return  res.render("auth/loginRegister");
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Hello Doanh Doanh, I am running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});
