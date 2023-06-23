var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydata',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    // var confirmpassword =req.body.confirmpassword;

    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password
       
    }
    // confirmpasswordInput.addEventListener("input", () => {
    //     const password = passwordInput.value;
    //     const confirmpassword = confirmpasswordInput.value;
        
        // Check if the confirm password matches the original password
        // if (password === confirmpassword) {
        //   console.log("Passwords match!");
        // } else {
        //   console.log("Passwords do not match.");
        // }
      
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3002);


console.log("Listening on PORT 3002");