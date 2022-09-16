const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
