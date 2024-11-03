import { useState } from "react";
import Link from "../link/Link";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
const NavBar = () => {
const [open, setOpen] =useState(false)

  const routes =[
    { id: 1, name: 'Home', path: '/home' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact', path: '/contact' },
    { id: 4, name: 'Services', path: '/services' },
    { id: 5, name: 'Blog', path: '/blog' },
  ];
  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ?<AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <ul
        className={`md:flex md:static justify-between absolute duration-1000 ${
          open ? '<GiHamburgerMenu /> top-16' : '-top-60 '
        } bg-orange-300 shadow-lg p-9`}
      >
        {routes.map(route => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;