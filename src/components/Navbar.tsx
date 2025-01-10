import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 shadow-lg fixed top-0 w-full z-10 blur-90">
      <ul className="flex justify-center space-x-10">
      {[
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Works' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
      ].map(({ href, label }) => (
        <li key={href} className="relative group">
          <Link href={href} legacyBehavior>
            <a className="text-white text-lg font-bold tracking-widest uppercase transition-all duration-300 hover:text-yellow-300">
              {label}
            </a>
          </Link>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
