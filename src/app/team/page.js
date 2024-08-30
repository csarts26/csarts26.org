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
        <h2 className='italic opacity-70 mt-1 mb-4'>Your Junior Co-Class Presidents</h2>
        <p className='text-sm md:text-base text-pretty'>
          Hey everyone! My name is Frankie Fontana and I’m one half of the Junior Co-Class Presidents! I am so happy to be working with all of you again for the third year in a row. I have lots of plans and ideas for the year and can’t wait to see which ones go into fruition. One of my main goals is to get our enitre class a field trip! This will require lots of planning and fundraising but it’s something I think we’re very capable of. Thank you all for another year, LETS GO CLASS OF ‘26!
        </p>
        <p className="italic opacity-50 pb-4"> - Francis Fontana</p>
        <p className='text-sm md:text-base text-pretty'>
          Hi! My name is Zakai Haynes and I am in the Musical Theater conservatory. This is my 5th year at CSArts. This school, its environment, its people and its curriculum have been the highlights of every day of mine for a long time. I am very invested in this school and furthering its development. My main goal is to amplify the voice of the student body and make sure that the school is a reflection our identity. 
        </p>
        <p className="italic opacity-50 pb-4"> - Zakai Haynes</p>
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
          person="Tine Fazekas"
          title="Social Manager"
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