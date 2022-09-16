const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },

    /* We did not write products: { type: Array }, because we wanted to indicate some specific properties. 
    So we made an array and wrote specific properties, unlike categories in Product model*/
    products: [
      {
        productId: { type: String },
      },
      {
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema);
