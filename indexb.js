const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/' + 'form/register.html');
});

app.get("/reg", function(req,res){
	const response = {
		firstname:req.query.fname,
		lastname:req.query.lname,
		email:req.query.email,
		radio:req.query.gender,
		select:req.query.county,
		select:req.query.course,
//====================================================================================
		username:req.query.username,
		password:req.query.psd
	}
	res.send(response); 
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));