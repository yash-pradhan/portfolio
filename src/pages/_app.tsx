// src/pages/_app.tsx
import '../styles/globals.css'; // Path to your global CSS file
import type { AppProps } from 'next/app';
import VantaBackground from '../components/VantaBackground';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <VantaBackground />

      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        </div>

    </>
  )
}

export default MyApp;
