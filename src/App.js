import './output.css';
import logo from './logo.svg';

function App() {
  return (
    <main className='w-screen h-screen bg-yellow'>
      <div className='flex w-full h-full text-white items-center justify-center'>
        <img src={logo} alt='Logo' className='size-64 pb-4'/>
      </div>
    </main>
  );
}

export default App;