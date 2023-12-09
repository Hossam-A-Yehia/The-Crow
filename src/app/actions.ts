"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const URL = "https://wevr.tech/store.wevr.tech/public";

export const handleRegister = async (formData: FormData) => {
  const {
    name,
    email,
    password,
    number,
    zone_number,
    building_number,
    apartment_number,
    car_model,
    car_number,
    car_color,
    Car_Wash_Schedule_Days,
  } = Object.fromEntries(formData);
  try {
    const res = await fetch(`${URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        number,
        zone_number,
        building_number,
        apartment_number,
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
  redirect("/login");
};

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
  const { token } = Object.fromEntries(formData);
  try {
    const res = await fetch(`${URL}/api/auth/updateprofile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    console.log(data);
  } catch (err: any) {
    console.log(err);
  }
};
//  CARS

export const addCar = async (formData: FormData) => {
  const { token, car_model, car_number, car_color, Car_Wash_Schedule_Days } =
    Object.fromEntries(formData);
  try {
    const res = await fetch(`${URL}/api/cars/add`, {
      method: "POST",
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
export const deleteCar = async (formData: FormData) => {
  const { id, token } = Object.fromEntries(formData);

  try {
    const res = await fetch(`${URL}/api/cars/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (err: any) {
    console.log(err);
  }
  revalidatePath("/client/car-wisth-list");
  redirect("/client/car-wisth-list?DELETE=SUCCESS");
};

// Authorization
