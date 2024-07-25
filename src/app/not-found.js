export default function Custom404() {
    return (
        <main className='w-screen h-screen bg-yellow'>
            <div className='flex flex-col gap-8 w-full h-full text-brown items-center justify-center font-inter'>
                <a href='/'><img className='size-64 cursor-pointer' src='/404.svg' /></a>
                <p className='text-lg'>This page does not exist.</p>
            </div>
        </main>
    );
}