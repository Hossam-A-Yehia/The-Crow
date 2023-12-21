import mongoose from "mongoose";

const DBConnect = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(
      process.env.MONGO_SECRET as string,
      {
        useNewUrlParser: false,
        useUnifiedTopology: false,
      } as any
    );
  } catch (error) {
    console.log("MONGOSE NOT CONNECTED");
  }
};

export default DBConnect;
