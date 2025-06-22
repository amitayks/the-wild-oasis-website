import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
	const { cabinId } = params;

	try {
		const [cabin, bookedDates] = await Promise.all([
			getCabin(cabinId),
			getBookedDatesByCabinId(cabinId),
		]);

		return new Response(JSON.stringify({ cabin, bookedDates }), {
			status: 200,
		});
	} catch {
		return new Response(
			JSON.stringify({ error: "Failed to fetch cabin data" }),
			{
				status: 500,
			},
		);
	}
}
