const {Schema,model} = require('../connection');

const mySchema=new Schema({
    name:String,
    price:String,
    image:String,
    description:String,

   
   
});

module.exports=model('gift',mySchema);