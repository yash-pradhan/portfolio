import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => (
    <>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center  text-darkForeground p-6">
            <h1 className="text-5xl font-extrabold mb-6 animate-fadeIn">
                About Me
            </h1>
            <div className="max-w-3xl text-center text-white animate-slideUp">
                <p className="mb-4">
                    Hi, I’m Yosawant Pradhan, a dedicated developer driven by a passion for crafting innovative solutions to complex challenges. With a commitment to excellence and a creative mindset, I thrive on transforming ideas into impactful, high-quality digital experiences.        </p>
                <p className="mb-4">
                    I specialize in full-stack development and have experience working with modern frameworks like React, Next.js, and Node.js.
                </p>
                <p>
                    Outside of coding, I enjoy [your hobbies or personal interests]
                </p>
            </div>
        </main>
        <Footer />
    </>
);

export default About;
