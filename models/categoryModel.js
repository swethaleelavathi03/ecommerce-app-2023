import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
<<<<<<< HEAD
    required: true,
    unique: true,
=======
    // required: true,
    // unique: true,
>>>>>>> origin/14-payment-gateway-integration
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);
