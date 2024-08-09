import twitter from "/twitter.png";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import location from "/location.png";
import message from "/message.png";
import phone from "/phone.png";
export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-brown">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block fill-cream"
          ></path>
        </svg>
        <div className="text-white text-center">
          <h2 className="text-5xl">My  Travel App</h2>
       

        <div className="text-white flex justify-around py-10 cursor-pointer">
          <div className="border-2 border-white p-4 ">
            <h2 className="text-3xl  mb-4">Reservations Office</h2>
            <div className="flex items-center mb-2">
              <img src={location} className="w-6 h-6 mr-2" alt="location"/>
              <p>123 My travel app Florida US</p>
            </div>
            <div className="flex items-center">
              <img src={phone} className="w-6 h-6 mr-2 "/>
              <p>+111111234567</p>
            </div>
            <div className="flex items-center">
              <img src={message} className="w-6 h-6 mr-2 mt-4" />
              <p>mytravelapp@gmail.com</p>
            </div>
          </div>

          <div className="border-2 border-white p-4">
            <h2 className="text-3xl mb-4 ">Office hours</h2>
            <div className="mb-2">
              <h3>Monday to Friday</h3>
              <p>9:00 am to 6:00 pm</p>
            </div>
            <div>
              <h3>Saturday </h3>
              <p>9:00 am to 12:00 noon </p>
            </div>
          </div>
          <div className="border-2 border-white p-4">
            <h2 className="text-3xl mb-4">Get Social</h2>
            <div className="flex space-x-4 mb-2">
              <img src={facebook} />
              <img src={twitter} alt="Twitter"className="w-12 h-12"/>
              <img src={instagram} alt="Instagram" className="w-12 h-12"/>
            </div>
            <p className="mt-6 border-2 border-white rounded-xl">Tag us in your photo!</p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
