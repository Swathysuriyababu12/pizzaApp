const express=require('express')
const app=express()
const path=require('path')
const PORT=process.env.PORT || 3000


app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('app');
}) 




app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)

})