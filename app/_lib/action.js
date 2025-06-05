"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { getBookings } from "./data-service";

export async function updateGuest(oldFormData, formData) {
  const session = await auth();
  const id = session?.user?.id;

  if (!session)
    throw new Error("You must be signed in to update guest information");

  const [nationality, countryFlag] = formData.get("nationality").split("%");
  const nationalID = formData.get("nationalID") || "";

  if (!/^\d{6,12}$/.test(String(nationalID)))
    throw new Error("National ID must be a number between 6 and 12 digits");

  const guestData = {
    nationality,
    countryFlag,
    nationalID,
  };

  const { error } = await supabase
    .from("guests")
    .update(guestData)
    .eq("id", id);

  if (error) {
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function updateBooking(formData) {
  console.log("Updating booking with formData:", formData);

  const session = await auth();
  if (!session) throw new Error("You must be signed in to update a booking");

  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");
  const hasBreakfast = formData.get("hasBreakfast") === "on";
  const bookingId = formData.get("bookingId");
  const dataToUpdate = { numGuests, hasBreakfast, observations };

  const { data, error } = await supabase
    .from("bookings")
    .update(dataToUpdate)
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be updated");
  }

  console.log(data);

  revalidatePath("/account/resevations");
}

export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in to delete a booking");

  const guestBooking = (await getBookings(session.user.id))
    .map((booking) => booking.id)
    .includes(bookingId);

  if (!guestBooking)
    throw new Error("Booking not found or does not belong to the user");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function signinAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}
export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
