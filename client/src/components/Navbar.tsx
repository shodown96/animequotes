import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import AppConfig from '../utilities/config';

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  const CloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.756348 0.756348L17.3442 17.3442" stroke="white" strokeWidth="1.67563"></path>
      <path d="M0.756348 17.3442L17.3442 0.756342" stroke="white" strokeWidth="1.67563"></path>
    </svg>
  )

  return (
    <header className='text-white'>

      <nav className="px-10 lg:px-24 py-5 flex items-center gap-4 justify-between w-full bg-primary ">
        <Link to={"/"}>
          <h1 className=' font-semibold text-xl lg:text-2xl'>AnimeQuotes</h1>
        </Link>

        <div>
          <div className="hidden lg:flex items-center gap-4">
            {AppConfig.ROUTES.NavLinks.map((route, i) => (
              <NavLink
                to={route.path}
                onClick={() => setIsOpened(false)}
                key={i}>
                <h5 className={`text-xl hover:text-secondary transition-all cursor-pointer `}>
                  {route?.name}
                </h5>
              </NavLink>
            ))}
          </div>


          <div className='flex flex-row items-center gap-5 lg:hidden'>
            <div className='lg:hidden'>
              <div className=''>
                <button
                  className='space-y-1.5 focus:outline-none focus:ring focus:ring-white/60 p-1 pb-1.5 rounded-md'
                  onClick={() => setIsOpened(!isOpened)}
                >
                  <div
                    className={`h-[3px] bg-white transition-all duration-300 ${isOpened
                      ? 'w-[24px] rotate-45 translate-y-[10px]'
                      : 'w-[24px] rotate-0 translate-x-0'
                      }`}
                  />
                  <div
                    className={`h-[3px] bg-white w-[24px] transition-all duration-300  ${isOpened ? 'opacity-0' : 'opacity-100'
                      }`}
                  />
                  <div
                    className={`h-[3px] bg-white self-end transition-all duration-300 ${isOpened
                      ? 'w-[24px] -rotate-45 -translate-y-[8px]'
                      : 'w-[24px]  rotate-0'
                      }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className={`fixed bg-primary p-5 z-50 w-screen h-screen top-0 left-0 transition-all ${isOpened ? 'translate-x-[0] ' : 'translate-x-[-100vw]'}`}>
        <div className="flex justify-end w-full items-end px-10 mb-10">
          <div className="p-2 mt-5 -mr-6 cursor-pointer" onClick={() => setIsOpened(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-5 mb-10 w-full">
          {AppConfig.ROUTES.NavLinks.map((route, i) => (
            <NavLink
              // href={route.path}
              to={route.path}
              onClick={() => setIsOpened(false)}
              key={i}>
              <h5 className={`text-xl hover:underline hover:text-secondary underline-offset-4 transition-all cursor-pointer `}>
                {route?.name}
              </h5>
            </NavLink>
          ))}
        </div>
      </nav>

    </header>
  );
}
