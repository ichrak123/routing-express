const express = require('express')
const app = express ()
app.use(date=( req ,res ,next)=>{
    var d = new Date();
    var heure = d.getHours();
    if( (heure <= 8 || heure>=17) )
    {res.send('Our service is not open now')}
    else
    next()
    
 })
app.get('/home',( req, res) =>{
    res.sendfile(__dirname +'/public/home.html')
})
app.get('/ourservices', (req, res)=>{
    res.sendFile(__dirname + '/public/ourservices.html')
})
app.get('/contact', (req,res)=>{
    res.sendfile(__dirname + '/public/contact.html')
})
app.listen(3000, (err)=>{
    if(err) console.log("server is not runnig")
    else console.log('server is runnig on port 3000')
})