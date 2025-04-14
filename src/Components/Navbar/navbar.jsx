import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact"
    }
  ];




const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='flex  justify-between  mx-10  text-black  pt-4  font-semibold'>
            
            <span className='flex' onClick={() =>setOpen(!open)}>

              { 
                open ? 
                <X className='md:hidden '></X> : 
                <Menu className='md:hidden  ml-10'></Menu> 
              }
               <ul className={`md:hidden  absolute duration-1000 
                ${open ? 'top-10' : '-top-45'} 
                ml-10 bg-gray-300`}>
                {
                    navigationData.map(route =><li className='mr-4  hover:bg-blue-500'>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul>

              <h3 className='ml-4'>My Navbar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rakibul</h3>
            </span>

            <ul className='md:flex  hidden'>
                {
                    navigationData.map(route =><li className='lg:mr-10  px-2  hover:bg-amber-400'>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul>
                  {/* Extra */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            <button className='mr-4'>Sign In</button>
        </nav>
    );
};

export default Navbar;




