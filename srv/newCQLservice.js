const cds = require('@sap/cds');
const {worker} = cds.entities("india.db.master");

const NewCQLService = function(srv){
    //Read data from worker table
    srv.on("READ","readWorker", async(req,res)=>{
        var results = [];
        results = await cds.tx(req).run(SELECT.from(worker).where({"firstName":"Saurabh"}))
        return results;
    })

 // Inserting data in table whatever is passed in payload
 srv.on("CREATE","insertWorker",async(req,res)=>{
  
    let returnData = await cds.transaction(req).run([
        INSERT.into(worker).entries([req.data])
        
    ]).then((resolve,reject)=> {
        if (typeof(resolve) !== undefined){
            return req.data;
        }else{
            req.error(500, "There was as error!")
        }
    }).catch(err => {
        req.error(500, "below error occurred" + err.toString());
    });

    return returnData;
});
//Update table records

srv.on("UPDATE", "updateWorker", async(req,res)=>{
    let returnData = await cds.transaction(req).run([
        UPDATE(worker).set({
            firstName : req.data.firstName
        }).where({ID:req.data.ID}),
        UPDATE(worker).set({
            lastName : req.data.lastName
        }).where({ID:req.data.ID}),
    ]).then((resolve,reject)=> {
        if (typeof(resolve) !== undefined){
            return req.data;
        }else{
            req.error(500, "There was as error!")
        }
    }).catch(err => {
        req.error(500, "below error occurred" + err.toString());
    });

    return returnData;
})
//Delete operation

srv.on("DELETE", "deleteWorker", async(req,res)=>{
    let returnData = await cds.transaction(req).run([
        DELETE.from(worker).where(req.data)
    ]).then((resolve,reject)=> {
        if (typeof(resolve) !== undefined){
            return req.data;
        }else{
            req.error(500, "There was as error!")
        }
    }).catch(err => {
        req.error(500, "below error occurred" + err.toString());
    });

    return returnData;
})

}

module.exports=NewCQLService;