
class Basic
{
      Hello_Message(req,res)
      {
          const info={message:'Welcome To Node Js'}
          res.json(info)
          res.end()
      }
      Two_Nb_Sum(req,res)
      {
          var a=12 ,b=21,c 
          c=a+b 
          res.json({sum:'Addition is '+c})
          res.end()
      }
      Subtraction(req,res)
      {
           var a=req.body.ist 
           var b=req.body.iind 
           var c=a-b 
           res.json({Ans:'Subtraction is '+c})
           res.end()
      }
      Multiplication(req,res)
      {
        var a=req.body.ist 
        var b=req.body.iind 
        var c=a*b 
        res.json({Ans:'Multiple is '+c})
        res.end()
      }
}

const obj=new Basic()
module.exports=obj