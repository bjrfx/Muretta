import { FC } from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Gerard',
    role: 'Business Development',
    description: 'Bringing innovation and quality to every project.',
  },
  {
    name: 'Moe',
    role: 'Project Manager',
    description: 'Passionate about sustainable construction practices.',
  },
  {
    name: 'Claude',
    role: 'Sales Representative',
    description: 'Committed to delivering exceptional results.',
  },
  {
    name: 'Alain',
    role: 'Technical Coordinator',
    description: 'Diverse talents coming together for excellence.',
  },
];

const About: FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Our Legacy Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Our Legacy</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          With a rich history in providing construction solutions, Muretta has been optimizing operations through efficient supply chain management. Discover our journey towards excellence today.
        </p>
      </section>

      {/* Our Purpose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Our Purpose</h2>
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Muretta was founded to address the new challenges that builders are facing in North America, particularly the rising costs of construction due to labor and material price increases.
          </p>
          <p>
            Our business model focuses on providing comprehensive architectural and engineering services that are seamlessly integrated into the design process.
          </p>
          <p>
            Empowered by a reliable supply chain, our strategy aims to streamline the construction process, ultimately saving both time and money.
          </p>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Our Process</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          At Muretta, we leverage Building Information Modeling (BIM), digital fabrication, and automation through CAD/CAM technologies, combined with seamless technical coordination with our fabricators and suppliers, to deliver efficient and cost-effective construction solutions.
        </p>
      </section>

      {/* Automation through BIM Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Automation through BIM</h2>
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Building Information Modeling (BIM) offers several key benefits through clash detection, which is one of the primary advantages of using this technology in construction projects. Clash detection refers to the process of identifying conflicts or issues in the design phase that might cause problems during construction.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Early Issue Identification</h3>
              <p>
                Clash detection allows project teams to identify and resolve conflicts early in the design phase—before construction begins. This can include clashes between structural elements, mechanical systems, electrical layouts, and plumbing.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Cost Savings</h3>
              <p>
                By addressing conflicts before construction, clash detection minimizes the need for costly rework or modifications on-site. Fixing issues during the design phase is much less expensive compared to making changes during construction.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Improved Coordination</h3>
              <p>
                BIM facilitates better coordination among various disciplines involved in the project. With accurate and up-to-date models, teams can detect and resolve clashes between different systems before they are built.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Enhanced Design Quality</h3>
              <p>
                Clash detection in BIM ensures that the design is accurate and optimized for the real-world construction process, resulting in a more functional and well-coordinated building.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Risk Reduction</h3>
              <p>
                Identifying and addressing clashes helps mitigate risks related to safety, functionality, and performance. By catching these issues early, risks are minimized.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Better Communication</h3>
              <p>
                By providing a shared digital platform, BIM helps all stakeholders to collaborate and communicate in real-time, making it easier to resolve clashes and discuss potential solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Meet Our Team</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Dedicated professionals drive our success.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 backdrop-blur-sm hover:bg-gradient-to-br hover:from-white hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-700 dark:text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;