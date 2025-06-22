"use client";

export default function AppError({ error, reset }) {
	return (
		<main className="flex justify-center items-center flex-col gap-6 px-4 min-h-[50vh]">
			<h1 className="text-2xl sm:text-3xl font-semibold text-center">
				Something went wrong!
			</h1>
			<p className="text-base sm:text-lg text-center">{error.message}</p>

			<button
				className="inline-block bg-accent-500 text-primary-800 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg"
				onClick={reset}
				type="button"
			>
				Try again
			</button>
		</main>
	);
}
