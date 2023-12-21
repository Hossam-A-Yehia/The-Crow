import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "The first nama is required "],
    },
    last_name: { type: String, required: [true, "The Last nama is required "] },
    email: {
      type: String,
      required: [true, "The Email is required "],
      unique: [true, "Email already exists"],
    },
    password: { type: String, required: [true, "The Password is required "] },
    number: { type: Number, required: [true, "The number is required "] },
    zone_number: {
      type: Number,
      required: [true, "The zone number is required "],
    },
    building_number: {
      type: Number,
      required: [true, "The building number is required "],
    },
    apartment_number: {
      type: Number,
      required: [true, "The apartment number is required "],
    },
    car_model: {
      type: String,
      required: [true, "The car model is required "],
    },
    car_color: {
      type: String,
      required: [true, "The car color is required "],
    },
    car_number: {
      type: String,
      required: [true, "The car number is required "],
    },
    Car_Wash_Schedule_Days: {
      type: String,
      required: [true, "The Car wash schedule days is required "],
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
