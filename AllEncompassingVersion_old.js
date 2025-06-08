//works for mongodb server2.6-4.4(in your system) till 4 and driver v1x,v2x,v3x(in node_modules)
//mongod --version(for server) npm list mongodb(for driver)
const express=require('express');
const bodyParser=require('body-parser');
var MongoClient=require('mongodb').MongoClient;

const app=express();
const port=3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

let db;
const mongoUrl='mongodb://127.0.0.1:27017/my_db';
MongoClient.connect(mongoUrl,function(err,database){
    if(err)
      console.log("Cant connect to mongodb");
    else{
       console.log("mongodb connected");
       db=database;
       app.listen(port,()=>{
       console.log(`Server is connected at ${port}`);
       }) 
    }
});

app.get('/',(req,res)=>{
    res.send(`
        <h1>Some Record</h1>
        <form action="/students" method="POST">
            field1: <input type="text" name="field1" required><br><br>
            field2: <input type="text" name="field2" required><br><br>
            continue for more fields
            <button type="submit">Add Student</button>
        </form>
        <br>
        <a href="/any other end point">View those values or perform the function< 20</a>
    `);
})

app.post('/inserting',(req,res)=>{
    const {field1,field2}=req.body;
    db.collection('my_collection').insert({field1:field1,field2:field2},function(err,results){
       if(err) {
            res.status(500).json({ error: err.message });
       }
       else{
            res.send("Insertion successful!");
       }
    });//make sure to use field2:parseInt(field2) incase u want to save as numbers or directly enter as type="number" in the form
});

app.get('/getting',(req,res)=>{//for less than,greater than,notequals use ({field1:{$lt:20}}) //gt//ne amnd u can add more fields using commas
    db.collection('my_collection').find({field1:"value"}).toArray(function(err,results){
        if(err) {
            res.status(500).json({ error: err.message });
        } else {
            let html = '<h1>Values found < 20</h1>';
            results.forEach(value => {
                html += `<p>${value.field1} - ${value.field2}</p>`;
            });
            html += '<a href="/">Back</a>';
            res.send(html);
        }
    })
})

app.post('/deleting',(req,res)=>{//for less than,greater than,notequals use ({field1:{$lt:20}}) //gt//ne amnd u can add more fields using commas
    db.collection('my_collection').remove({field1:"value"},function(err,result){
        if (err) return res.send('Failed to delete');
        const count = result && result.result ? result.result.n : 0;
        res.send(`Deleted ${count} entries`);
    })
})

app.post('/updating',(req,res)=>{
    const { field1, field2 } = req.body;
    db.collection('students').update({field1:field1}, {$set: {field2: field2}}, function(err, result) {
        console.log('Update result - Error:', err, 'Result:', result);
        if(err) {
            res.status(500).json({ error: err.message });
        } else {
            const numUpdated = result.result ? result.result.n : result;
            if(numUpdated > 0) {
                res.send(`SUccessfully updated`);
            } else {
                res.send(`data not found`);
            }
        }
    });
})