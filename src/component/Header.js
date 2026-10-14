import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faHouse, faBell, faUser, faBars} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger, } from '@fortawesome/free-brands-svg-icons';




function Header() {
  let Links = [
    {
      name: (
        <FontAwesomeIcon icon={faHouse} className="size-7  text-gray-600 active:text-blue-500" />
      ),
      link: "/",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7  text-gray-600 active:text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      ),
      link: "/",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7  text-gray-600 active:text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
      link: "/",
    },
  ];

  //  icone a droite
  let IconeLinks = [
    {
      name: (
        <FontAwesomeIcon icon={faBars} />
      ),
      link: "/",
    },
    {
      name: (
        <FontAwesomeIcon icon={faFacebookMessenger} />
      ),
      link: "/",
    },
    {
      name: (
        <FontAwesomeIcon icon={faBell} />
      ),
      link: "/",
    },
    {
      name: (
        <FontAwesomeIcon icon={faUser} />
      ),
      link: "/",
    },
  ];

  return (
    <header className="grid grid-cols-4 gap-4 items-center justify-between bg-white shadow-md w-full fixed z-10 top-0 left-0">
      {/* Logo */}
      <div className="flex items-center">
        <div className="">
        <FontAwesomeIcon icon={faFacebook} size="2xl" className="size-10 m-2 text-blue-600" />
        </div>
        <div className="flex items-center bg-gray-100 p-2 rounded-full ml-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className=" text-gray-500" />

          <input
            type="search"
            name=""
            id=""
            placeholder="Recherche sur facebook"
            className="bg-transparent hidden xl:block outline-none pl-2 text-sm rounded-full  bg-gray-200"
          />
        </div>
      </div>

      {/* Navigation  */}

      <div className="col-span-2 hidden md:block space-x-4">
        <ul className="flex items-center justify-center">
          {Links.map((link) => (
            <div className="flex">
            <li className="font-semibold mx-1 p-2 justify-between px-9 border-b-4  active:border-blue-500 border-white hover:rounded-lg hover:bg-gray-300">
              <button className="hover:text-blue-500">
                {link.name}
            </button> 
            </li>
            </div>
          ))}
        </ul>
      </div>

      {/* Diverse */}

      <div className="flex w-full">
        <div className="bg-gray-100 hidden xl:block p-2 rounded-full">
          <input
          type="button"
            className="bg-transparent outline-none active:text-blue-500 text-black text-sm font-semibold rounded-full"
          value="Trouver vos a..."/>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-3 items-center">
            {IconeLinks.map((link) => (
              <li className="text-xl cursor-pointer ml-2">
                <a href="" className="bg-gray-300 px-1 rounded-full">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
