import { useState } from "react";

const Footer = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  // Function to detect if the user is on a mobile device
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

 
  const openWhatsApp = () => {
    const phoneNumber = "9756188580"; 
    const message = "Let's do it!";

    const url = isMobileDevice()
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}` 
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`; 

    window.open(url, "_blank"); 
  };

  return (
    <footer className="w-full bg-[#FFF1E5] flex flex-col items-center relative overflow-hidden">
      {/* Top Section with Grid Background */}
      <div className="w-full bg-[#F24E1E] relative py-16 px-6 flex flex-col items-center">
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid grid-cols-8 gap-4 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-l border-black opacity-30"></div>
          ))}
        </div>

        {/* Button "Open WhatsApp" */}
        <div className="flex gap-3 justify-center flex-col md:flex-row">
          <button
            className="bg-green-500 text-white font-bold text-md px-10 py-2 rounded-full shadow-md border-2 border-black relative -translate-y-1 transition-all duration-300 hover:translate-y-0 hover:shadow-lg mr-4"
            onClick={openWhatsApp}
          >
            <span className="relative z-20">Wanna Chat</span>
            <div className="absolute inset-0 bg-black rounded-full translate-y-1 -z-10"></div>
          </button>
       
        {/* Button "Book a Call" */}
        <button
          className="bg-[#FFB800] text-white font-bold text-md px-10 py-2 rounded-full shadow-md border-2 border-black relative -translate-y-1 transition-all duration-300 hover:translate-y-0 hover:shadow-lg"
          onClick={() => setShowCalendly(true)}
        >
          <span className="relative z-20">Book a Call</span>
          <div className="absolute inset-0 bg-black rounded-full translate-y-1 -z-10"></div>
        </button>
        </div>

        {/* Calendly Popup Embed */}
        {showCalendly && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button className="absolute top-2 right-2 text-black" onClick={() => setShowCalendly(false)}>
                ✕
              </button>
              <iframe
                src="https://calendly.com/shadab28696"
                className="w-full h-[500px] border-none"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;