import Navbar from "@/components/ui/navbar";
import EventsPage from "../components/ui/eventCarousel";

function NewHome() {
	return (
		<main className="w-screen h-full bg-yellow">
			<div className="flex w-full h-screen text-brown items-center justify-center">
				<div className="flex flex-col sm:flex-row pb-4 gap-16 items-center">
					<a href="/">
						<img
							src="/logo-dark.svg"
							alt="Logo"
							className="h-48 sm:h-64 cursor-pointer"
						/>
					</a>

					<div className="hidden sm:block h-64 w-0.5 bg-brown opacity-25" />

					<div className="flex flex-col w-fit h-64 justify-between text-xl sm:text-lg underline underline-offset-2 font-inter">
						<a href="/events">Event Calendar</a>
						<a href="/suggestions">Suggest an Event</a>
						<a href="/mc">Minecraft Server</a>
						<a href="/team">Meet the Team</a>
						<a href="/about">About Class of '26</a>
					</div>
				</div>
			</div>
		</main>
	);
}

export default function Home() {
	return (
		<main className="w-screen h-full bg-yellow">
			<div className="flex w-full h-screen text-brown items-center justify-center">
				<div className="flex flex-col sm:flex-row pb-4 gap-16 items-center">
					<a href="/">
						<img
							src="/logo-dark.svg"
							alt="Logo"
							className="h-48 sm:h-64 cursor-pointer"
						/>
					</a>

					<div className="hidden sm:block h-64 w-0.5 bg-brown opacity-25" />

					<div className="flex flex-col gap-4 w-80 h-fit justify-between text-xl sm:text-lg font-inter select-none">
						<p className="font-bold">Welcome to csarts26.org!</p>
						<p>We are currently hard at work planning events, fundraisers, and end of year activities!</p>
						<p>Come back soon to get information on our upcoming events and more!</p>
						<p>If you are a club owner, click <a href="/clubs">here</a>.</p>
					</div>
				</div>
			</div>
		</main>
	);
}