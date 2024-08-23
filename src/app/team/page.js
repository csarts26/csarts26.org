import BackLink from "@/components/backlink";

function TeamCard({ person, image, title }) {
    return (
      <div className="flex flex-col">
        <p className='text-sm md:text-base font-bold'>{person}</p>
        <p className='text-sm md:text-base opacity-70 italic'>{title}</p>
      </div>
    )
  }
  
function Team() {
return (
    <main className='flex flex-col w-full h-full bg-yellow items-center pb-24'>
    <div className='flex w-full h-fit bg-yellow justify-center p-10'>
        <h1 className='font-medium text-3xl text-brown text-pretty'>Meet the Class of '26 Team</h1>
    </div>
    
    <div className='flex flex-col gap-8 md:w-[756px] h-fit mx-2 md:mx-0 mb-4 text-black bg-white items-center py-8 px-8 rounded-lg shadow-md'>
        <img className='w-full h-64 bg-yellow rounded-md'/>
        <div className='flex flex-col'>
        <h1 className='text-3xl font-medium'>Francis Fontana & Zakai Haynes</h1>
        <h2 className='italic opacity-70 mt-1 mb-2'>Your Junior Co-Class Presidents</h2>
        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row md:w-[756px] h-fit gap-8 mx-2 md:mx-0 mb-4 text-black bg-white items-start md:items-center py-8 px-8 rounded-lg shadow-md'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-xl font-medium'>Class of '26 Cabinet</h1>

        <TeamCard 
          person="Macy Mananquil"
          title="Event Coordinator"
        />
        <TeamCard 
          person="Octavia Roberts"
          title="Art Director, Developer"
        />
        <TeamCard 
          person="Mordie Gomez"
          title="Social Manager"
        />
        <TeamCard 
          person="Natalie Lanza"
          title="Social Manager"
        />

      </div>
    </div>

    <BackLink />
    </main>
);
}

export default Team;