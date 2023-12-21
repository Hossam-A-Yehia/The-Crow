import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
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
    userId: String,
  },
  { timestamps: true }
);

export default mongoose.models.Car || mongoose.model("Car", carSchema);
