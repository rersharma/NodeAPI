const express=require('express')
const router=express.Router()
const obj_basic=require('./controller/BasicController')
const obj_human=require('./controller/HumanController')
const obj_abc=require('./controller/AbcController')
router.get('/',(req,res)=>
{
   obj_basic.Hello_Message(req,res)
})

router.get('/sum_of_two_number',(req,res)=>
{
      obj_basic.Two_Nb_Sum(req,res)
})

router.get('/subtract',(req,res)=>
{
     obj_basic.Subtraction(req,res)
})

router.post('/Multiply',(req,res)=>
    {
         obj_basic.Multiplication(req,res)
    })

router.get('/Fetch_Records',(req,res)=>
{
       obj_human.All_Human_Record(req,res)
})

router.post('/store_data',(req,res)=>
{
     obj_human.store_record(req,res)
})

router.get('/fetch_emp',(req,res)=>
     {
          obj_abc.Display_Emp(req,res)
     })

router.use((req,res,next)=>
{
      res.status(404).json({message:"This Api Url Is Not Exists in Endpoint"})
})

module.exports=router