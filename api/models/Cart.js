const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({

    userId :{
        type : String, 
        required: true
    },

    products : [
        {
            productId :{
                type: String,
            
            },
            Quantity :{
                type: Number,
                default: 1
            }
        }
    ]
    
},
    {timeStamp: true}
);

module.exports = mongoose.model("Cart", CartSchema);