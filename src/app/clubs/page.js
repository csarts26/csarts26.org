export default function Home() {
	return (
		<main className="w-screen h-full bg-yellow">
			<div className="flex w-full h-screen text-brown items-center justify-center">
				<div className="flex flex-col sm:flex-row pb-4 gap-16 items-center">
					<div className="flex flex-col gap-4 w-80 h-fit justify-between text-xl sm:text-lg font-inter select-none">
						<p className="font-bold">Hello, Club Owner!</p>
						<p>Using csarts26.org, we intend to promote not only our events, but <b>yours</b> as well.</p>
                        <p>Our site will act as a billboard, displaying different club ads at different times.</p>
                        <p>As we speak, more forms of advertisement are being worked on, so stay tuned on our <a href="https://www.instagram.com/csarts26/">Instagram</a> for more information!</p>
                        <p>Displaying your ad is completely free, too! Just fill out our form below to submit a request!</p>
                        <a href="https://forms.gle/fjhqpMMz5rSwDeJC7">Advertise your event.</a>
					</div>
				</div>
			</div>
		</main>
	);
}