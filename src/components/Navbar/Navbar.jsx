import React from "react";
import { FaHeart } from "react-icons/fa";
import Logo from "../../assets/logo.webp";

const NavbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "#",
  },
  {
    id: 2,
    title: "El accidente",
    link: "#",
  },
  {
    id: 3,
    title: "Las secuelas",
    link: "#",
  },
  {
    id: 4,
    title: "La recuperación",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <header className="container py-2 px-6 flex justify-center md:justify-between items-center">
        <div className="flex justify-center items-center flex-col">
          <img src={Logo} alt="Logo corazón" className="w-2/4" />
          <h1 className="font-['Caveat'] text-3xl">Mi papá Richard</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-3">
            {NavbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.link}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="bg-sky-600 px-6 py-2 text-white rounded font-medium hidden md:block">
          Donar <FaHeart />
        </button>
      </header>
    </>
  );
};

export default Navbar;
