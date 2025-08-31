const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.json({
        Firstname:"ali"
    });
});
app.listen(575,()=>{
    console.log(`server is on port${575}`);

});