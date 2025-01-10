import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

const Home = () => (
  <>
    <Navbar />
    <main className="min-h-screen flex flex-col items-center justify-center bg-darkBackground text-darkForeground p-6">
      <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg mb-8 text-secondary animate-slideUp">
        Explore my work and skills. Let&apos;s create something amazing together!
      </p>
      <button className="px-6 py-3 bg-accent text-darkBackground font-bold rounded-lg shadow-lg hover:bg-red-600 transition-all">
        View My Projects
      </button>
    </main>
    <Footer />
  </>
);

export default Home;
