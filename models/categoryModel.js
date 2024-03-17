import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
<<<<<<< HEAD
<<<<<<< HEAD
    required: true,
    unique: true,
=======
    // required: true,
    // unique: true,
>>>>>>> origin/14-payment-gateway-integration
=======
    // required: true,
    // unique: true,
>>>>>>> origin/15-admin-orders-css
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);
