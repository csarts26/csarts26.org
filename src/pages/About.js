import '../output.css';
import logo from '../logo.svg';
import BackLink from '../components/backlink';

function Card({ description }) {
  return (
    <div className='flex w-[800px] h-fit gap-8 mx-auto mb-4 text-black bg-white items-center py-8 px-8 rounded-lg shadow-md'>
      {description}
    </div>
  )
}

function About() {
  return (
    <main className='w-screen h-screen bg-yellow pb-24'>
      <div className='flex w-full h-fit bg-yellow justify-center p-10'>
        <h1 className='font-medium text-3xl text-brown'>About</h1>
      </div>
      <Card 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <BackLink />
    </main>
  );
}

export default About;