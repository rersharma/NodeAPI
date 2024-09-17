 const connect=require('../Database')

class Human 
{
     All_Human_Record(req,res)
     {
          connect.getConnection((err,myconnection)=>
        {
             if(err)
             {
                 res.json({Database:'Server off '+err})
                 res.end()
             }
             else 
             {
                 const q="select * from Human"
                 myconnection.query(q,(err,data)=>
                {
                      if(err)
                      {
                         res.json(err)
                         res.end()
                      }
                      else 
                      {
                        res.json(data)
                        res.end()
                      }
                })
             }
        })
     }
}

const obj=new Human()
module.exports=obj
