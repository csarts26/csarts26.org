export default function Home() {
  return (
    <main className="w-screen h-screen bg-yellow">
      <div className='flex w-full h-full text-brown items-center justify-center'>
        <div className='flex flex-col sm:flex-row pb-4 gap-16 items-center'>
          <a href='/'><img src='/logo-dark.svg' alt='Logo' className='h-48 sm:h-64 cursor-pointer'/></a>

          <div className='hidden sm:block h-64 w-0.5 bg-brown opacity-25' />

          <div className='flex flex-col w-fit h-64 justify-between text-xl sm:text-lg underline underline-offset-2 font-inter'>
            <a href='/events'>Event Calendar</a>
            <a href='/suggestions'>Suggest an Event</a>
            <a href='/mc'>Minecraft Server</a>
            <a href='/team'>Meet the Team</a>
            <a href='/about'>About Class of '26</a>
          </div>
        </div>
      </div>
    </main>
  );
}
