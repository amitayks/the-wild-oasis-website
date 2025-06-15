"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(oldFormData, formData) {
  console.log(formData);
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
  const session = await auth();
  if (!session) throw new Error("You must be signed in to update a booking");

  const bookingId = formData.get("bookingId");
  const guestBooking = (await getBookings(session.user.id))
    .map((booking) => booking.id)
    .includes(Number(bookingId));

  if (!guestBooking)
    throw new Error("Booking not found or does not belong to the user");

  const dataToUpdate = {
    numGuests: formData.get("numGuests"),
    hasBreakfast: formData.get("hasBreakfast"),
    observations: formData.get("observations"),
  };

  const { error } = await supabase
    .from("bookings")
    .update(dataToUpdate)
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be updated");
  }

  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session)
    throw new Error("You must be signed in to create a reservation");
  if (!bookingData || !formData) return;

  const newBooking = {
    ...bookingData,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations"),
    guestId: session.user.id,
    isPaid: false,
    extraPrice: 0,
    totalPrice: bookingData.cabinPrice,
    status: "unconfirmed",
    hasBreakfast: false,
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);
  if (error) throw new Error(error.message);

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/account/thank-you");
}

export async function deleteBooking(bookingId) {
  console.log("click");
  const session = await auth();
  if (!session) throw new Error("You must be signed in to delete a booking");

  const guestBooking = (await getBookings(session.user.id)).map(
    (booking) => booking.id
  );

  if (!guestBooking.includes(bookingId))
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
