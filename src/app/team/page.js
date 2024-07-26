import BackLink from "@/components/backlink";

function TeamCard({ person, image, description }) {
    return (
      <div className='flex w-[800px] h-fit gap-8 mx-auto mb-4 text-black bg-white items-center py-8 px-8 rounded-lg shadow-md'>
        <img src='/logo-dark.svg' alt={person.name} className='size-32 bg-yellow aspect-square rounded-full'></img>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-medium'>{person.name}</h1>
          <h2 className='italic opacity-70 mb-2'>{person.title}</h2>
          {description}
        </div>
      </div>
    )
  }
  
function Team() {
return (
    <main className='w-full h-full bg-yellow pb-24'>
    <div className='flex w-full h-fit bg-yellow justify-center p-10'>
        <h1 className='font-medium text-3xl text-brown'>Meet the Class of '26 Team</h1>
    </div>
    
    {/* Person 1 & 2*/}
    <div className='flex flex-col gap-8 w-[800px] h-fit mx-auto mb-4 text-black bg-white items-center py-8 px-8 rounded-lg shadow-md'>
        <img className='w-full h-64 bg-yellow rounded-md'/>
        <div className='flex flex-col'>
        <h1 className='text-3xl font-medium'>Francis Fontana & Zakai Haynes</h1>
        <h2 className='italic opacity-70 mb-2'>Your Junior Co-Class Presidents</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>

    <TeamCard 
        person={{ name: 'Macy Mananquil', title: 'Event Coordinator' }}  
        image=''
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    />
    <TeamCard 
        person={{ name: 'Mordie Gomez', title: 'Social Manager' }}  
        image=''
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    />
    <TeamCard 
        person={{ name: 'Octavia Roberts', title: 'Art Director, Developer' }}  
        image=''  
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    />
    <TeamCard 
        person={{ name: 'Natalie Lanza', title: 'Social Manager' }}  
        image=''   
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    />
    <BackLink />
    </main>
);
}

export default Team;