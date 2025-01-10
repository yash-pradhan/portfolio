import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  { name: "Project 1", description: "A cool project that solves X problem." },
  { name: "Project 2", description: "A web app built to achieve Y." },
  { name: "Project 3", description: "An innovative solution for Z." },
];

const Projects = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-darkBackground text-darkForeground p-28">
      <h1 className="text-5xl font-extrabold text-center mb-6 animate-fadeIn">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideUp">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-cardBackground p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            <h2 className="text-2xl font-bold text-accent mb-2">
              {project.name}
            </h2>
            <p className="text-secondary">{project.description}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default Projects;
