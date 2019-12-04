const express = require('express');
const path = require('path');

const mysql = require('mysql');

const con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"iststudent"
});
con.connect((err)=>{
	if (!err)
	console.log("connected");
else
	console.log("failed");
});

const app = express();

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/' + 'form/login.html');
});

app.get('/reg_form', function (req, res) {
	res.sendFile(__dirname + '/' + 'form/register.html');
});

app.get("/reg", function(req,res){
	
		const firstname=req.query.fname;
		const lastname=req.query.lname;
		const email=req.query.email;
		const gender=req.query.gender;
		const county=req.query.county;
		const course=req.query.course;
//====================================================================================
		const username=req.query.username;
		const password=req.query.psd;

	console.log("testing here");
	
	
		con.query(`INSERT INTO registration(firstname,lastname, email, gender, county, username, password)
			VALUES('${fname}', '${lname}', '${email}', '${gender}', '${county}', '${username}', '${password}')`,
			(err, rows, fields)=>{
				if(!err){
					console.log(rows);
				res.redirect('/');
			}
				else{
					console.log("failed");
				}
			
			});
	});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));