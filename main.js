import express from "express";
import { createConnection } from 'mysql';
const app = express()
const port =3306

const con = createConnection({
    host: "localhost",
    root : "root",
    password: "",
    database: "users",
});

con.connect ((err) =>{
    if(err)throw err;
    console.log("Database Connected");
});
app.get('/', (req,res) => {
    database.query("SELECT * FROM users", (err, rows) => {
        if (err)throw err;
        console.error(err.stack)
    nextTick(err);
    res.json({
    succes: true,
    messages: "getting user",
        data :rows,
    })
  })
   
});
app.listen(3306,()=>{
    console.log('example app listening on port ${3306}')
})