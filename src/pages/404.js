import '../output.css';
import logo from '../404.svg';
import BackLink from '../components/backlink';

export default function Home() {
  return (
    <main className='w-screen h-screen bg-yellow'>
      <div className='flex flex-col gap-8 w-full h-full text-brown items-center justify-center font-inter'>
        <a href='/'><img className='size-64 cursor-pointer' src={logo} /></a>
        <p className='text-lg'>This page does not exist.</p>
      </div>
    </main>
  );
}