"use client"
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');

      if (hamburger && navMenu && !hamburger.contains(e.target as Node) && !navMenu.contains(e.target as Node)) {
        setHamburgerActive(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a href="#home" className="block py-6 text-lg font-bold">Muh Baharuddin Portofolio</a>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className="absolute right-4 block lg:hidden" onClick={toggleHamburger}>
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav
              id="nav-menu"
              className={`absolute right-4 top-full ${isHamburgerActive ? '' : 'hidden'} w-full max-w-[250px] rounded-lg bg-slate-800 py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Beranda</a>
                </li>
                <li className="group">
                  <a href="#about" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">About Me</a>
                </li>
                <li className="group">
                  <a href="#skill" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Skill</a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Portfolio</a>
                </li>
                <li className="group">
                  <a href="#contact" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar;