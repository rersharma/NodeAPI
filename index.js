const express=require('express')
const app=express()
const myrouter=require('./route')
const cors=require('cors')
const port=1999

app.use(express.json()) // middleware like as body-parser ,we set it because we are creating API
app.use(cors()) //Enable for React and other Framework to Access Our Api
// cross origin Resource Sharing

app.use('/',myrouter)

app.listen(port,()=>
{
      console.log(`Click Here http://localhost:${port}`)
})