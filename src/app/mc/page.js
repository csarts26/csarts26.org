import BackLink from "@/components/backlink";
import EventsPage from "@/components/ui/eventCarousel";

function Card({ title, image, description }) {
    return (
      <div className='flex flex-col md:flex-row md:w-[756px] h-[260px] gap-8 mx-2 md:mx-0 mb-4 text-black bg-white justify-between md:justify-between items-center rounded-xl shadow-md overflow-clip'>
        <div className='flex flex-col gap-4 py-8 px-8 w-[400px] h-full'>
          <h1 className='text-2xl font-medium'>{title}</h1>
          <p className='text-sm md:text-base'>{description}</p>
        </div>
        <div style={{ backgroundImage: `url(${image})` }} alt={title} className='h-full w-3/5 bg-cover bg-center bg-yellow'></div>
      </div>
    )
  }
  
function Team() {
return (
    <main className='flex flex-col w-full h-full bg-yellow items-center pb-24'>
    <img 
        className='md:w-[756px] mx-2 md:mx-0 mb-4 mt-16 w-full h-64 bg-yellow rounded-2xl'
        src='/images/mc/banner.png'
    />

    <Card 
        title="Open to all!"
        image='/images/mc/grades.png'
        description="The Class of ‘26 Minecraft Server is open to all! Play with any of your friends no matter their grade! You may even see some special teachers, alumni, or Class Presidents!" 
    />
    <Card 
        title="Play it on Java & Bedrock!"
        image='/images/mc/crossplay.png'
        description="It doesn’t matter how you play, MC’26 is cross-compatible between Java & Bedrock Edition!" 
    />
    <Card 
        title="No pesky Waitlist!"
        image='/images/mc/waitlist.png'
        description="Instead of having to wait to be allowed on the server, players can simply join and verify with their school email! No more waiting for someone to whitelist you!" 
    />
    <Card 
        title="No-fear Survival!"
        image='/images/mc/survival.png'
        description="With our land-claim system, it’s impossible for an annoying greifer to destroy your builds! Don’t worry, you can still live & build with your friends." 
    />
    <Card 
        title="Get rewarded!"
        image='/images/mc/badges.png'
        description="Stand out from others by supporting Class of ‘26 fundraisers to earn cute, themed badges in-game!" 
    />
    <BackLink />
    </main>
);
}

export default Team;