import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => (
  <>
    <Navbar />
    <main className="min-h-screen  text-darkForeground flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">Contact Me</h1>
      <form className="bg-cardBackground p-6 rounded-lg shadow-lg max-w-lg w-full animate-slideUp space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-accent transition-all"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-accent transition-all"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-accent transition-all"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-accent text-darkBackground font-bold rounded-lg hover:bg-red-600 transition-all"
        >
          Send Message
        </button>
      </form>
    </main>
    <Footer />
  </>
);

export default Contact;
