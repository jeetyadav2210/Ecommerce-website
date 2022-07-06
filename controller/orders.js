var Connection=require("../config/connaction")


exports.getorders=(req,res)=>{
    Connection.query('SELECT* FROM orders',(err,row)=>{
        if(err){
            res.json({
                code:400,
                msg:err
            })
        }else{
            res.json({
                code:200,
                msg:row
            })
        }
    })
}


exports.addorders=(req,res)=>{
    const {total_amount,created_on,shipped_on,status,comments,customer_id,auth_code,reference,shipping_id,tax_id}= req.body
 Connection.query(`INSERT INTO (total_amount,created_on,shipped_on,status,comments,customer_id,auth_code,reference,shipping_id,tax_id)  VALUES `)

}







exports.deleteorders=(req,res)=>{
    Connection.query('DELETE FROM orders WHERE order_id=?',req.param.order_id,(req,row)=>{
if(err){
    res.json({
        code:400,
        msg:err
    })
}else{
    res.json({
        code:200,
        msg:row
    })
}
    })
}