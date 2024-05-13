const {Schema,model} = require('../connection');

const mySchema=new Schema({
    name:String,
    email:String,
    street:String,
    city:String,
    state:String,
    zip:String,
    phone:String,

   
   
});

module.exports=model('checkout',mySchema);