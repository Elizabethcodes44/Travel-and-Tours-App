import Video from "/Welcomevideo.mp4";
export default function Welcome({onLearnMore}){
    return(
        
        <div className= "relative w-full h-screen overflow-hidden" >
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0" >
            <source src={Video} type="video/mp4"/>
            Your browser does not support the video tag.

            </video>
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white text-center bg-black bg-opacity-50">
                <h1 className="text-7xl font-bold">Welcome to </h1>
                <h1 className="text-7xl mt-2 font-bold">My </h1>
                <h3 className="text-7xl mt-2 font-bold">Travel App</h3>
                <button onClick={onLearnMore}  className="mt-8 px-6 py-3 bg-brown text-2xl text-white font-bold rounded ">Learn More</button>
            </div>
        </div>
        
    )
}