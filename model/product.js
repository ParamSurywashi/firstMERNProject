const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title:  {type: String, required : true }, 
    description: String,
    price: { type: Number, min: [6, 'Too few Price'], max: [20,"Too High Prioce"] },
    discountPercentage: Number,
    rating: Number,
    thumbnail: String,
    brand: { type: String, enum: {
          values: ['Google', 'Facebook'],
          message: '{VALUE} is not supported'
        }
      }
  });
  
  exports.Product = mongoose.model('Product', productSchema);
  
  