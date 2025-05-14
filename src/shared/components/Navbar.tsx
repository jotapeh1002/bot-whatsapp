import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const itensNavbar = [
    { name: 'Inicio', link: '#home' },
    { name: 'Contato', link: '#contact' },
    { name: 'Recursos', link: '#services' },
    { name: 'Sobre', link: '#about' },
  ];

  return (
    <div className='h-16 container px-auto'>
      <div className="bg-gray-900 text-white py-4 fixed w-full z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <FaWhatsapp className="mr-2 font-sans text-green-600" />
            <span className="text-green-600">AG</span>
            <span className="text-white">Connect</span>
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {itensNavbar.map((item, index) => (
              <div key={index} className="relative">
                <a
                  href={item.link}
                  className="text-white font-medium hover:text-green-400 transition-colors duration-300
                  relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-green-500
                  before:transition-all before:content-[''] before:duration-300 hover:before:w-full"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 mt-4 px-4">
            <nav className="flex flex-col">
              {itensNavbar.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.link}
                    className="text-white border-t border-gray-700 w-full font-medium hover:text-green-400 transition-all duration-300 py-4 block"
                    onClick={() => {setMobileMenuOpen(false)}}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm brightness-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};
