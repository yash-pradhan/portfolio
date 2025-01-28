import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileImage from "../components/ProfileImage";

const Home: React.FC = () => (
  <>
    <Navbar />
    <main className="min-h-screen flex flex-col items-center justify-center text-darkForeground p-6">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <ProfileImage imageUrl="/my-image.jpeg" />

        {/* Welcome Text */}
        <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg mb-8 text-white animate-slideUp">
          Explore my work and skills. Let&apos;s create something amazing together!
        </p>
        <button className="px-6 py-3 bg-accent text-black font-bold rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-all">
        View My Projects
        </button>
      </div>
    </main>
    <Footer />

    {/* Global Styles */}
    <style jsx global>{`
      .animate-morph {
        animation: morph 8s infinite;
      }

      @keyframes morph {
        0% {
          d: path(
            "M43.4,-56.1C57.6,-46.7,69.6,-34.2,74.8,-18.9C80,-3.5,78.3,15.6,70.5,30.5C62.6,45.4,48.7,56.1,33.4,61.6C18,67.2,1.1,67.7,-16.8,66.2C-34.8,64.7,-54,61.1,-64.4,48.6C-74.8,36.1,-76.3,14.6,-74.2,-5.2C-72.2,-25,-66.5,-43.2,-54.5,-52.9C-42.4,-62.6,-24.2,-63.7,-7.2,-59.4C9.9,-55.1,19.8,-45.5,43.4,-56.1Z"
          );
        }
        50% {
          d: path(
            "M50.1,-65.4C63.2,-56.7,71.8,-42.8,72.1,-28.6C72.4,-14.4,64.3,0,58.3,15.3C52.3,30.7,48.4,46.9,37.6,56.4C26.8,66,-3.2,68.8,-18.8,62.7C-34.5,56.7,-45.7,41.8,-55.6,27.9C-65.5,13.9,-74.1,0.8,-71.3,-12.1C-68.5,-25.1,-54.2,-37.8,-40.7,-47.4C-27.3,-57,-13.7,-63.6,1.3,-65.2C16.3,-66.9,32.6,-63.8,50.1,-65.4Z"
          );
        }
        100% {
          d: path(
            "M43.4,-56.1C57.6,-46.7,69.6,-34.2,74.8,-18.9C80,-3.5,78.3,15.6,70.5,30.5C62.6,45.4,48.7,56.1,33.4,61.6C18,67.2,1.1,67.7,-16.8,66.2C-34.8,64.7,-54,61.1,-64.4,48.6C-74.8,36.1,-76.3,14.6,-74.2,-5.2C-72.2,-25,-66.5,-43.2,-54.5,-52.9C-42.4,-62.6,-24.2,-63.7,-7.2,-59.4C9.9,-55.1,19.8,-45.5,43.4,-56.1Z"
          );
        }
      }
    `}</style>
  </>
);

export default Home;
