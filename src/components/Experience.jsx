import { experiences } from '../data/experienceData';
import { Briefcase } from 'lucide-react';

function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#EDEDED] rounded-full">
                  <Briefcase className="h-6 w-6 text-black" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-black font-medium">{exp.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience; 