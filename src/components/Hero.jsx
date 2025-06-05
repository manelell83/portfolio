import { ChevronDown } from 'lucide-react';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-end justify-center pt-16 bg-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Name and Introduction */}
        <div className="text-center md:text-left md:w-1/2">
          <div data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1500">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Manal Chemlali
              <br />
              <span className="text-4xl md:text-6xl">Cybersecurity Student</span>
            </h1>
          </div>
          <div data-aos="fade-up"
               data-aos-anchor-placement="bottom-bottom">
            <p className="text-xl md:text-2xl text-black mb-12 max-w-2xl md:max-w-none mx-auto md:mx-0">
              First-year cybersecurity engineering student at INPT, passionate about ethical hacking 
              and blockchain technology. Currently exploring the intersection of security and 
              decentralized systems.
            </p>
          </div>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-md text-lg"
          >
            Discover More
            <ChevronDown className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Right side - Profile Picture */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/public/image.png"
            alt="Manal Chemlali"
            className="h-auto object-cover max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero; 