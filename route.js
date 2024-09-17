const express=require('express')
const router=express.Router()
const obj_basic=require('./controller/BasicController')
const obj_human=require('./controller/HumanController')
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


module.exports=router