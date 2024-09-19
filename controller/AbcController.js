const mongo_=require('../mongodb_database')

class Abc 
{
    emp_model=null
    constructor()
    {
     this.emp_model=mongo_.model('emp_store',new mongo_.Schema({},{strict:false}),'Employee')
    }
    async Display_Emp(req,res)
    {
          const data=await this.emp_model.find({})
          res.json(data)
          res.end()
        
    }
}

const obj=new Abc()
module.exports=obj