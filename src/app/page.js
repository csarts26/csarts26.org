export default function Home() {
  return (
    <main className="w-screen h-screen bg-yellow">
      <div className='flex w-full h-full text-brown items-center justify-center'>
        <div className='flex pb-4'>
          <a href='/'><img src='/logo-dark.svg' alt='Logo' className='size-64 cursor-pointer'/></a>
          <div className='h-64 w-0.5 bg-brown opacity-25 mr-14 ml-4' />
          <div className='flex flex-col size-64 justify-between text-lg underline underline-offset-2 font-inter'>
            <a href='/'>Event Calendar</a>
            <a href='/'>Suggest an Event</a>
            <a href='/'>Minecraft Server</a>
            <a href='/team'>Meet the Team</a>
            <a href='/about'>About Class of '26</a>
          </div>
        </div>
      </div>
    </main>
  );
}
