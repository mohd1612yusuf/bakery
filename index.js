import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';



fs.writeFileSync('abc.txt',"Orders are: \n",)
fs.writeFileSync('GOT.txt',"Orders Id: \n",)
fs.writeFileSync('message.txt',"Orders are: \n",)
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/view/index.html");
})

app.get("/index.html", (req, res)=>{
    res.sendFile(__dirname+"/view/index.html");
})

app.get("/about.html", (req, res)=>{
    res.sendFile(__dirname+"/view/about.html");
})

app.get("/blog.html", (req, res)=>{
    res.sendFile(__dirname+"/view/blog.html");
})

app.get("/contact.html", (req, res)=>{
    res.sendFile(__dirname+"/view/contact.html");
})

app.post("/contact.html", (req, res)=>{
    res.sendFile(__dirname + "/view/contact.html");
    const a = req.body;
    console.log(a);
    fs.appendFileSync("message.txt", JSON.stringify(a), function(err){
        if(err) throw err;
        else{
            console.log("Saved..");
        }
    });
})

app.get("/shop.html", (req, res)=>{
    res.sendFile(__dirname+"/view/shop.html");
})

app.get("/cart.html", (req, res)=> {
    res.sendFile(__dirname+"/view/cart.html");
})

app.post("/send-array", (req, res)=>{
    const receivedArray = req.body.array;
    console.log(receivedArray);
    fs.appendFileSync('abc.txt', JSON.stringify(receivedArray), function(err){
        if(err) throw err;
        else{
            console.log("Saved...");
        }
    })
    res.sendStatus(200);
})

app.post('/send', (req, res)=>{
    const b = req.body.array;
    fs.appendFileSync('GOT.txt', JSON.stringify(b), function(err){
        if(err) throw err;
        else{
            console.log("YEEEEaaahh...");
        }
    })
    console.log(b);
})

app.get("/order_confirmation.html", (req, res)=>{
    res.sendFile(__dirname+"/view/order_confirmation.html");
})




app.listen(port, ()=>{
    console.log("Server Started");
})
