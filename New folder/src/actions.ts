"use server";
import bcrypt from "bcryptjs";
import DBConnect from "./utils/DBConnect";
import User from "./models/User";
import { redirect } from "next/navigation";
import Car from "./models/Car";
import { revalidatePath } from "next/cache";
import { signOut } from "next-auth/react";
import Message from "./models/Message";

export const handleRegister = async (formData: FormData) => {
  const {
    first_name,
    last_name,
    email,
    password,
    number,
    zone_number,
    building_number,
    apartment_number,
    car_model,
    car_color,
    car_number,
    Car_Wash_Schedule_Days,
  } = Object.fromEntries(formData);

  try {
    await DBConnect();
    const hashedPassword = await bcrypt.hash(password as string, 4);
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      number,
      zone_number,
      building_number,
      apartment_number,
      car_model,
      car_color,
      car_number,
      Car_Wash_Schedule_Days,
    });
    console.log(newUser);

    const newCar = await Car.create({
      car_model,
      car_color,
      car_number,
      Car_Wash_Schedule_Days,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
  redirect("/login");
};
export const addCar = async (formData: FormData) => {
  const { car_model, car_color, car_number, Car_Wash_Schedule_Days, userId } =
    Object.fromEntries(formData);

  try {
    await DBConnect();
    const newCar = await Car.create({
      car_model,
      car_color,
      car_number,
      Car_Wash_Schedule_Days,
      userId,
    });
    console.log(newCar);
  } catch (error: any) {
    throw new Error(error.message);
  }
  redirect("/client/car-wash-list");
};
export const updateCar = async (formData: FormData) => {
  const { car_model, car_color, car_number, Car_Wash_Schedule_Days, id } =
    Object.fromEntries(formData);

  try {
    await DBConnect();
    const newCar = await Car.findByIdAndUpdate(id, {
      $set: { car_model, car_color, car_number, Car_Wash_Schedule_Days },
    });
    console.log(newCar);
  } catch (error: any) {
    throw new Error(error.message);
  }
  redirect("/client/car-wash-list");
};

export const deleteCar = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await DBConnect();
    await Car.findByIdAndDelete(id);
    console.log("DEDLED SUCCESS");
  } catch (error: any) {
    throw new Error(error.message);
  }
  revalidatePath("/client/car-wash-list");
  redirect("/client/car-wash-list");
};
export const fetchCars = async (userId: string) => {
  try {
    await DBConnect();
    const allCar = await Car.find({ userId });
    return allCar;
  } catch (error: any) {
    console.log(error);

    return { message: "Error fetching care homes" };
  }
};
export const fetchCar = async (id: string) => {
  try {
    await DBConnect();
    const singleCar = await Car.findById(id);
    return singleCar;
  } catch (error: any) {
    console.log(error);

    return { message: "Error fetching car" };
  }
};

export const sendMessage = async (formData: FormData) => {
  const { message, userId } = Object.fromEntries(formData);

  try {
    await DBConnect();
    if (message !== "") {
      await Message.create({
        message,
        userId,
      });
      return "Done";
    } else {
      return "Message Required, Please write your message";
    }
  } catch (error: any) {
    return error.message;
  }
};

export const updateProfile = async (formData: FormData) => {
  const { first_name, last_name, email, password, number, id } =
    Object.fromEntries(formData);

  try {
    await DBConnect();
    const newProfile = await User.findByIdAndUpdate(id, {
      $set: { first_name, last_name, email, password, number, id },
    });
    console.log(newProfile);
  } catch (error: any) {
    throw new Error(error.message);
  }
  revalidatePath("/client/profile/:id");
  redirect("/client/car-wash-list");
};
