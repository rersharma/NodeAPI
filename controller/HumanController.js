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
     store_record(req,res)
     {
          connect.getConnection((err,myconnection)=>
          {
               if(err)
               {
                     res.status(500).json({message:err.message})
                     res.end()
               }
               else 
               {
                    const q=`insert into Human(name,Adharcard,address)values('${req.body.name}','${req.body.adhrcard}','${req.body.address}')`
                    myconnection.query(q,(err)=>
                    {
                          if(err)
                          {
                              res.status(500).json({message:err.message})
                               res.end()
                          }
                          else
                          {
                                res.status(200).json(req.body.name+" Record Inserted Successfully")
                                res.end()
                          }
                    })
               }
          })
     }
}

const obj=new Human()
module.exports=obj
