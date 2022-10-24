const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({
    extended: true
  }))

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getPCom, changeMe, deleteTxt} = require('./controller')

//endpoints

app.get("/api/compliment", getCompliment);
//-----------------------------------------------

//1
app.get("/api/fortune", getFortune)
//-----------------------------------------------

//2
app.post("/api/personalcom/", getPCom)
//--------------------------------------------

//3
app.put("/api/changeMe/", changeMe)

//4
app.delete("/api/delete/", deleteTxt)




app.listen(4000, () => console.log("Server running on 4000"));
