const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"employee"
})

app.get('/',(req,res)=>{
    const sql= "SELECT * FROM employeeregistration";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post('/', (req, res, next) => {
    const sql = "INSERT INTO employeeregistration (Name, Department, DOB, Age, salary, Address, Designation,phone_no) VALUES (?,?,?,?,?,?,?,?)";
    const values = [
        req.body.Name,
        req.body.Department,
        req.body.DOB,
        req.body.Age,
        req.body.Salary,
        req.body.Address,
        req.body.Designation,
        req.body.phone_no
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("created");
    });
});

  
app.delete('/:Name', (req, res, next) => {
    const sql = "DELETE FROM employeeregistration  WHERE Name = ?";
    const Name=req.params.Name;

    db.query(sql, [Name], (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("deleted");
    });
});

app.listen(3002, ()=>{
    console.log("Waiting...");
})