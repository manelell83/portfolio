import { Lock, Shield, Code } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
            I’m currently a first-year cybersecurity engineering student at INPT,
            Morocco’s leading tech institute. My academic path began with a strong 
            foundation in mathematics and physics during my two years of preparatory classes (PSI stream),
            where I developed a disciplined and analytical mindset
            </p>
            <p className="text-lg">
            Today, I’m channeling that foundation 
            into securing the digital world — learning about network protection, ethical hacking,
            and the architecture of safe systems. My goal is to become a cybersecurity expert capable
            of creating resilient, privacy-preserving technologies for both individuals and organizations.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="p-6 bg-[#EDEDED] rounded-lg text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="font-bold mb-2">Cybersecurity</h3>
                <p>I enjoy analyzing vulnerabilities, solving CTF challenges</p>
              </div>
              <div className="p-6 bg-[#EDEDED] rounded-lg text-center">
                <Lock className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="font-bold mb-2">Blockchain</h3>
                <p>I’ve explored blockchain technologies and developed smart contracts</p>
              </div>
              <div className="p-6 bg-[#EDEDED] rounded-lg text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="font-bold mb-2">Programming</h3>
                <p>I have hands-on experience in Python, Java, C, Bash, and JavaScript.</p>
              </div>
              <div className="p-6 bg-[#EDEDED] rounded-lg text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="font-bold mb-2">Tools </h3>
                <p>I’m confident using Git, Linux, wireshark,metasploit,nmap,sqlmap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 