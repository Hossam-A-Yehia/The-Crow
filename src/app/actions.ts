"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { URL } from "./url";

export const fetchProfile = async (token: string) => {
  try {
    const res = await fetch(`${URL}/api/user-profile`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    console.log(data);
  } catch (err: any) {
    console.log(err);
  }
};

export const updateProfile = async (formData: FormData) => {
  const { token, last_name, first_name, email, password, number } =
    Object.fromEntries(formData);
  try {
    const res = await fetch(`${URL}/api/auth/updateprofile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        last_name,
        first_name,
        email,
        password,
        number,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (err: any) {
    console.log(err);
  }
};
//  CARS

export const updateCar = async (formData: FormData) => {
  const {
    token,
    id,
    car_model,
    car_number,
    car_color,
    Car_Wash_Schedule_Days,
  } = Object.fromEntries(formData);
  try {
    const res = await fetch(`${URL}/api/cars/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        car_model,
        car_number,
        car_color,
        Car_Wash_Schedule_Days,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (err: any) {
    console.log(err);
  }
  redirect("/client/car-wisth-list");
};

// Authorization
