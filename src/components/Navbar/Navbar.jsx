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
      <header className="container py-2 px-6 flex justify-center items-center max-w-[720px]">
        <div className="flex justify-center items-center flex-col">
          <img src={Logo} alt="Logo corazón" className="w-2/4" />
          <h1 className="font-['Caveat'] text-5xl">Mi papá Richard</h1>
        </div>
      </header>
    </>
  );
};

export default Navbar;
